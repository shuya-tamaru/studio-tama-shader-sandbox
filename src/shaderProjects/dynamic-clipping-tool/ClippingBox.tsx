import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { TransformControls } from "@react-three/drei";
import { TransformControls as TransformControlsImpl } from "three-stdlib";

import { ICustomShaderMaterial } from "../../types/ICustomShaderMaterial";
import vertex from "./shaders/boxVertex.glsl";
import fragment from "./shaders/boxFragment.glsl";
import useClippingSelector, { ClippingType } from "./store/useClippingSelector";

interface Props {
  customDefaultMaterials: ICustomShaderMaterial[];
  modelBoundingBox: THREE.Box3;
}

function ClippingBox({ customDefaultMaterials, modelBoundingBox }: Props) {
  const clippingType = useClippingSelector((state) => state.clippingType);
  const isCurrentType = clippingType === ClippingType.BOX;

  const boxCenter = modelBoundingBox.getCenter(new THREE.Vector3());
  const initialPosition = new THREE.Vector3(
    boxCenter.x,
    modelBoundingBox.max.y + 5,
    boxCenter.z - 30
  );
  const boxSize = 15;
  const boxDiffuse = new THREE.Color("#ff0582");
  const material = new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms: {
      uBoxSize: new THREE.Uniform(boxSize),
      uColor: new THREE.Uniform(
        new THREE.Color(boxDiffuse.r, boxDiffuse.g, boxDiffuse.b)
      ),
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });

  const boxRef = useRef<THREE.Mesh>(null);
  const controlRef = useRef<TransformControlsImpl>(null);

  const handleUniforms = (position: THREE.Vector3) => {
    customDefaultMaterials.forEach((material) => {
      if (
        material.uniforms &&
        material.uniforms.uBoxCenter &&
        material.uniforms.uBoxSize
      ) {
        material.uniforms.uBoxCenter.value = position;
        material.uniforms.uBoxSize.value = boxSize;
        material.needsUpdate = true;
      }
    });
  };

  useEffect(() => {
    if (boxRef.current && controlRef.current) {
      if (!isCurrentType) {
        boxRef.current.position.copy(initialPosition);
      }
      controlRef.current.attach(boxRef.current);
    }
  }, [isCurrentType, initialPosition]);

  return (
    <TransformControls
      mode="translate"
      ref={controlRef}
      enabled={isCurrentType}
      showX={isCurrentType}
      showY={isCurrentType}
      showZ={isCurrentType}
      object={boxRef.current ? boxRef.current : undefined}
      onChange={() => {
        const position = boxRef.current?.position;
        if (position) {
          handleUniforms(position);
        }
      }}
    >
      <mesh
        ref={boxRef}
        visible={isCurrentType}
        material={material}
        position={initialPosition}
      >
        <boxGeometry args={[boxSize, boxSize, boxSize, 1, 1]} />
      </mesh>
    </TransformControls>
  );
}

export default React.memo(ClippingBox);
