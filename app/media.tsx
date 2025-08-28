// //importa do expo-router
// //-linkpermite navegar entre rotas
// //stack permite navegar entre rotas
// //usalocalsearchparams é usado para obter paramentros da url (ex. media  type)
// //use router: permite navegação programatica ( ex votar avançar etc)

// import { Link, router, Stack, useLocalSearchParams } from 'expo-router';
// //importa  compnentes react-native
// //alerte exibe mensagens de alerta
// //image é usado para exibir imagens
// //styleSheet é usado para criar estilos nativos
// import { Alert, Image, StyleSheet } from 'react-native';

// //importa componente de suporte de telas
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// //botão customizado
// import {obscuraButton} from '@/components/ObscuraButton';

// //funçao da expo media laibrary arquivos, fotos, videos na galeria do dispositivo
// import { saveToLibraryAsync } from 'expo-media-library';

// // tela principal da rota de "media"
// export default function MediaScreen() {
//     //pega os paramentros da URL/rota (Ex:. media e type)
//     //media = caminho do arquivo
//     //type = tipo de media (ex: foto ou video)
//     const { media, type } = useLocalSearchParams();
    
//     //hook de navegação programática
//     const router = useRouter();

//     //log os parametros no console (bom para debug)
//     console.log(media, type);
//     return (
//             <ThemedView style=(style.container}>
//                 {
//                     //se o tipo for foto exibe imagem
//                     type === "photo" ? (
//                         <Image 
//                             source={{ url: `file://$(media)`}} 
//                             style={width."100%", height:"80%", resizeMode:"contain"} />
//                     ) : null
//                     //aqui poderia entrar uma <video> para exibir um video no futuro
//                     //<video source={{ url: media}} style={width."100%", height:"80%"}} />
//                 }
//                 {/*botão customizado no componente para salvar a media na galeria8*/ }
//                 <obscuraButton
//                     title="Salvar na galeria"
//                     containerStyle={{alignSelf:"center"}}
//                     onpress = {async () => {
//                         saveToLibraryAsync(media as string);
                    
//                         // alerta para usuário
//                         Alert.alert("Salvo na galeria");

//                         // volta para tela anterior
//                         router.back();
                    
//                     }}
//                 />

//                 {/*link que apaga a midia (logica de exclusão ainda não implementada) e volta a home*/}
//                 <Link href={"/" style.link}>
//                     <ThemedText type="link">Excluir</ThemedText>
//                 </Link>
                
//     )
// }

// //stylesheet

// const styles = <StyleSheet create>({
//     container: {
//         flex: 1, //ocupa tela inteira
//         padding: 20,//espaçamento intenso
        
//     },
//     link: {
//         marginTop: 15, //espaço acima do link
//         paddingVertical: 15, //espaço interno em cima e ambaixo
//         alignSelf: "center" //centraliza o link horizontalmente 
//     },
// });

//==============================================================================
// Código corrigido e comentado
// importa do expo-router
// - link permite navegar entre rotas
// - stack permite configurar o header/stack
// - useLocalSearchParams é usado para obter parâmetros da URL (ex.: media, type)
// - useRouter: permite navegação programática (ex.: voltar, avançar etc)
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';

// importa componentes do react-native
// - Alert exibe mensagens de alerta
// - Image é usado para exibir imagens
// - StyleSheet é usado para criar estilos nativos
import { Alert, Image, StyleSheet } from 'react-native';

// importa componentes de suporte de telas (tematizados)
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// botão customizado
// OBS: assumindo export default no arquivo ObscuraButton.
// Se for export nomeado, use: `import { ObscuraButton } from '@/components/ObscuraButton'`
import { ObscuraButton } from '@/components/ObscuraButton';

// função da Expo Media Library para salvar arquivos (fotos, vídeos) na galeria do dispositivo
import { saveToLibraryAsync } from 'expo-media-library';

// tela principal da rota de "media"
export default function MediaScreen() {
  // pega os parâmetros da URL/rota (Ex.: media e type)
  // media = caminho do arquivo
  // type = tipo de media (ex.: "photo" ou "video")
  const params = useLocalSearchParams<{ media?: string | string[]; type?: string | string[] }>();
  const media = Array.isArray(params.media) ? params.media[0] : params.media;
  const type = Array.isArray(params.type) ? params.type[0] : params.type;

  // hook de navegação programática
  const router = useRouter();

  // log dos parâmetros no console (bom para debug)
  console.log(media, type);

  return (
    <ThemedView style={styles.container}>
      {/* opcional: configura o título do header desta tela */}
      <Stack.Screen options={{ title: 'Mídia' }} />

      {
        // se o tipo for foto, exibe a imagem
        type === 'photo' && !!media ? (
          <Image
            // em React Native é `uri` (não `url`) e, para arquivo local, prefixe com `file://`
            source={{ uri: `file://${media}` }}
            // mantendo a estilização original do professor, corrigida para a sintaxe do RN
            style={{ width: '100%', height: '80%', resizeMode: 'contain' }}
          />
        ) : null
        // aqui poderia entrar um componente de vídeo no futuro
        // Ex.: usando expo-av:
        // <Video source={{ uri: `file://${media}` }} style={{ width: '100%', height: '80%' }} useNativeControls />
      }

      {/* botão customizado no componente para salvar a mídia na galeria */}
      <ObscuraButton
        title="Salvar na galeria"
        // mantendo o containerStyle conforme intenção original
        containerStyle={{ alignSelf: 'center' }}
        // em RN o evento é `onPress` (não `onpress`)
        onPress={async () => {
          try {
            if (!media) {
              Alert.alert('Erro', 'Arquivo não encontrado.');
              return;
            }

            // salva na galeria (para arquivo local, garanta o prefixo file://)
            await saveToLibraryAsync(`file://${media}`);

            // alerta para usuário
            Alert.alert('Salvo na galeria');

            // volta para tela anterior
            router.back();
          } catch (e) {
            console.error(e);
            Alert.alert('Erro', 'Não foi possível salvar na galeria.');
          }
        }}
      />

      {/* link que "apaga a mídia" (lógica de exclusão ainda não implementada) e volta à home */}
      <Link href="/" style={styles.link}>
        <ThemedText type="link">Excluir</ThemedText>
      </Link>
    </ThemedView>
  );
}

// stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa tela inteira
    padding: 20, // espaçamento interno
  },
  link: {
    marginTop: 15, // espaço acima do link
    paddingVertical: 15, // espaço interno em cima e embaixo
    alignSelf: 'center', // centraliza o link horizontalmente
  },
});
