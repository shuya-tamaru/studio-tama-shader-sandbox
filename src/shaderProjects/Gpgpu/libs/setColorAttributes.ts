import * as THREE from "three";
import { IBaseGeometry } from "../types/Particles";

export const setColorAttributes = (baseGeometry: IBaseGeometry) => {
  const colorArray = new Float32Array(baseGeometry.count * 3);
  const colors = [
    0xff0000, // Red
    0xffa500, // Orange
    0xffff00, // Yellow
    0x00ff00, // Green
    0x0000ff, // Blue
    0x00ffff, // Indigo
    0x8a2be2, // Violet
  ];

  for (let i = 0; i < baseGeometry.count; i++) {
    const i3 = i * 3;
    const chosenColorIndex = Math.floor(Math.random() * colors.length);
    const chosenColor = colors[chosenColorIndex];
    const color = new THREE.Color(0xffffff);
    // const color = new THREE.Color(chosenColor);

    colorArray[i3 + 0] = color.r;
    colorArray[i3 + 1] = color.g;
    colorArray[i3 + 2] = color.b;
  }
  baseGeometry.instance.setAttribute(
    "color",
    new THREE.BufferAttribute(colorArray, 3)
  );

  return baseGeometry;
};
