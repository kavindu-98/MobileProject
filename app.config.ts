import 'dotenv/config';

export interface AppConfig {
  // API_URL: string,
  APIDOMAIN: string,
}

export default {
  name: 'CoolApp',
  version: '1.0.0',
  extra: {
    APIDOMAIN: process.env.APIDOMAIN,
    // API_TOKEN: process.env.API_TOKEN,
  },
};