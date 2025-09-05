  uniform float uTime;
  uniform float uSpeed;
  uniform float uAmplitude;
  uniform float uWaveCountX;
  uniform float uWaveCountY;
  uniform float uPeriod;
  uniform float uNoiseStrength;
  float PI = 3.1415926535897932384626433832795;

  varying vec2 vUv;

  float remap(float value, float oldMin, float oldMax, float newMin, float newMax) {
    return newMin + (value - oldMin) * (newMax - newMin) / (oldMax - oldMin);
  }

  //noise
  float random (in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }


  void main() {
    vUv = uv;

    vec3 pos = position;
    float remapAngleX = vUv.x * uWaveCountX * PI;
    float remapAngleY = vUv.y * uWaveCountY * PI;
    float xWave = sin(remapAngleX) * uAmplitude;
    float yWave = sin(remapAngleY) * uAmplitude;
    float zWave = xWave * yWave;
    pos.z += zWave;
    float maxVal = pow(uAmplitude, 2.0);
    float minVal = - maxVal;

    for (int i = 0; i < 10; i++) {
      float remapZAngle = remap(pos.x, 0.0, 1.0, 0.0, PI/2.0);
      float remapZ = sin(remapZAngle);
      pos.z += remapZ /3.0;
    }

    pos.z *= sin(uTime * uSpeed + (vUv.x + vUv.y ) * uPeriod );
    pos.z += random(vUv) * uNoiseStrength;

    if(vUv.x == 0.0 || vUv.x == 1.0 || vUv.y == 0.0 || vUv.y == 1.0) {
      pos.z = 0.0;
    }

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos.x, pos.y,pos.z, 1.0);
  }