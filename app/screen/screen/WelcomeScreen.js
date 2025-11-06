import { ImageBackground, StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import React, { useState } from "react";
import Background from "../components/Background";
import { Button } from "react-native-paper";
import LabelTextInput from "../components/LabelTextInput";
import TextInputWithIcon from "../components/TextInputWithIcon";

export default function WelcomeScreen({ navigation }) {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const handleTextChange = (text) => {
    setText(text);
    // You can add your validation logic here
    if (text.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <Background color="#8e603c">
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/loginCup.png")} // Replace with your image source
          style={styles.backgroundImage}
        >
         
        </ImageBackground>
     
      <View style={styles.footer}>
        <View style={styles.container1}>
          <Text style={styles.Textstyle}>Welcome to Coffee Shop</Text>
          <Text style={styles.subTextstyle}>Get wide range of speciality coffee, tea and bevrages.</Text>
          <View style={styles.SubmitButtonStyle}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.TextStyle}> Sign In </Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 4, // Make the header take up the entire height
    backgroundColor: "#8e603c",
  },
  footer: {
    flex: 1,
    backgroundColor: "#e1c7b0",
    // borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover', // Adjust as needed
  },
  Textstyle: {
    color: "#8e603c",
    fontWeight:"bold",
    fontSize:20,
    textAlign:"center",
  },
  subTextstyle: {
    color: "#8a5931",
    fontSize:15,
    textAlign:"center",
    marginTop:15
  },
  container1: {
    padding: 10,
    alignSelf:'center',
    marginTop:55
  },
  SubmitButtonStyle: {
    width: "100%",
    height: 45,
    justifyContent: "center",
    alignSelf:"center",
    backgroundColor: "#8e603c",
    borderRadius: 8,
    marginTop: 50,
    padding:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 12,
  },
  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
  },
});
