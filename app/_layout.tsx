// importação de temas claro e escuro e theme provider para componentes do app
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// hook do expo para carregar fontes personalizadas
import { useFonts } from 'expo-font';
// usuário para nevegação em pilha (stak navigation )
import { Stack } from 'expo-router';
//biblioteca para controlar a splashscreen (tela de abertura)
import * SplashScreen from "expo-splash-screen";
//hook nativo do react para efeitos colaterais
import { useEffect } from 'react'; 
// importar bibilioteca necessária para criar animações
import 'react-native-reanimated';
//hook customizado para detectar se o dispositivo esta em modo claro ou ecuro

import { useColorScheme } from '@/hooks/useColorScheme';
// componente que habilita o uso de gestos (arrastar, tocar, etc) no app

// impede que splashscreen seja ocultada automaticamente
//só será escondida manualmente quendo os recursos estiverem carregados
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // detecta se o dispositivo está em modo claro ou escuro
  const colorScheme = useColorScheme();
  //detecta se as fontes foram carregadas
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
// assim que as fontas carregarem esconde a splashscreen
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }, [loaded]);
    // enquanto as fontes não carregarem não reenderiza nada (null )
  })
  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    // componente raiz garante suporte ao gesto
    <GestureHandlerRootView>
      //aplica o tema do app esta fixo o tem escuro
    <ThemeProvider value={DarkTheme}>
      // define as tabs do app usando a nevegação em pilha
      <Stack>
        //tela incial sem cabeçalho
        <Stack.Screen name="index" options={{ headerShown: false }} />
        // tela de permissões exibida como modal com cabeçalho visivel
        <Stack.Screen 
        options={{ presentation: "modal", headerShown: true }} />
        //tela de midia exibida como modal sem cabeçalho
        <Stack.Screen
        name="media"
        options={{presentation: Modal, headerShown: false}} 
        />
        //tela de erro (not found), aparece como modal
         <Stack.Screen nome= "not-found" options={{ presentation: "modal" }} 
         />
        
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
    </GestureHandlerRootView>>
      {/* ThemeProvider permite o uso de temas claro e escuro */} 
    
  );
}
