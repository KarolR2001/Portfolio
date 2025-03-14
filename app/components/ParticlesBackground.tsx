"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: { value: 20 },
          move: { enable: true, speed: 0.5 },
          size: { value: { min: 1, max: 3 } },
          color: { value: "#ffffff" },
          opacity: { value: 0.1 },
          links: {
            enable: true,
            distance: 190,
            color: "#ffffff",
            opacity: 0.1,
          },
        },
        background: { color: "#0a0e17" },
      }}
    />
  );
}
