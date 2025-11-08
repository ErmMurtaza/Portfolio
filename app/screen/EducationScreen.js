import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import Background from "../components/Background";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/Entypo";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import CategoryCard from "../components/CategoryCard";

export default function EducationScreen({ navigation }) {
  

  const phoneNumber = "+91XXXXXXXXXX"; // replace with your real number
  const email = "erammurtaza@gmail.com"; // replace with your email
  const linkedinUrl = "https://www.linkedin.com/in/eram-murtaza";
  const gitUrl = "https://github.com/ErmMurtaza";
 
  const handleCall = () => Linking.openURL(`tel:${phoneNumber}`);
  const handleEmail = () => Linking.openURL(`mailto:${email}`);
  const handleLinkedIn = () => Linking.openURL(linkedinUrl);
  const handleGit = () => Linking.openURL(gitUrl);
  return (
    <Background>
      <View style={styles.header}>
        <View style={styles.headercontainer}>
          <TouchableOpacity
            style={styles.headerCircle}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" color="#fff" size={18} />
          </TouchableOpacity>

          <Text style={styles.name}>Eram Murtaza</Text>

          <TouchableOpacity
            style={styles.headerCircle}
            onPress={handleLinkedIn}
          >
            <FontAwesome name="linkedin" color="#fff" size={18} />
          </TouchableOpacity>
        </View>

        {/* Avatar and Info */}
        <View style={styles.profileHeader}>
          <Avatar.Image
            source={require("../assets/dummy_profile.avif")}
            size={85}
            style={{ backgroundColor: "#fff" }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.title_h}>Full-stack Developer</Text>
            <Text style={styles.subtitle_h}>Lexicon Consultants Pvt. Ltd.</Text>

            {/* Contact Row */}
            <View style={styles.contactRow}>
              <TouchableOpacity onPress={handleCall} style={styles.contactBtn}>
                <MaterialCommunityIcons name="phone" size={18} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleEmail} style={styles.contactBtn}>
                <MaterialCommunityIcons name="email" size={18} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleLinkedIn}
                style={styles.contactBtn}
              >
                <FontAwesome name="linkedin" size={18} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleGit} style={styles.contactBtn}>
                <MaterialCommunityIcons name="github" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.iconHeader}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <Icons name="box" size={20} color="grey" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Experience")}>
            <Icons name="edit" size={20} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("EducationScreen")}
          >
            <Icons name="graduation-cap" size={20} color="#8e603c" />
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 60, paddingHorizontal: 15 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={[styles.sectionHeader, { color: "#8e603c" }]}>
            EDUCATION
          </Text>

          {[
            {
              title: "M.C.A - Ranchi University, Ranchi",
              subtitle: "Master of Computer Application, 2022",
              details: "Percentage – 75.13",
            },
            {
              title: "B.C.A - Ranchi Women’s College, Ranchi",
              subtitle: "Bachelor of Computer Application, 2020",
              details: "Percentage – 74.67",
            },
            {
              title: "12th - Ursuline Inter College, Ranchi",
              subtitle: "Passed with Science, 2017",
              details: "Percentage – 67.6",
            },
            {
              title: "10th - Kiddy Convent High School",
              subtitle: "Passed with Science, 2015",
              details: "CGPA – 8.4",
            },
          ].map((edu, index) => (
            <View key={index} style={styles.expContainer}>
              <Icons name="info-with-circle" size={18} color="#8e603c" />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{edu.title}</Text>
                <Text style={styles.subtitle}>{edu.subtitle}</Text>
                <Text style={styles.details}>{edu.details}</Text>
              </View>
            </View>
          ))}
          <Text
            style={[styles.sectionHeader, { color: "#8e603c", marginTop: 25 }]}
          >
            ADDITIONAL SKILLS
          </Text>

          <View style={styles.skillContainer}>
            <Text style={styles.skillItem}>
              <Text style={styles.skillLabel}>Languages:</Text> English, Hindi,
              Urdu
            </Text>
            <Text style={styles.skillItem}>
              <Text style={styles.skillLabel}>Operating Systems:</Text> Windows,
              Linux, macOS
            </Text>
            <Text style={styles.skillItem}>
              <Text style={styles.skillLabel}>Software:</Text> APK (React Native
              + Expo)
            </Text>
          </View>
        </ScrollView>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#8e603c",
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerCircle: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#fff",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  title_h: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle_h: {
    fontSize: 14,
    color: "#f0e6dc",
    marginTop: 4,
  },
  contactRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  contactBtn: {
    backgroundColor: "#a7744b",
    borderRadius: 20,
    padding: 8,
    marginRight: 10,
  },
  iconHeader: {
    flexDirection: "row",
    justifyContent: "space-around",

    backgroundColor: "#eeeeee",
    padding: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 15,
    marginTop: 10,
  },
  expContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 18,
    backgroundColor: "#f9f5f2",
    borderRadius: 10,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3a2f28",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#5f5f5f",
    marginBottom: 2,
  },
  details: {
    fontSize: 14,
    color: "#7a6a58",
  },
  skillContainer: {
    backgroundColor: "#f9f5f2",
    borderRadius: 10,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  skillItem: {
    fontSize: 14,
    color: "#3a2f28",
    marginBottom: 5,
    lineHeight: 20,
  },
  skillLabel: {
    fontWeight: "600",
    color: "#8e603c",
  },
});
