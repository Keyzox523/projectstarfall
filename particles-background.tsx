import { useEffect, useRef } from "react";

declare global {
  interface Window {
    particlesJS: any;
  }
}

export function ParticlesBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load particles.js library
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      if (window.particlesJS && particlesRef.current) {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: ["#FFD700", "#8B5CF6", "#3B82F6"] },
            shape: { type: "circle" },
            opacity: { value: 0.6, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: false },
            move: {
              enable: true,
              speed: 1,
              direction: "bottom",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: false },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          retina_detect: true,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      id="particles-js"
      ref={particlesRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
