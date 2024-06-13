"use client";
import { Canvas } from "@react-three/fiber";
import Model from "@/components/Scene/Modal";
import { Environment } from "@react-three/drei";

export default function Index() {
  return (
    <Canvas
      className="absolute top-0 left-0 h-full w-full"
      style={{ position: "absolute", zIndex: 10 }}
    >
      <Model />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="city" />
    </Canvas>
  );
}
