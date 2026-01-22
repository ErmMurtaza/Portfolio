import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";
import React from "react";
import Background from "../components/Background";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/Entypo";
import { MaterialCommunityIcons, Entypo,FontAwesome } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import CategoryCard from "../components/CategoryCard";

export default function Experience({ navigation }) {
  const phoneNumber = "+918051510866"; // replace with your real number
  const email = "eram.murtaza01@gmail.com"; // replace with your email
  const linkedinUrl = "https://www.linkedin.com/in/eram-murtaza-0b13812a3"; // replace with your LinkedIn
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
            <Text style={styles.title}>Full-stack Developer</Text>
            <Text style={styles.subtitle}>Lexicon Consultants Pvt. Ltd.</Text>

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
            <Icons name="edit" size={20} color="#8e603c" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("EducationScreen")}
          >
            <Icons name="graduation-cap" size={20} color="grey" />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          {/* Title */}
          <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>

          {/* Company Block */}
          <View style={styles.companyBlock}>
            <Text style={styles.companyName}>
              Lexicon Consultant Pvt. Ltd, Ranchi
            </Text>
            <Text style={styles.companyBranch}>(Head Branch – Delhi)</Text>
            <Text style={styles.position}>
              Software Developer / Mobile App Developer
            </Text>
            <Text style={styles.duration}>Feb 2021 - Present</Text>

            {/* Responsibilities */}
            <View style={styles.bulletContainer}>
              <View style={styles.bulletRow}>
                <Entypo name="dot-single" size={20} color="#8e603c" />
                <Text style={styles.bulletText}>
                  Lead a development team, ensuring high-quality and
                  maintainable code.
                </Text>
              </View>
              <View style={styles.bulletRow}>
                <Entypo name="dot-single" size={20} color="#8e603c" />
                <Text style={styles.bulletText}>
                  Coordinate directly with clients to gather and refine
                  requirements.
                </Text>
              </View>
              <View style={styles.bulletRow}>
                <Entypo name="dot-single" size={20} color="#8e603c" />
                <Text style={styles.bulletText}>
                  Manage project testing phases, deployment, and delivery
                  schedules.
                </Text>
              </View>
              <View style={styles.bulletRow}>
                <Entypo name="dot-single" size={20} color="#8e603c" />
                <Text style={styles.bulletText}>
                  Generate APKs and app bundles for Android release.
                </Text>
              </View>
              <View style={styles.bulletRow}>
                <Entypo name="dot-single" size={20} color="#8e603c" />
                <Text style={styles.bulletText}>
                  Release and maintain builds on iOS App Store and Google Play
                  Store.
                </Text>
              </View>
            </View>
          </View>

          {/* Project Section */}
          <Text style={styles.subTitle}>Key Projects</Text>

          {/* Project: LexiconFarm */}
          <View style={styles.expContainer}>
            <MaterialCommunityIcons
              name="information-outline"
              size={20}
              color="#8e603c"
              style={{ marginRight: 8 }}
            />
            <View style={styles.projectTextContainer}>
              <Text style={styles.projectTitle}>LexiconFarm</Text>
              <Text style={styles.techUsed}>
                Based on React Native, Redux, and CodeIgniter
              </Text>
              <Text style={styles.projectDetails}>
                A comprehensive milk delivery and subscription management app
                for both recurring and token-based members. Includes billing,
                UPI payment integration, calendar-based delivery scheduling, and
                subscription renewal flow.
              </Text>
              <Text style={styles.projectDetails}>
                A comprehensive milk delivery and subscription management app is
                in testing phase. The app is deployed internally and distributed
                via private APK.
              </Text>
            </View>
          </View>

          {/* Project: CPM */}
          <View style={styles.expContainer}>
            <MaterialCommunityIcons
              name="account-group-outline"
              size={20}
              color="#8e603c"
              style={{ marginRight: 8 }}
            />
            <View style={styles.projectTextContainer}>
              <Text style={styles.projectTitle}>CPM</Text>
              <Text style={styles.techUsed}>
                Based on React Native, Redux, and CodeIgniter
              </Text>
              <Text style={styles.projectDetails}>
                A mobile application for client project management, task
                assignment, tracking progress, and real-time notifications.
              </Text>
              <Text
                style={styles.projectLink}
                onPress={() =>
                  Linking.openURL(
                    "https://play.google.com/store/apps/details?id=com.cpminit.MYCPMAPP"
                  )
                }
              >
                View on Google Play →
              </Text>
            </View>
          </View>

          {/* Project: SMA */}
          <View style={styles.expContainer}>
            <MaterialCommunityIcons
              name="home-city-outline"
              size={20}
              color="#8e603c"
              style={{ marginRight: 8 }}
            />
            <View style={styles.projectTextContainer}>
              <Text style={styles.projectTitle}>
                SMA (Society Management Application)
              </Text>
              <Text style={styles.techUsed}>
                Based on React Native and CodeIgniter
              </Text>
              <Text style={styles.projectDetails}>
                A society management solution that helps residents manage
                maintenance payments, visitor logs, and internal communications
                seamlessly.
              </Text>

              {/* Play Store Link */}
              <Text
                style={styles.projectLink}
                onPress={() =>
                  Linking.openURL(
                    "https://play.google.com/store/apps/details?id=com.sma.lexicon"
                  )
                }
              >
                View on Google Play →
              </Text>
            </View>
          </View>
          {/* Project: HMS */}
          <View style={styles.expContainer}>
            <MaterialCommunityIcons
              name="hospital-building"
              size={20}
              color="#8e603c"
              style={{ marginRight: 8 }}
            />
            <View style={styles.projectTextContainer}>
              <Text style={styles.projectTitle}>
                HMS (Hospital Management System)
              </Text>
              <Text style={styles.techUsed}>Based on CodeIgniter</Text>
              <Text style={styles.projectDetails}>
                A complete hospital management web application for patient
                registration, appointments, billing, and report generation.
                Focused on optimizing data handling and ensuring secure medical
                record management.
              </Text>
            </View>
          </View>

          {/* Technologies Used */}
          <View style={styles.techContainer}>
            <Text style={styles.techTitle}>Technologies Used:</Text>
            <Text style={styles.techText}>
              PHP, CodeIgniter, React Native, Redux, HTML, CSS, JavaScript,
              jQuery
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
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
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#444",
    letterSpacing: 1,
    marginBottom: 12,
  },
  companyBlock: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  companyName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  companyBranch: {
    fontSize: 13,
    color: "#777",
    marginBottom: 4,
  },
  position: {
    fontSize: 15,
    fontWeight: "500",
    color: "#8e603c",
  },
  duration: {
    fontSize: 13,
    color: "#888",
    marginBottom: 10,
  },
  bulletContainer: {
    marginTop: 4,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 2,
  },
  bulletText: {
    flex: 1,
    fontSize: 13.5,
    color: "#444",
    lineHeight: 20,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  expContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 12,
  },
  projectTextContainer: {
    flex: 1,
  },
  projectTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#8e603c",
    marginBottom: 4,
  },
  techUsed: {
    fontSize: 13,
    color: "#666",
    marginBottom: 6,
  },
  projectDetails: {
    fontSize: 13.5,
    color: "#444",
    lineHeight: 20,
  },
  techContainer: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 16,
    marginBottom: 30,
  },
  techTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  techText: {
    fontSize: 13.5,
    color: "#444",
    lineHeight: 20,
  },
  projectLink: {
    fontSize: 13.5,
    color: "#1a73e8",
    fontWeight: "500",
    marginTop: 6,
    textDecorationLine: "underline",
  },
});
