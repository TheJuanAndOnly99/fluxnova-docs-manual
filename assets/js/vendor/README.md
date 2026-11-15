# Vendored JavaScript

## mermaid.min.js

- Library: [Mermaid](https://github.com/mermaid-js/mermaid) 11.4.1, file `dist/mermaid.min.js` (self-contained UMD/IIFE build) from the npm package.
- Source: https://registry.npmjs.org/mermaid/-/mermaid-11.4.1.tgz (npm integrity `sha512-Mb01JT/x6CKDWaxigwfZYuYmDZ6xtrNwNlidKZwkSrDaY9n90tdrJTV5Umk+wP1fZscGptmKFXHsXMDEVZ+Q6A==`).
- Licence: MIT, Copyright (c) 2014 - 2022 Knut Sveidqvist. See the [Mermaid licence](https://github.com/mermaid-js/mermaid/blob/develop/LICENSE). MIT is a Category A licence under the [FINOS licence policy](https://community.finos.org/docs/governance/software-projects/license-categories/). The licences of the libraries bundled into the file are kept in its `Bundled license information` comment.
- Used by: `layouts/_default/_markup/render-codeblock-mermaid.html`, which loads the file only on pages that contain a `mermaid` code block. Hugo fingerprints it and adds a Subresource Integrity hash.

To update it, download the new version's package, check the tarball against the `dist.integrity` value from `https://registry.npmjs.org/mermaid/<version>`, replace this file with its `package/dist/mermaid.min.js`, update the version and integrity above, and check that the diagrams in the docs still render:

```sh
curl -sSfLO https://registry.npmjs.org/mermaid/-/mermaid-<version>.tgz
tar -xzf mermaid-<version>.tgz package/dist/mermaid.min.js
cp package/dist/mermaid.min.js assets/js/vendor/mermaid.min.js
```
