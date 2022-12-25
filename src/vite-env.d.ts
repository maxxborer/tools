/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vitest" />

// i18n.d.ts
declare module "virtual:i18next-loader" {
  // eslint-disable-next-line
  const resources: any;
  export default resources;
}

declare module "*.svg" {
  import React = require("react");

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
