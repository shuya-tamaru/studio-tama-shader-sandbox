---
title: "【Grasshopper Tutorial】Elefrontを使用して属性情報を扱う(Part2 : モデルから属性情報の取得 / 単品図作成）"
description: "test2 description"
date: "2023-02-06"
coverImage: "thumbnail/test/testCover.webp"
slug: "2"
tags:
  - "Rhinoceros"
  - "Basic"
  - "Kangaroo"
  - "GH Modeling"
  - "Python"
---

以前記事にもしましたが（以下リンク）Python で同じものを実装したことがあるのですが、流石に Python では容量の大きなモデルを Export するとクラッシュしてしまったので今回 C＃で実装することにしました。
C＃はそんなに書き慣れていないので、おかしな書き方等あるかもしれませんがその辺はご了承ください。

以下に、動作状況の Youtube リンクをのせときますのでぜひ確認してみてください。

https://styublog.com/broken-sphere/

https://qiita.com/yoshi_yast/items/44ef9da9bc136e455950

https://zenn.dev/musuke/scraps/3363e44e550254

https://www.google.com/

https://stackoverflow.com/questions/61932918/want-to-have-an-event-handler-for-the-browsers-back-button-with-next-js

https://github.com/shuya-tamaru/arch_blog/blob/main/src/libs/MarkDownTheme.tsx

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

# voronoi を使用したパターン 2/2

![title w:50%](https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png)

```twitter:1591459151380901888

```

```youtube:MrLFSSLh8BI

```

# Rhinoceros 基礎

## Rhinoceros 基礎

### Rhinoceros 基礎

#### Rhinoceros 基礎

##### Rhinoceros 基礎

###### Rhinoceros 基礎

paragraph

~~取消線を引く~~

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

$$\rho \frac{D \bm{u}}{Dt} = -\nabla p + (\lambda + \mu ) \nabla (\nabla \cdot \bm{u}) + \mu \nabla ^{2} \bm{u} +\rho \tilde{\bm{F}}$$

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
