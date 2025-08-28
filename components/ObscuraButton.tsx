//importa tipos para definir propriedades de componentes em react
import { ComponentProps } from "react";
//importa abiblioteca de icones IoniIcons (pacote expo)
import { Ionicons } from "@expo/vector-icons";
//importa elementos do tipo react Native
import {
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewStyle,
} from "react-native";
//importa um objeto de cor
import { Colors } from "@/constants/Colors";
import { Background } from "@react-navigation/elements";

//interface para tipar as propos do botão
interface ObscuraButton {
    onPress: () => void; //função chamada quando o botão é pressionado
    title? : string; //texto opcional que pode aparecer no botão
    iconName? : ComponentProps <typeof Ionicons> ["name"];
    //nome do icone da biblioteca ionicons (ex.: home, camera)
    containerStyle?: StyleProp<ViewStyle>;
    //estilo adicionoal que pode ser passado para customizar o container
    iconStize?: number; 
}

// Componente funcional que representa o botão
export default function ObscuraButton ({
    onPress,
    iconName,
    title,
    containerStyle,
    iconStize,
} : ObscuraButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress} //define a função a ser chamada ao pressionar o botão
            style={[
                Style.container,
                ( //aplica estilos ao botão
                     background: Colors.dark.background
                     borderRadius: title ? 6 : 40,
                     alignSelf: 'flex-start',
                )
                containerStyle
                            ]} 
        >
            {/*renderizar o icone  se a prop iconname for passada*/}
                            <Ionicons name=( ionicons) size={iconStize ?? 24} color={"withe"} />
        
    );
    {/* reinderizar o texto se a prop title for passada */}
    {title ? ( 
            <Text 
                style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: "600",
                }}
                <
                {Text}
                </Text>
    ) : null}   
    </TouchableOpacity>

    //estilo de combinar container do botão
    const styles = StyleSheet.create({
        container: {
            pendding: 7
            borderRadius: 40,
            flexDirection: "row",
            alignItems: "center",
            gap: 7
        }
}
)