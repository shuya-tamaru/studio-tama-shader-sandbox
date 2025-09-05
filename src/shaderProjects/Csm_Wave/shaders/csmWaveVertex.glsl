  uniform float uTime;
  uniform float uSpeed;
  uniform float uAmplitude;
  uniform float uWaveCountX;
  uniform float uWaveCountY;
  uniform float uPeriod;
  uniform float uNoiseStrength;

  attribute vec4 tangent;

  varying vec2 vUv;

  float remap(float value, float oldMin, float oldMax, float newMin, float newMax) {
    return newMin + (value - oldMin) * (newMax - newMin) / (oldMax - oldMin);
  }

  float random (in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  float getBaseWave(vec2 uv) {
    float remapAngleX = uv.x * uWaveCountX * PI;
    float remapAngleY = uv.y * uWaveCountY * PI;
    float xWave = sin(remapAngleX) * uAmplitude;
    float yWave = sin(remapAngleY) * uAmplitude;
    float zWave = xWave * yWave;
    return zWave;
  }

  vec3 loopWave(vec3 position ,vec2 uv) {    
    float maxVal = pow(uAmplitude, 2.0);
    float minVal = - maxVal;

    for (int i = 0; i < 10; i++) {
      float remapZAngle = remap(position.x, 0.0, 1.0, 0.0, PI/2.0);
      float remapZ = sin(remapZAngle);
      position.z += remapZ /3.0;
    }

    return position;
  }

  void main() {
    vec3 biTangent = cross(normal, tangent.xyz);
    float shift = 0.01;
    vec3 positionA = csm_Position + tangent.xyz * shift;
    vec3 positionB = csm_Position + biTangent * shift;
    
    vUv = uv;
    float zWave = getBaseWave(vUv);
    csm_Position.z += zWave;
    positionA.z += zWave;
    positionB.z += zWave;

    csm_Position = loopWave(csm_Position,vUv);
    positionA = loopWave(positionA,vUv);
    positionB = loopWave(positionB,vUv);

    csm_Position.z *= sin(uTime * uSpeed + (vUv.x + vUv.y ) * uPeriod );
    positionA.z *= sin(uTime * uSpeed + (vUv.x + vUv.y ) * uPeriod );
    positionB.z *= sin(uTime * uSpeed + (vUv.x + vUv.y ) * uPeriod );
    
    csm_Position.z += random(vUv) * uNoiseStrength;
    positionA.z += random(vUv) * uNoiseStrength;
    positionB.z += random(vUv) * uNoiseStrength;

    vec3 toA = normalize(positionA - csm_Position);
    vec3 toB = normalize(positionB - csm_Position);
    csm_Normal = cross(toA, toB);

  }