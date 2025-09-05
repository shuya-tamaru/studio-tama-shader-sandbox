/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck

import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const title =
      "【Rhinoceros】作成したモデルをUser Textを持たせたままWebで表示する";
    // const title = hasTitle
    //   ? searchParams.get("title")?.slice(0, 100)
    //   : "STUDIO TAMA";
    const imageData = await fetch(
      new URL(
        process.env.NEXT_PUBLIC_BASE_URL! +
          "/thumbnail/rhino-plugin-gltf/rhino-plugin-gltf.png"
      ),
      import.meta.url
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "#fff",
            backgroundSize: "100% 100%",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "left",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <p>{title}</p>
          <img src={imageData} style={{ width: "1120px", height: "100%" }} />

          {/* <div>
            <p>{title}</p>
          </div> */}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
