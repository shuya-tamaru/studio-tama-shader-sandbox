import CustomShaderMaterial from "three-custom-shader-material/vanilla";
import * as THREE from "three";

export interface ICustomShaderMaterial extends CustomShaderMaterial {
  uuid: string;
  map: THREE.Texture;
}
