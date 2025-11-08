import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screen/SplashScreen";
import ProfileScreen from "../screen/ProfileScreen";
import EducationScreen from "../screen/EducationScreen";
import Experience from "../screen/Experience";

const Stack = createStackNavigator();

export default StackNavigatoion = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="EducationScreen"
        component={EducationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Experience"
        component={Experience}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

