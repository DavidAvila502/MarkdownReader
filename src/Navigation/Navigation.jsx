import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// Screens
import LoginScreen from "../Screens/LoginScreen/LoginScreen";

const Stack = createStackNavigator();

const Navigation = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Login"
               component={LoginScreen}
               options={{ headerShown: false }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default Navigation;
