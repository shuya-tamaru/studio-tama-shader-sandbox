import { Environment, useGLTF } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

import vertex from "./shaders/particles/vertex.glsl";
import fragment from "./shaders/particles/fragment.glsl";
import { IModel } from "./types/IModel";
import GpgpuParticles from "./GpgpuParticles";
import Clipping from "./Clipping";
import { createCustomShaderMaterial } from "./libs/createCustomShaderMat";
import { useThree } from "@react-three/fiber";

export default function GpgpuModel() {
  const { viewport } = useThree();
  const model = useGLTF("/shader/model/test.glb") as unknown as IModel;

  const customShaderMaterial = useMemo(() => {
    return createCustomShaderMaterial();
  }, []);

  const particleMaterial = useMemo(() => {
    const pixelRatio = window.devicePixelRatio;
    const material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        cutY: new THREE.Uniform(5),
        uSize: new THREE.Uniform(0.8),
        uResolution: new THREE.Uniform(
          new THREE.Vector2(
            viewport.width * pixelRatio,
            viewport.height * pixelRatio
          )
        ),
        uParticlesTexture: new THREE.Uniform(null),
      },
    });

    return material;
  }, []);

  useEffect(() => {
    if (!customShaderMaterial) return;
    model.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = customShaderMaterial;
      }
    });
  }, [customShaderMaterial]);

  return (
    <>
      <primitive object={model.scene} />
      <GpgpuParticles model={model} particleMaterial={particleMaterial} />
      <Clipping
        customShaderMaterial={customShaderMaterial}
        particleMaterial={particleMaterial}
      />
      <Environment files="/shader/environment/hdr.hdr" />
    </>
  );
}
