import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import waveVertex from "./shaders/waveVertex.glsl";
import waveFragment from "./shaders/waveFragment.glsl";
import { Uniforms } from "../../types/Uniforms";

export default function WaveModel({
  uniforms,
  wireframe,
}: {
  uniforms: Uniforms;
  wireframe: boolean;
}) {
  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100, 200, 200]} />
      <shaderMaterial
        args={[
          {
            uniforms,
            vertexShader: waveVertex,
            fragmentShader: waveFragment,
            side: THREE.DoubleSide,
            wireframe,
          },
        ]}
      />
    </mesh>
  );
}
