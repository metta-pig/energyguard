/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_THEME?: string;
  readonly VITE_LAYOUT_PRESET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
