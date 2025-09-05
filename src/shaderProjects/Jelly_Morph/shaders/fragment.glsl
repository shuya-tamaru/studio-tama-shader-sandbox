varying vec2 vUv;
varying float vDisplacement;

uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uOpacity;
uniform float uRoughness;
uniform float uMetalness;

void main() {
  float colorMix = smoothstep(-1.0, 1.0, vDisplacement);
  csm_DiffuseColor.rgb = mix(uColorA,uColorB, colorMix);
  csm_DiffuseColor.a = uOpacity;

  csm_Roughness = uRoughness;
  csm_Metalness = uMetalness;
}