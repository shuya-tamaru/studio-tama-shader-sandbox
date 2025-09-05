import * as THREE from "three";

export default function AxisHelper() {
  const axesHelper = new THREE.AxesHelper(50);
  return <primitive object={axesHelper} />;
}
