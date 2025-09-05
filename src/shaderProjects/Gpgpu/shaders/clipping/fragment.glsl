uniform float cutY;
uniform vec4 uDiffuse;

varying vec3 vPosition;

void main() {
  
  //case plane
  if (vPosition.y > cutY) {
    discard;
  }

  gl_FragColor = uDiffuse;
}