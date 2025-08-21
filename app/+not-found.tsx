//imposta link de stack do expo-router: essencial comunicação  da bibilioteca com o app
// - link permite navegação entre rotas
// - stack permite configurar a  tela atual na navegação em pilha
import { Link, Stack } from 'expo-router';
// importar para criar estilos nativos
import { StyleSheet } from 'react-native';
//importa compnentes customizados que aplicam temas 


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Componente de tela padrão para tela not-found 
export default function NotFoundScreen() {
  return (
    <>
    {/* configura o titulo da tela dentro do stack*/}
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen does not exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}
//estilização da tela 
const styles = StyleSheet.create({
  container: {
    flex: 1,//ocupa a tela inteira
    alignItems: 'center',//centraliza horizontalmente
    justifyContent: 'center',//centraliza verticalmente
    padding: 20,//adiciona espaçamento interno
  },
  link: {
    marginTop: 15,// adiciona margem superior
    paddingVertical: 15,// adiciona espaçamento vertical
  },
});
