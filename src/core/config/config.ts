class Config {
  public API_URL_1: string | undefined;
  public NODE_ENV: string | undefined;

  constructor() {
    this.API_URL_1 = import.meta.env.VITE_ENDPOINT;
    this.NODE_ENV = import.meta.env.VITE_NODE_ENV || 'local';
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined.`);
      }
    }
  }
}

export const config: Config = new Config();
