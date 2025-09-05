import * as THREE from "three";

export interface Uniforms {
  [key: string]: {
    value: number | string | THREE.Color | THREE.Texture | THREE.Vector3;
  };
}
