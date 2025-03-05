import type { ReactNode } from "react";

const LibrePathLogo = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 696.5 663.01"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <g id="a">
      <circle cx="350.83" cy="307.99" r="307.99" style={{ fill: "#fff" }} />
      <path
        d="M642.71,308.01c0,160.99-130.51,291.5-291.5,291.5S59.72,469,59.72,308.01,190.22,16.52,351.21,16.52s291.5,130.5,291.5,291.5Z"
        style={{ fill: "#e2eefb", fillRule: "evenodd" }}
      />
      <circle cx="351.7" cy="302.13" r="206.14" style={{ fill: "#fff" }} />
      <circle cx="351.21" cy="302.01" r="192.73" style={{ fill: "#7ebcf2" }} />
      <circle cx="351.21" cy="302.01" r="136.16" style={{ fill: "#fff" }} />
      <circle cx="351.21" cy="302.01" r="123.78" style={{ fill: "#1a80d9" }} />
      <path d="M463.06,367.59l232.94,293.4-346.35-5.1L0,660.99l84-89,263.44-272.35c1.32-1.37,3.57-1.17,4.64.4l69.93,102.95,36.62-35.68c1.27-1.24,3.34-1.11,4.44.28Z" style={{ fill: "#fff" }} />
      <path d="M685,660.99H14s173.8-181.8,174-182c40.2-37.26,114.74-119.43,159.38-165.32,1.34-1.38,3.61-1.15,4.66.46l60.41,92.99-21.46,28.86c-1.43,1.74-1,3,0,5,1.15,2.31,4.34-.15,6-2l61.29-58.23c1.24-1.23,3.26-1.14,4.39.19,37.8,44.61,222.31,280.05,222.31,280.05Z" style={{ fill: "#333", fillRule: "evenodd" }} />
    </g>
    <g id="b">
      <path d="M491.57,660.98c7.11,0-76.98-9.08-90.06-10.12-50.95-4.05-81.76-8.09-101.91-14.16-19.53-5.89-48.58-24.28-61.62-36.42-7.28-6.78-27.27-30.09-22.26-45.32,5.49-16.66,28.54-16.66,50.49-27.26,6.04-2.92,42.81-19.69,57.08-51.5,8.6-19.17,18.94-53.69,23.62-72.11.29-1.16-.19-2.1-1.09-2.1h-3.52c-.8,0-1.75.79-2.12,1.76-2.04,5.35-8.71,22.55-19.09,46.71-8.21,19.11-13.17,28.78-23.05,37.86-15.53,14.28-53.83,26.66-62.56,28.78-17.65,4.27-24.76,4.27-40.16,14.39-13.71,9-17.77,26.3-16.54,39.82,2.17,23.79,12.87,32.34,14.17,51.24,2.35,34.17-92.25,40.69-88.87,40.47l387.49-2.02Z" style={{ fill: "#fcfcfc", fillRule: "evenodd" }} />
    </g>
  </svg>
);

function Header() {
  return (
    <header className="bg-white py-4 px-6 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LibrePathLogo />
          <span className="text-xl font-semibold text-gray-900">LibrePath</span>
        </div>
        <a
          href="https://github.com/librepathai/librepath"
          className="text-gray-600 hover:text-gray-900 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

function HeroBanner() {
  return (
    <div className="bg-blue-500 py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">LibrePath AI</h1>
        <p className="text-2xl text-white mb-8">Your Path to Private AI Productivity</p>
        <a
          href="/docs/intro"
          className="bg-white text-blue-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
    </div>
  );
}