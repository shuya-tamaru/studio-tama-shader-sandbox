varying vec3 vPosition;

void main() {
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
}