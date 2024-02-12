/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORT: number;
  readonly VITE_APP_TITLE: string;
  readonly VITE_WS_BACKEND_URL: string;
  readonly VITE_API_BACKEND_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
