import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "react-native-vector-icons/Feather";

const Header = ({ name, icon, source, opendrawerNavigate }) => {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <>
          {source ? (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={opendrawerNavigate}
              >
                <Image source={source && source} />
              </TouchableOpacity>
              <Text style={styles.textstyle}>Lexicon</Text>
            </View>
          ) : (
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <TouchableOpacity
                onPress={opendrawerNavigate}
                style={{ padding: 5 }}
              >
                <Icons name={icon && icon} color="#fff" size={25} />
              </TouchableOpacity>
            </View>
          )}
        </>
        <View
          style={{ justifyContent: "center", width: "100%", paddingRight: 120 }}
        >
          <Text style={styles.textstyle}>{name && name}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#696185ff",
    position: "relative",
    flexDirection: "row",
    // paddingLeft: 10,
    // paddingRight: 5,
    justifyContent: "space-between",
    alignItems:"center"
  },
  textstyle: {
    // marginLeft: 20,
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
  },
});
export default Header;
