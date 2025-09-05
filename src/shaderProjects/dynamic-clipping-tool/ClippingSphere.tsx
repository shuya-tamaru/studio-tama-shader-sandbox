import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { TransformControls } from "@react-three/drei";
import { TransformControls as TransformControlsImpl } from "three-stdlib";

import { ICustomShaderMaterial } from "../../types/ICustomShaderMaterial";
import vertex from "./shaders/holoVertex.glsl";
import fragment from "./shaders/holoFragment.glsl";
import useClippingSelector, { ClippingType } from "./store/useClippingSelector";

interface Props {
  customDefaultMaterials: ICustomShaderMaterial[];
  modelBoundingBox: THREE.Box3;
}

function ClippingSphere({ customDefaultMaterials, modelBoundingBox }: Props) {
  const clippingType = useClippingSelector((state) => state.clippingType);
  const isCurrentType = clippingType === ClippingType.SPHERE;

  const boxCenter = modelBoundingBox.getCenter(new THREE.Vector3());
  const initialPosition = new THREE.Vector3(
    boxCenter.x,
    modelBoundingBox.max.y + 5,
    boxCenter.z - 30
  );
  const sphereRadius = 15;
  const sphereDiffuse = new THREE.Color("#A020F0");
  const material = new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms: {
      uColor: new THREE.Uniform(
        new THREE.Color(sphereDiffuse.r, sphereDiffuse.g, sphereDiffuse.b)
      ),
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });

  const sphereRef = useRef<THREE.Mesh>(null);
  const controlRef = useRef<TransformControlsImpl>(null);

  const handleUniforms = (position: THREE.Vector3) => {
    customDefaultMaterials.forEach((material) => {
      if (
        material.uniforms &&
        material.uniforms.uSphereCenter &&
        material.uniforms.uSphereRadius
      ) {
        material.uniforms.uSphereCenter.value = position;
        material.uniforms.uSphereRadius.value = sphereRadius;
        material.needsUpdate = true;
      }
    });
  };

  useEffect(() => {
    if (sphereRef.current && controlRef.current) {
      if (!isCurrentType) {
        sphereRef.current.position.copy(initialPosition);
      }
      controlRef.current.attach(sphereRef.current);
    }
  }, [initialPosition]);

  return (
    <TransformControls
      mode="translate"
      ref={controlRef}
      object={sphereRef.current ? sphereRef.current : undefined}
      onChange={() => {
        const position = sphereRef.current?.position;
        if (position) {
          handleUniforms(position);
        }
      }}
      showX={isCurrentType}
      showY={isCurrentType}
      showZ={isCurrentType}
      enabled={isCurrentType}
    >
      <mesh
        ref={sphereRef}
        material={material}
        visible={isCurrentType}
        position={initialPosition}
      >
        <sphereGeometry args={[sphereRadius, sphereRadius, 100, 100]} />
      </mesh>
    </TransformControls>
  );
}

export default React.memo(ClippingSphere);
