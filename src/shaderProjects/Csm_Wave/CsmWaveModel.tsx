import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import csmWaveVertex from "./shaders/csmWaveVertex.glsl";
import csmWaveFragment from "./shaders/csmWaveFragment.glsl";
import { Uniforms } from "../../types/Uniforms";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";
import { useMemo } from "react";
import { Environment } from "@react-three/drei";

export default function CsmWaveModel({
  uniforms,
  wireframe,
}: {
  uniforms: Uniforms;
  wireframe: boolean;
}) {
  const material = useMemo(() => {
    return new CustomShaderMaterial({
      baseMaterial: new THREE.MeshPhysicalMaterial(),
      uniforms,
      vertexShader: csmWaveVertex,
      fragmentShader: csmWaveFragment,
      wireframe,
      silent: true,
      side: THREE.DoubleSide,
      envMapIntensity: 0.4,
    });
  }, [uniforms, wireframe]);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(100, 100, 200, 200);
    geo.computeTangents();
    return geo;
  }, []);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <>
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        material={material}
        geometry={geometry}
      />
      <Environment files="/shader/environment/hdr.hdr" />
    </>
  );
}
