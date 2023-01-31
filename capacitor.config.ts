import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'RunJob',
  webDir: 'www',
  bundledWebRuntime: false,
  SplashScreen: {
      launchAutoHide: false,
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      splashFullScreen: false,
      splashImmersive: false
  }
};

export default config;
