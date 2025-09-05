import React, { useEffect, useRef } from "react";
import { TransformControls } from "@react-three/drei";
import { TransformControls as TransformControlsImpl } from "three-stdlib";
import * as THREE from "three";
import { ICustomShaderMaterial } from "../../types/ICustomShaderMaterial";

type Props = {
  customShaderMaterial: ICustomShaderMaterial;
  particleMaterial: THREE.ShaderMaterial;
};

export default function Clipping({
  customShaderMaterial,
  particleMaterial,
}: Props) {
  const planeRef = useRef<THREE.Mesh>(null);
  const controlRef = useRef<TransformControlsImpl>(null);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    side: THREE.DoubleSide,
    wireframe: true,
  });
  const handleUniforms = (position: number) => {
    customShaderMaterial.uniforms.cutY.value = position;
    particleMaterial.uniforms.cutY.value = position;
  };

  useEffect(() => {
    if (planeRef.current && controlRef.current) {
      controlRef.current.attach(planeRef.current);
    }
  }, []);

  return (
    <TransformControls
      mode="translate"
      ref={controlRef}
      object={planeRef.current ? planeRef.current : undefined}
      showX={false}
      showY={true}
      showZ={false}
      enabled={true}
      onChange={() => {
        const position = planeRef.current?.position;
        if (position) {
          handleUniforms(position.y);
        }
      }}
    >
      <mesh
        rotation={new THREE.Euler(Math.PI / 2, 0, 0)}
        ref={planeRef}
        material={material}
        position={[0, -50, 0]}
      >
        <planeGeometry args={[3, 3, 1, 1]} />
      </mesh>
    </TransformControls>
  );
}
