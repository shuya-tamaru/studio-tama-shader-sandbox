import { Metadata } from "next";
import { shaderSlugMapper } from "../shaderProjects/shaderSlugMapper";
import ShaderPageWrapper from "../components/shaderProjectComponent/ShaderPageWrapper";

export const metadata: Metadata = {
  icons: {
    icon: "/faviconShader.svg",
  },
  twitter: {
    title: "STUDIO TAMA",
    card: "summary_large_image",
    description: "Shader sand box",
    site: "@tama20013",
    creator: "@tama20013",
    images: [
      {
        url: "/blogTop.webp",
        width: 1120,
        height: 630,
        alt: "STUDIO TAMA",
      },
    ],
  },
  openGraph: {
    type: "website",
    title: "STUDIO TAMA",
    siteName: "STUDIO TAMA",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    description: "Shader sand box",
    images: [
      {
        url: "/blogTop.webp",
        width: 1120,
        height: 630,
        alt: "STUDIO TAMA",
      },
    ],
  },
};

export default async function ShaderTopPage() {
  const posts = shaderSlugMapper;
  return <ShaderPageWrapper posts={posts} />;
}
