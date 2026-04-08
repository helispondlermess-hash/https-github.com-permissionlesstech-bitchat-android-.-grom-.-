import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nextjs.template',
  appName: 'Next.js Template',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
