import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Background from "../components/Background";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/Entypo";

import { Avatar } from "react-native-paper";
import CategoryCard from "../components/CategoryCard";

export default function EducationScreen({ navigation }) {
  return (
    <Background>
      <View style={styles.header}>
        <View style={styles.headercontainer}>
          <TouchableOpacity
            style={styles.headerCircle}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrowleft" color="#fff" />
          </TouchableOpacity>
          <Text style={styles.name}>Eram Murtaza</Text>

          <View style={styles.headerCircle}>
            <Icon name="heart" color="#fff" />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.logo}>
          <Avatar.Image
            source={require("../assets/loginCup.png")} // Replace with your image source
            size={180}
          />
        </View>
        <Text style={styles.profesional}>Full-stack Developer</Text>
        <Text style={[styles.profesional, { fontWeight: "300", fontSize: 15 }]}>
          Lexicon Consultants pvt. ltd.
        </Text>
        <View
          style={[styles.headercontainer, { justifyContent: "space-evenly" }]}
        >
          <CategoryCard icon="thumb-up" name="Follow" size={15} />
          <CategoryCard icon="phone" name="Contact" size={15} />
        </View>
        <View style={styles.iconHeader}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
          >
            <Icons name="box" size={20} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("EducationScreen")}
          >
            <Icons name="graduation-cap" size={20} color="#8e603c" />
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => navigation.navigate("Experience")}
            >
            <Icons name="edit" size={20} color="grey" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Text style={[styles.name, { color: "grey" }]}>EXPERIENCE</Text>
          <View style={styles.expcontainer}>
            <Icons name="info-with-circle" size={18} color="#8e603c" />
            <View style={styles.expctextcont}>
              <Text style={styles.experience}>Cross Platform Developer</Text>
              <Text
                style={[styles.experience, { fontWeight: "300", fontSize: 15 }]}
              >
                2022-2023
              </Text>
            </View>
          </View>

          <View style={styles.expcontainer}>
            <Icons name="info-with-circle" size={18} color="#8e603c" />
            <View style={styles.expctextcont}>
              <Text style={styles.experience}>Mobile App Developer</Text>
              <Text
                style={[styles.experience, { fontWeight: "300", fontSize: 15 }]}
              >
                2022-2023
              </Text>
            </View>
          </View>

          <View style={styles.expcontainer}>
            <Icons name="info-with-circle" size={18} color="#8e603c" />
            <View style={styles.expctextcont}>
              <Text style={styles.experience}>Web Designer</Text>
              <Text
                style={[styles.experience, { fontWeight: "300", fontSize: 15 }]}
              >
                2022-2023
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1, // Make the header take up the entire height
    backgroundColor: "#8e603c",
    // borderBottomEndRadius: 40,
    // borderBottomLeftRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  logo: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    width: 50,
    height: 50,
    position: "relative",
    marginTop: -65,
    // alignSelf: "center",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
  headercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerCircle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 25,
    alignContent: "center",
    borderColor: "#fff",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  profesional: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    alignSelf: "flex-end",
    textAlign: "center",
    width: "50%",
  },
  iconHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    backgroundColor: "#eeeeee",
    padding: 10,
  },
  expcontainer: {
    flexDirection: "row",
    padding: 10,
    //backgroundColor: "pink",
  },
  expctextcont: {
    //left:20,
    width: "100%",
  },
  experience: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    alignContent: "flex-start",
    left: 20,
  },
});
