import React from "react";
import { ICustomShaderMaterial } from "../../types/ICustomShaderMaterial";
import ClippingPlane from "./ClippingPlane";
import * as THREE from "three";

interface Props {
  customDefaultMaterials: ICustomShaderMaterial[];
  modelBoundingBox: THREE.Box3;
}

export default function ClippingPlanes({
  customDefaultMaterials,
  modelBoundingBox,
}: Props) {
  const boxCenter = modelBoundingBox.getCenter(new THREE.Vector3());
  const initialPositionX = new THREE.Vector3(
    modelBoundingBox.max.x + 2,
    boxCenter.y,
    boxCenter.z
  );
  const initialPositionY = new THREE.Vector3(
    boxCenter.x,
    modelBoundingBox.max.y + 2,
    boxCenter.z
  );
  const initialPositionZ = new THREE.Vector3(
    boxCenter.x,
    boxCenter.y,
    modelBoundingBox.min.z - 5
  );

  return (
    <>
      <ClippingPlane
        customDefaultMaterials={customDefaultMaterials}
        axis="x"
        position={initialPositionX}
      />
      <ClippingPlane
        customDefaultMaterials={customDefaultMaterials}
        axis="y"
        position={initialPositionY}
      />
      <ClippingPlane
        customDefaultMaterials={customDefaultMaterials}
        axis="z"
        position={initialPositionZ}
      />
    </>
  );
}
