import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from "./components/RegistrationScreen";
import Home from "./screens/Home";
import LoginScreen from "./components/LoginScreen";
import MapScreen from "./screens/MapScreen";
import CommentsScreen from "./screens/CommentsScreen";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={{
            title: "Мапа",
            headerTitleAlign: "center",
            headerStyle: {
              boxShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.3)",
              borderBottomColor: "#BDBDBD",
              borderBottomWidth: 1,
            },
            headerTintColor: "#212121",
            headerTitleStyle: {
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              lineHeight: 22,
            },
          }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            title: "Коментарі",
            headerTitleAlign: "center",
            headerStyle: {
              boxShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.3)",
              borderBottomColor: "#BDBDBD",
              borderBottomWidth: 1,
            },
            headerTintColor: "#212121",
            headerTitleStyle: {
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              lineHeight: 22,
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
