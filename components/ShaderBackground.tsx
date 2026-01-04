import { useEffect, useRef } from 'react';

interface ShaderBackgroundProps {
  isDarkMode: boolean;
}

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_darkMode;
  
  // Hash function
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  
  // Value noise
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  
  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 pixelCoord = gl_FragCoord.xy;
    
    float t = u_time;
    
    // Base colors - Light mode is very white
    vec3 lightBase = vec3(0.999, 0.999, 0.999);
    vec3 darkBase = vec3(0.03, 0.03, 0.04);
    vec3 baseColor = mix(lightBase, darkBase, u_darkMode);
    
    // Flowing noise - MUCH more visible movement
    float scale1 = 2.0;
    float scale2 = 4.0;
    float scale3 = 6.0;
    
    // These move noticeably
    float n1 = noise(uv * scale1 + vec2(t * 0.15, t * 0.1));
    float n2 = noise(uv * scale2 + vec2(-t * 0.12, t * 0.08) + 50.0);
    float n3 = noise(uv * scale3 + vec2(t * 0.1, -t * 0.14) + 100.0);
    
    float combinedNoise = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
    
    // Color variation based on noise - Light mode stays very white
    vec3 lightTint = vec3(0.97, 0.97, 0.96);
    vec3 darkTint = vec3(0.08, 0.08, 0.10);
    vec3 tintColor = mix(lightTint, darkTint, u_darkMode);
    
    // Less visible blend for light mode, more for dark
    float blendAmount = mix(0.15, 0.4, u_darkMode);
    vec3 color = mix(baseColor, tintColor, combinedNoise * blendAmount);
    
    // Animated film grain - refreshes every frame (subtler in light mode)
    float grainTime = floor(t * 15.0); // 15 fps grain
    float grain = hash(pixelCoord * 0.01 + grainTime) - 0.5;
    float grainIntensity = mix(0.04, 0.06, u_darkMode);
    color += grain * grainIntensity;
    
    // Moving wave pattern overlay (subtler in light mode)
    float wave1 = sin(uv.x * 8.0 + uv.y * 4.0 + t * 0.8) * 0.5 + 0.5;
    float wave2 = sin(uv.x * 6.0 - uv.y * 5.0 - t * 0.6) * 0.5 + 0.5;
    float wavePattern = (wave1 + wave2) * 0.5;
    
    // Apply wave as subtle brightness variation
    float waveIntensity = mix(0.01, 0.03, u_darkMode);
    color += (wavePattern - 0.5) * waveIntensity;
    
    // Dithering dots pattern that shifts
    vec2 ditherCoord = pixelCoord + vec2(sin(t * 2.0) * 3.0, cos(t * 1.8) * 3.0);
    float ditherPattern = mod(floor(ditherCoord.x) + floor(ditherCoord.y), 2.0);
    float ditherIntensity = mix(0.015, 0.025, u_darkMode);
    color += (ditherPattern - 0.5) * ditherIntensity;
    
    // Subtle vignette
    float vignette = 1.0 - distance(uv, vec2(0.5)) * 0.25;
    color *= vignette;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram | null {
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

export default function ShaderBackground({ isDarkMode }: ShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const isDarkModeRef = useRef(isDarkMode);

  useEffect(() => {
    isDarkModeRef.current = isDarkMode;
  }, [isDarkMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { 
      alpha: false,
      antialias: false,
      preserveDrawingBuffer: false
    });
    
    if (!gl) return;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    
    if (!vertexShader || !fragmentShader) return;

    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;
    
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const darkModeLocation = gl.getUniformLocation(program, 'u_darkMode');

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    const startTime = performance.now();

    const render = () => {
      const time = (performance.now() - startTime) / 1000;
      gl.uniform1f(timeLocation, time);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(darkModeLocation, isDarkModeRef.current ? 1.0 : 0.0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        display: 'block'
      }}
    />
  );
}
