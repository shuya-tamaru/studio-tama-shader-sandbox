import * as THREE from "three";

import { Environment, useGLTF } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import { createCustomShaderMaterial } from "./utils/createCustomShaderMaterials";
import { ICustomShaderMaterial } from "../../types/ICustomShaderMaterial";
import ClippingPlanes from "./ClippingPlanes";
import ClippingSphere from "./ClippingSphere";
import ClippingBox from "./ClippingBox";

export default function ClippingModel() {
  const model = useGLTF("/shader/model/building.glb");

  const customShaderMaterials = useMemo(() => {
    if (!model) return;
    const customMaterials = Object.values(model.materials).map((material) =>
      createCustomShaderMaterial(material as THREE.MeshStandardMaterial)
    );
    return customMaterials;
  }, [model]);

  const modelBoundingBox = useMemo(() => {
    if (!model) return;
    const bbox = new THREE.Box3().setFromObject(model.scene);
    return bbox;
  }, [model]);

  useEffect(() => {
    if (!customShaderMaterials) return;
    model.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = customShaderMaterials.find(
          (mat) => mat.uuid === (child.material as ICustomShaderMaterial).uuid
        );
        if (material) {
          child.material = material;
        }
      }
    });
  }, [customShaderMaterials]);

  return (
    <>
      <primitive object={model.scene} />
      <Environment files="/shader/environment/hdr.hdr" />
      {customShaderMaterials && modelBoundingBox && (
        <>
          <ClippingBox
            customDefaultMaterials={customShaderMaterials}
            modelBoundingBox={modelBoundingBox}
          />
          <ClippingSphere
            customDefaultMaterials={customShaderMaterials}
            modelBoundingBox={modelBoundingBox}
          />
          <ClippingPlanes
            customDefaultMaterials={customShaderMaterials}
            modelBoundingBox={modelBoundingBox}
          />
        </>
      )}
    </>
  );
}
