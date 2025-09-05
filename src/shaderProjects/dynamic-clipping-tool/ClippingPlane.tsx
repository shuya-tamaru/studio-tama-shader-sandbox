import React, { useEffect, useRef } from "react";
import { ICustomShaderMaterial } from "../../types/ICustomShaderMaterial";
import * as THREE from "three";
import { TransformControls } from "@react-three/drei";
import { TransformControls as TransformControlsImpl } from "three-stdlib";
import useClippingSelector, { ClippingType } from "./store/useClippingSelector";

type Props = {
  customDefaultMaterials: ICustomShaderMaterial[];
  position: THREE.Vector3;
  axis: "x" | "y" | "z";
};

function ClippingPlane({ customDefaultMaterials, axis, position }: Props) {
  const clippingType = useClippingSelector((state) => state.clippingType);
  const isCurrentType = clippingType === ClippingType.PLANES;

  const planeRef = useRef<THREE.Mesh>(null);
  const controlRef = useRef<TransformControlsImpl>(null);

  const uniformVal = axis === "x" ? "cutX" : axis === "y" ? "cutY" : "cutZ";
  const rotation: THREE.Euler =
    axis === "x"
      ? new THREE.Euler(0, Math.PI / 2, 0)
      : axis === "y"
      ? new THREE.Euler(Math.PI / 2, 0, 0)
      : new THREE.Euler(0, 0, 0);
  const color = axis === "x" ? 0xff0000 : axis === "y" ? 0x00ff00 : 0x0000ff;
  const material = new THREE.MeshBasicMaterial({
    color,
    side: THREE.DoubleSide,
    wireframe: true,
  });

  const handleUniforms = (position: number) => {
    customDefaultMaterials.forEach((material) => {
      if (material.uniforms && material.uniforms[uniformVal]) {
        material.uniforms[uniformVal].value = position;
        material.needsUpdate = true;
      }
    });
  };

  useEffect(() => {
    if (planeRef.current && controlRef.current) {
      if (isCurrentType) {
        planeRef.current.position.copy(position);
      }
      controlRef.current.attach(planeRef.current);
    }
  }, [isCurrentType, position]);

  return (
    <TransformControls
      mode="translate"
      ref={controlRef}
      object={planeRef.current ? planeRef.current : undefined}
      showX={axis === "x" && isCurrentType && true}
      showY={axis === "y" && isCurrentType && true}
      showZ={axis === "z" && isCurrentType && true}
      enabled={isCurrentType}
      onChange={() => {
        const position = planeRef.current?.position;
        if (position) {
          handleUniforms(position[axis]);
        }
      }}
      name={`clippingControls+${axis}`}
    >
      <mesh
        rotation={rotation}
        ref={planeRef}
        material={material}
        name={`clippingPlane+${axis}`}
        position={position}
        visible={isCurrentType}
      >
        <planeGeometry args={[20, 20, 1, 1]} />
      </mesh>
    </TransformControls>
  );
}

export default React.memo(ClippingPlane);
