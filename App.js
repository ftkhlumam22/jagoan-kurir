import React from 'react';
import { NativeBaseProvider, Text, Box, extendTheme } from 'native-base';
import Homepage from './src/view/Homepage';
import { Poppins_100Thin_Italic, Poppins_100Thin, Poppins_200ExtraLight, Poppins_200ExtraLight_Italic, Poppins_300Light, Poppins_300Light_Italic, Poppins_400Regular, Poppins_400Regular_Italic, Poppins_500Medium, Poppins_500Medium_Italic, Poppins_600SemiBold, Poppins_600SemiBold_Italic, Poppins_700Bold_Italic,Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const theme = extendTheme({
  fontConfig: {
    Poppins: {
      100: {
        normal: 'Poppins_100Thin',
        italic: 'Poppins_100Thin_Italic',
      },
      200: {
        normal: 'Poppins_200ExtraLight',
        italic: 'Poppins_200ExtraLight_Italic',
      },
      300: {
        normal: 'Poppins_300Light',
        italic: 'Poppins_300Light_Italic',
      },
      400: {
        normal: 'Poppins_400Regular',
        italic: 'Poppins_400Regular_Italic',
      },
      500: {
        normal: 'Poppins_500Medium',
        italic: 'Poppins_500Medium_Italic',
      },
      600: {
        normal: 'Poppins_600SemiBold',
        italic: 'Poppins_600SemiBold_Italic',
      },
      700: {
        normal: 'Poppins_700Bold',
        italic: 'Poppins_700Bold_Italic',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },
});

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin_Italic, Poppins_700Bold, Poppins_100Thin, Poppins_200ExtraLight, Poppins_200ExtraLight_Italic, Poppins_300Light, Poppins_300Light_Italic, Poppins_400Regular, Poppins_400Regular_Italic, Poppins_500Medium, Poppins_500Medium_Italic, Poppins_600SemiBold, Poppins_600SemiBold_Italic, Poppins_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  };

  return (
    <NativeBaseProvider theme={theme} config={config}>
      <Homepage/>
    </NativeBaseProvider>
  );
}