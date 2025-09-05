import * as THREE from "three";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";

import vertex from "../shaders/clippingVertex.glsl";
import fragment from "../shaders/clippingFragment.glsl";
import { ICustomShaderMaterial } from "../../../types/ICustomShaderMaterial";

export const createCustomShaderMaterial = (
  material: THREE.MeshStandardMaterial
) => {
  const diffuse = material.color;
  const diffuseRGBA = new THREE.Vector4(
    diffuse.r,
    diffuse.g,
    diffuse.b,
    material.opacity
  );
  const { name, color, metalness, opacity, map } = material;
  const transparent = opacity < 1.0;

  const customMaterial = new CustomShaderMaterial({
    baseMaterial: THREE.MeshStandardMaterial,
    uniforms: {
      cutX: { value: 1e9 },
      cutY: { value: 1e9 },
      cutZ: { value: -1e9 },
      uDiffuse: { value: diffuseRGBA },
      uSphereCenter: { value: new THREE.Vector3(1e9, 1e9, 1e9) },
      uSphereRadius: { value: 0 },
      uBoxCenter: { value: new THREE.Vector3(1e9, 1e9, 1e9) },
      uBoxSize: { value: 0 },
    },
    vertexShader: vertex,
    fragmentShader: fragment,
    name,
    color,
    metalness,
    roughness: 1.0,
    transparent,
    opacity,
    map,
    side: THREE.DoubleSide,
    envMapIntensity: 0.9,
    silent: true,
  }) as ICustomShaderMaterial;
  customMaterial.uuid = material.uuid;

  return customMaterial;
};
