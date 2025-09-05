uniform float cutX;
uniform float cutY;
uniform float cutZ;
uniform vec4 uDiffuse;
uniform vec3 uSphereCenter;
uniform float uSphereRadius;
uniform vec3 uBoxCenter;
uniform float uBoxSize;

varying vec3 vPosition;

void main() {
  float epsilon = 0.02;
  
  //case plane
  if (vPosition.x > cutX) {
    discard;
  }
  if (vPosition.y > cutY) {
    discard;
  }
  if (vPosition.z < cutZ) {
    discard;
  }

  //case sphere
  if (length(vPosition - uSphereCenter) < uSphereRadius) {
    discard;
  }

  //case box
  if (vPosition.x < uBoxCenter.x + uBoxSize / 2.0 && vPosition.x > uBoxCenter.x - uBoxSize / 2.0 &&
      vPosition.y < uBoxCenter.y + uBoxSize / 2.0 && vPosition.y > uBoxCenter.y - uBoxSize / 2.0 &&
      vPosition.z < uBoxCenter.z + uBoxSize / 2.0 && vPosition.z > uBoxCenter.z - uBoxSize / 2.0) {
    discard;
  }


  if(vPosition.x <= cutX && vPosition.x >= cutX - epsilon){
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    return;
  }
  if(vPosition.y <= cutY && vPosition.y >= cutY - epsilon){
    gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
    return;
  }
  if(vPosition.z >= cutZ && vPosition.z <= cutZ + epsilon){
    gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    return;
  }


  gl_FragColor = vec4(uDiffuse);
}
