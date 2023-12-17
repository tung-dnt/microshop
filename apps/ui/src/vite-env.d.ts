/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_MOCK: string;
  readonly VITE_API_URL: string;
  readonly VITE_API_KEY: string;
  readonly VITE_AUTH_URL: string;
  readonly VITE_AUTH_CLIENT_ID: string;
  readonly VITE_AUTH_REALM: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}