import { Metadata } from "next";
import {
  ShaderSlugMapper,
  shaderSlugMapper,
} from "../../shaderProjects/shaderSlugMapper";
import ShaderWrapperComponent from "../../components/shaderProjectComponent/ShaderWrapperComponent";

export type PageProps = {
  params: ShaderSlugMapper;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params;
  const post = shaderSlugMapper.find((post) => post.slug === slug);
  const siteName = "STUDIO TAMA";
  try {
    const title = post && post.title;
    const description = post && `【${siteName}】` + post.description;
    const imageUrl = post ? post.imagePaths : "";

    return {
      title: title,
      description: description,
      alternates: {
        canonical: params.slug,
      },
      icons: {
        icon: "/faviconShader.svg",
      },
      twitter: {
        title: title,
        card: "summary_large_image",
        description: description,
        site: "@tama20013",
        creator: "@tama20013",
        images: [
          {
            url: imageUrl,
            width: 960,
            height: 540,
            alt: title,
          },
        ],
      },
      openGraph: {
        type: "article",
        title: title,
        siteName,
        url: process.env.NEXT_PUBLIC_BASE_URL,
        description: description,
        images: [
          {
            url: imageUrl,
            width: 960,
            height: 540,
            alt: title,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "Page is Not Found",
      description: "Page is Not Found",
    };
  }
}

export default function ShaderPostPage({ params }: PageProps) {
  const { slug } = params;
  return <ShaderWrapperComponent slug={slug} />;
}

export function generateStaticParams() {
  const allPosts = shaderSlugMapper;
  const slugs = allPosts.map((post) => ({
    slug: post.slug,
  }));

  return slugs;
}

export const dynamicParams = false;
