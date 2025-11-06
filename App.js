// In App.js in a new project
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigation from "./app/Navigation/StackNavigation";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
// Load the Material Icons font
MaterialIcons.loadFont();

// Define your custom fonts if needed
const customFonts = {
  regular: {
    fontFamily: 'Your-Regular-Font',
  },
  medium: {
    fontFamily: 'Your-Medium-Font',
  },
  // Add other font weights if necessary
};

// Configure the theme
const theme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    ...customFonts, // Add your custom fonts here
  },
};
function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StackNavigation />
        {/* <DrawerNavigation/> */}
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
