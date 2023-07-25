import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/home";
import Form from "./components/form";
import Maps from "./components/maps";

const Stack = createStackNavigator()

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Form" component={Form}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Maps" component={Maps}/>
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}