import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Model() {
  const { nodes } = useGLTF("/medias/torrus.glb");
  const { viewport } = useThree();
  const torus = useRef(null!);

  useFrame(() => {
    torus.current.rotation.x += 0.02;
  });

  // const materialProps = useControls({
  //   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0, max: 1, step: 0.1 },
  //   ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
  //   chromaticAberration: { value: 0.02, min: 0, max: 1 },
  //   backside: { value: true },
  // });

  return (
    <group scale={viewport.width / 3.75}>
      <Text
        font={"/fonts/August-Bold.woff"}
        position={[0, 0, -1]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Nikhil Karthik
      </Text>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial
          {...{
            thickness: 0.2,
            roughness: 0,
            transmission: 1,
            ior: 1.2,
            chromaticAberration: 0.02,
            backside: true,
          }}
        />
      </mesh>
    </group>
  );
}
