namespace NodeJS {
  export interface ProcessEnv extends NodeJS.ProcessEnv {
    EMAIL_SERVER: string;
    EMAIL_FROM: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    DATABASE_URL: string;
    SECRET: string;
  }
}
