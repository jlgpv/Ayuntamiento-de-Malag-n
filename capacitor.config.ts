import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'ayuntamiento-de-malagon', // Cambia el nombre de la aplicación aquí
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {

    // Configuración de orientación de pantalla para Android
    android: {
      orientation: 'landscape', // Puedes usar 'portrait' o 'landscape' según tus necesidades
    },

    // Configuración de orientación de pantalla para iOS
    ios: {
      orientation: 'landscape', // Puedes usar 'portrait' o 'landscape' según tus necesidades
    },
  },
};

export default config;