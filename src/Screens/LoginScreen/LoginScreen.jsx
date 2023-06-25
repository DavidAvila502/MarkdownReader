import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../../assets/resources/Logomarkdown.svg";
import RightArrow from "../../../assets/resources/RigthAarrow.svg";
import { useFonts } from "expo-font";

const LoginScreen = () => {
   const [fontsLoaded] = useFonts({
      "Roboto-Bold": require("../../../assets/fonts/Roboto-Bold.ttf"),
   });

   if (!fontsLoaded) {
      return <ActivityIndicator height={20} color={"black"} />;
   }

   return (
      <View style={styles.mainConatiner}>
         <StatusBar style="auto" backgroundColor="#393939" />

         <View style={styles.logoArea}>
            <Logo width={241} />
         </View>
         <View style={styles.loginArea}>
            <TouchableOpacity style={styles.startButton}>
               <RightArrow height={68} />
            </TouchableOpacity>
            <Text style={styles.textIniciar}>Iniciar</Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   mainConatiner: {
      flex: 1,
      backgroundColor: "#000",
   },

   logoArea: {
      height: "60%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },

   logo: {
      height: 241,
      width: 190,
   },

   loginArea: {
      display: "flex",
      height: "40%",
      width: "100%",
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      backgroundColor: "#fff",
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
   },

   startButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000",
      borderRadius: 100,
      height: 100,
      width: 100,
   },

   textIniciar: {
      fontSize: 18,
      color: "#828282",
      marginTop: 15,
      fontFamily: "Roboto-Bold",
   },
});

export default LoginScreen;
