import * as React from 'react';
import {

    StyleSheet,
    Platform,
    View,
    SafeAreaView,
    StatusBar, 
    TouchableHighlithight,
    Linking,
    Text,
} from "react-native";
import {
    Camera,
    useCameraDevice,
    useCameraDevices,
    useCameraPermission,
} from "react-native-vision-camera";
import {Redirect, userRouter} from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import {ObscuraButton} from "@/components/ObscuraButton";
import {FontAwesomes} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import {ExposureControls} from "@/components/ExposureControls";

export default function HomeScreen() {
    const {hasPermission} = useCameraPermission();
    const microphonePermission = useCameraPermission();
    const redirectToPermissions = !hasPermission || microphonePermission === "not-determined";
    const devices = useCameraDevices("back");
    const router = useRouter();

    if (redirectToPermissions) return <Redirect href="/permissions" />;
    if (device) return <></>; 
        
        return( <ThemedText>Ola</ThemedText>

    )
}