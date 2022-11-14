/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly WELTENBUMMLERPAAR_FRONTEND_API_BASE_URL: string;
  readonly WELTENBUMMLERPAAR_FRONTEND_IMG_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
