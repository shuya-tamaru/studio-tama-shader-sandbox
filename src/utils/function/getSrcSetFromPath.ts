export const getSrcSetFromPath = (path: string) => {
  const fileNameWithoutExt = path.split(".")[0];

  const sm = fileNameWithoutExt + "-sm.webp";
  const md = fileNameWithoutExt + "-md.webp";
  const lg = fileNameWithoutExt + "-lg.webp";
  const xl = fileNameWithoutExt + ".webp";
  const png = fileNameWithoutExt + ".png";
  const webp = fileNameWithoutExt + ".webp";

  const srcSet = `${xl} 1920w, ${lg} 960w, ${md} 640w, ${sm} 480w`;
  const sizes = `(max-width: 960px) 100vw, (max-width: 640px) 100vw, 480px`;

  return { srcSet, sizes, sm, md, lg, xl, png, webp };
};

//path = thumbnail/test/testCover.webp
//sm. md. lg, xl
//thumbnail/test/testCover-sm.webp 480w
//thumbnail/test/testCover-md.webp 640w
//thumbnail/test/testCover-lg.webp 960w
//thumbnail/test/testCover-xl.webp 1920w
