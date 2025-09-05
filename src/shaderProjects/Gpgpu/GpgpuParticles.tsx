import React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { IModel } from "./types/IModel";
import { IBaseGeometry } from "./types/Particles";
import { setColorAttributes } from "./libs/setColorAttributes";
import { gpgpuInitialize } from "./libs/gpgpuInitialize";
import { IGpgpu } from "./types/IGpgpu";
import { getParticles } from "./libs/getParticles";

type Props = {
  model: IModel;
  particleMaterial: THREE.ShaderMaterial;
};

export default function GpgpuParticles({ model, particleMaterial }: Props) {
  const { gl } = useThree();
  const baseMesh = model.scene.children[0] as THREE.Mesh;
  //base geometry
  const base: IBaseGeometry = {
    instance: baseMesh.geometry,
    count: baseMesh.geometry.attributes.position.count,
  };

  const baseGeometry = setColorAttributes(base);
  const gpgpu: IGpgpu = gpgpuInitialize(baseGeometry, gl);
  const particles = getParticles(baseGeometry, gpgpu, particleMaterial);
  const debug = gpgpu.debug as THREE.Mesh;
  // scene.add(debug);

  useFrame((state, delta) => {
    gpgpu.computation.compute();
    if (particles.material) {
      particles.material.uniforms.uParticlesTexture.value =
        gpgpu.computation.getCurrentRenderTarget(
          gpgpu.particlesVariable
        ).texture;
      gpgpu.particlesVariable.material.uniforms.uTime.value =
        state.clock.elapsedTime;
      gpgpu.particlesVariable.material.uniforms.uDeltaTime.value = delta;
    }
  });

  return <primitive object={particles.points as THREE.Points} />;
}
