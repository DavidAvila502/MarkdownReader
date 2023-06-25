import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../../../assets/resources/Logomarkdown.svg";
import RightArrow from "../../../assets/resources/RigthAarrow.svg";

const LoginScreen = () => {
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
      fontWeight: "bold",
      color: "#828282",
      marginTop: 15,
   },
});

export default LoginScreen;
