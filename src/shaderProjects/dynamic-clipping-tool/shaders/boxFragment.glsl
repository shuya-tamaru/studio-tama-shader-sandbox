varying vec3 vPosition;
uniform float uBoxSize;
uniform vec3 uColor;

void main() {
  float edgeWidth = 7.6;
  float edgeThreshold = edgeWidth;

  bool nearEdgeX = abs(vPosition.x) > uBoxSize - edgeThreshold;
  bool nearEdgeY = abs(vPosition.y) > uBoxSize - edgeThreshold;
  bool nearEdgeZ = abs(vPosition.z) > uBoxSize - edgeThreshold;

  float opacity = 0.0;
  if((nearEdgeX && nearEdgeY) || (nearEdgeX && nearEdgeZ) || (nearEdgeY && nearEdgeZ)){
    opacity = 1.0;
  }
  if (opacity < 0.1) discard;

  gl_FragColor = vec4(uColor, opacity);
}