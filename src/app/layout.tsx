import "@/styles/globals.css";
import { ColorModeScript } from "@chakra-ui/react";
import { Metadata } from "next";
import theme from "../configs/theme";
import { Providers } from "./Provider";
import Analytics from "../components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: {
    default: "STUDIO TAMA",
    template: "%s | STUDIO TAMA",
  },
  description:
    "Rhinoceros・Grasshopper・Three.jsなどを用いたモデリングや役立つTipsを発信しています。",
  verification: {},
  twitter: {
    card: "summary_large_image",
    title: "STUDIO TAMA",
    description:
      "Rhinoceros・Grasshopper・Three.jsなどを用いたモデリングや役立つTipsを発信しています。",
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
    type: "article",
    title: "STUDIO TAMA",
    description:
      "Rhinoceros・Grasshopper・Three.jsなどを用いたモデリングや役立つTipsを発信しています。",
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

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ja">
    <head>
      <Analytics />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </head>
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
