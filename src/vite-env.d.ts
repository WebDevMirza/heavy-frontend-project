/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_URL: string;
  readonly VITE_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __VALUE__: string;
