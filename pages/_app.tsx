import React from 'react';
import '../styles/globals.css';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
