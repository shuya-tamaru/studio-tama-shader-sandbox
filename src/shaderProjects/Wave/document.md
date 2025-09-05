# Wave Shader

Three.js の ShaderMaterial を使用した波のアニメーション実装です。頂点シェーダーで動的な波形を生成し、フラグメントシェーダーで UV ベースの色付けを行っています。

## 概要

このシェーダーは平面メッシュに対して複数の波形を合成し、時間経過とともに動的に変化する波のエフェクトを作り出します。

## Vertex Shader（頂点シェーダー）

```glsl
  // vertex.glsl
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
```

### 主な機能：

1. **基本波形生成**: X 軸と Y 軸方向のサイン波を合成
2. **時間アニメーション**: `uTime`と`uSpeed`で波の動きを制御
3. **複数波の重ね合わせ**: ループ処理で複雑な波形を生成
4. **ランダムノイズ**: 自然な波のゆらぎを追加
5. **エッジ固定**: メッシュの端を固定して自然な境界を作成

### Uniform 変数：

- `uTime`: 経過時間
- `uSpeed`: アニメーション速度
- `uAmplitude`: 波の振幅
- `uWaveCountX/Y`: X/Y 軸方向の波の数
- `uPeriod`: 波の周期
- `uNoiseStrength`: ノイズの強度

## Fragment Shader（フラグメントシェーダー）

```glsl
  // fragment.glsl
  varying vec2 vUv;

  void main() {
    gl_FragColor = vec4(vUv, 0.8, 1.0);
  }
```

### 機能：

シンプルな UV ベースのカラーリングを実装。UV の X 座標が赤成分、Y 座標が緑成分になり、青成分は固定値 0.8、アルファは 1.0 で完全不透明に設定されています。

## 技術的特徴

- **リアルタイム計算**: GPU で高速な波形計算
- **パラメータ制御**: 外部から uniform 変数で波の特性を調整可能
- **自然な境界**: メッシュ端での不自然な継ぎ目を回避
- **ノイズ合成**: 疑似ランダム関数による自然なゆらぎ

このシェーダーは水面や布のシミュレーション、抽象的なビジュアルエフェクトなど、様々な用途に応用できます。
