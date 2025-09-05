import * as THREE from "three";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";

import fragment from "../shaders/clipping/fragment.glsl";
import vertext from "../shaders/clipping/vertex.glsl";
import { ICustomShaderMaterial } from "../../../types/ICustomShaderMaterial";

export const createCustomShaderMaterial = () => {
  const diffuse = new THREE.Color(0x000000);
  const diffuseRGBA = new THREE.Vector4(diffuse.r, diffuse.g, diffuse.b, 1.0);

  const customMaterial = new CustomShaderMaterial({
    baseMaterial: THREE.MeshStandardMaterial,
    uniforms: {
      cutY: { value: 5 },
      uDiffuse: { value: diffuseRGBA },
    },
    vertexShader: vertext,
    fragmentShader: fragment,
    name: "CustomShaderMaterial",
    color: diffuse,
    metalness: 0.0,
    roughness: 1.0,
    transparent: false,
    opacity: 1.0,
    side: THREE.DoubleSide,
    envMapIntensity: 10.0,
    silent: true,
  }) as ICustomShaderMaterial;

  return customMaterial;
};
