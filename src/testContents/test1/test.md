---
title: "【Grasshopper-Three.js】Circle Packing"
description: "MarkDownブログ作ってみました。"
date: "2023-02-06"
coverImage: "thumbnail/test/testCover.webp"
slug: "1"
tags:
  - "Rhinoceros"
  - "Basic"
---

Rhinoceros で作成したモデルを Web に持っていくことがよくあるのですが、設定した属性情報も一緒に Web へ持っていきたくなることもしばしばあり glb / gltf Exporter を実装しました。

以前記事にもしましたが（以下リンク）Python で同じものを実装したことがあるのですが、流石に Python では容量の大きなモデルを Export するとクラッシュしてしまったので今回 C＃で実装することにしました。
C＃はそんなに書き慣れていないので、おかしな書き方等あるかもしれませんがその辺はご了承ください。

以下に、動作状況の Youtube リンクをのせときますのでぜひ確認してみてください。

https://studio-tama-delta.vercel.app/gumball

# 概要

建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト

https://styublog.com/broken-sphere/
https://styublog.com/broken-sphere/

# voronoi を使用したパターン 2/2

![title w:50%](https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png)

## プログラムの解説

```twitter:1591459151380901888

```

```youtube:MrLFSSLh8BI

```

### Rhinoceros 基礎

#### 建築歴史

##### Parametric

# おわり

###### まとめ

paragraph

~~取消線を引く~~

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

$$\rho \frac{D \bm{u}}{Dt} = -\nabla p + (\lambda + \mu ) \nabla (\nabla \cdot \bm{u}) + \mu \nabla ^{2} \bm{u} +\rho \tilde{\bm{F}}$$

ssssssss
ddddd

- Lists
- [ ] todo
- [x] done

A table:

| TH  | TH  |
| --- | --- |
| TD  | TD  |
| TD  | TD  |

| TH  |
| --- |
| TD  |
| TD  |

```js:index.tsx
import { CodeComponent } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { escapeHtml } from "../libs/EscapeHtml";
import classes from "../styles/textArea.module.css";

const CodeBlack: CodeComponent = ({ inline, className, children }) => {
  if (inline) {
    return <code className={className}>{children}</code>;
  }
  const match = /language-(\w+)/.exec(className || "language-plaintext");
  const filename = match ? className?.split(":")[1] ?? undefined : undefined;

  return (
    <>
      {filename && (
        <div className={classes.codeBlockFileNameContainer}>
          <span className={classes.codeBlockFilename}>
            {escapeHtml(filename)}
          </span>
        </div>
      )}

      <SyntaxHighlighter
        style={tomorrow}
        language={match ? match[1] : undefined}
        filename={filename}
        children={String(children).replace(/\n$/, "")}
      />
    </>
  );
};

export default CodeBlack;

```

## Hello World

Rhinoceros で作成したモデルを Web に持っていくことがよくあるのですが、設定した属性情報も一緒に Web へ持っていきたくなることもしばしばあり glb / gltf Exporter を実装しました。

以前記事にもしましたが（以下リンク）Python で同じものを実装したことがあるのですが、流石に Python では容量の大きなモデルを Export するとクラッシュしてしまったので今回 C＃で実装することにしました。
C＃はそんなに書き慣れていないので、おかしな書き方等あるかもしれませんがその辺はご了承ください。

以下に、動作状況の Youtube リンクをのせときますのでぜひ確認してみてください。

https://styublog.com/broken-sphere/

https://qiita.com/yoshi_yast/items/44ef9da9bc136e455950

https://zenn.dev/musuke/scraps/3363e44e550254

https://www.google.com/

https://stackoverflow.com/questions/61932918/want-to-have-an-event-handler-for-the-browsers-back-button-with-next-js

https://github.com/shuya-tamaru/arch_blog/blob/main/src/libs/MarkDownTheme.tsx

![title w:50%](https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png)

```twitter:1591459151380901888

```

[Qiita](http://qiita.com)

```success
infomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomation
```

```error
infomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomation
```

```info
infomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomation
```

```warning
infomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomation
```

```twitter:1591459151380901888

```

```youtube:MrLFSSLh8BI

```

```js:index.tsx
import { CodeComponent } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { escapeHtml } from "../libs/EscapeHtml";
import classes from "../styles/textArea.module.css";

const CodeBlack: CodeComponent = ({ inline, className, children }) => {
  if (inline) {
    return <code className={className}>{children}</code>;
  }
  const match = /language-(\w+)/.exec(className || "language-plaintext");
  const filename = match ? className?.split(":")[1] ?? undefined : undefined;

  return (
    <>
      {filename && (
        <div className={classes.codeBlockFileNameContainer}>
          <span className={classes.codeBlockFilename}>
            {escapeHtml(filename)}
          </span>
        </div>
      )}

      <SyntaxHighlighter
        style={tomorrow}
        language={match ? match[1] : undefined}
        filename={filename}
        children={String(children).replace(/\n$/, "")}
      />
    </>
  );
};

export default CodeBlack;

```
