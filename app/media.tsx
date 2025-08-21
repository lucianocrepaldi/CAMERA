//importa do expo-router
//-linkpermite navegar entre rotas
//stack permite navegar entre rotas
//usalocalsearchparams é usado para obter paramentros da url (ex. media  type)
//use router: permite navegação programatica ( ex votar avançar etc)

import { Link, Stack, useLocalSearchParams } from 'expo-router';
//importa  compnentes react-native
//alerte exibe mensagens de alerta
//image é usado para exibir imagens
//styleSheet é usado para criar estilos nativos
import { Alert, Image, StyleSheet } from 'react-native';

//importa componente de suporte de telas
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

//botão customizado
import {obscuraButton} from '@/components/ObscuraButton';

//funçao da expo media laibrary arquivos, fotos, videos na galeria do dispositivo
import { MediaLibrary } from 'expo-media-library';