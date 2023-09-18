import React, { Suspense } from "react";
import Spline from '@splinetool/react-spline';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Index() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
                <div className="flex mx-auto overflow-y-scroll rounded-lg h-[90vh] w-[64vw]">
                    <Viewer
                        fileUrl="/Nawed Ali.pdf"

                        defaultScale={1.5}
                    />
                </div>
            </Worker>
            <Footer />
        </Suspense>
    );
}
