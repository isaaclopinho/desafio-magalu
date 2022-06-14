declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_MARVEL_API: string;
      REACT_APP_MARVEL_API_PUBLIC_KEY: string;
      REACT_APP_MARVEL_API_PRIVATE_KEY: string;
    }
  }
}

export {};
