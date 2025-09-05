export interface ShaderSlugMapper {
  slug: string;
  title: string;
  description: string;
  imagePaths: string;
  createdAt: string;
}

export const shaderSlugMapper: ShaderSlugMapper[] = [
  {
    slug: "wave",
    title: "Wave",
    description: `Three.js - shaderを用いた頂点の移動`,
    imagePaths: "/shader/thumbnail/wave.png",
    createdAt: "2024-04-25",
  },
  {
    slug: "csm_wave",
    title: "Wave_CustomShader",
    description: `Three.js - カスタムシェーダーを用いた頂点移動`,
    imagePaths: "/shader/thumbnail/csm_wave.png",
    createdAt: "2024-04-26",
  },
  {
    slug: "dynamic-clipping-tool",
    title: "Dynamic Clipping Tool",
    description:
      "Three.js - Shaderを使用した任意の図形でのモデルのクリッピング",
    imagePaths: "/shader/thumbnail/dynamic-clipping-tool.png",
    createdAt: "2024-04-27",
  },
  {
    slug: "gpgpu",
    title: "gpgpu",
    description: "Three.js - GPGPUを使用したGPUでのパーティクル計算",
    imagePaths: "/shader/thumbnail/gpgpu.png",
    createdAt: "2024-06-10",
  },
  {
    slug: "jelly_morph",
    title: "jelly_morph",
    description: "Three.js - Shaderを使用して球体のジェリーのような変形",
    imagePaths: "/shader/thumbnail/jelly_morph.png",
    createdAt: "2024-09-07",
  },
  {
    slug: "soap_bubble",
    title: "soap_bubble",
    description: "Three.js - Shaderを使用したシャボン玉のようなエフェクト",
    imagePaths: "/shader/thumbnail/soapBubble.png",
    createdAt: "2024-09-08",
  },
];
