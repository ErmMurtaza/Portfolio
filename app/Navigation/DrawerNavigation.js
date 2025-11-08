import { createDrawerNavigator } from "@react-navigation/drawer";
import EducationScreen from "../screen/EducationScreen";
import ProfileScreen from "../screen/ProfileScreen";

const Drawer = createDrawerNavigator();

export default DrawerNavigation = ({ navigation }) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="EducationScreen" component={EducationScreen} />
    </Drawer.Navigator>
  );
};
