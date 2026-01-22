import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
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

export default function ProfileScreen({ navigation }) {
  const phoneNumber = "+918051510866"; // replace with your real number
  const email = "eram.murtaza01@gmail.com"; // replace with your email
  const linkedinUrl = "https://www.linkedin.com/in/eram-murtaza-0b13812a3"; // replace with your LinkedIn
  const gitUrl = "https://github.com/ErmMurtaza";
    // const phoneNumber = "+91XXXXXXXXXX"; // replace with your real number
    // const email = "erammurtaza@gmail.com"; // replace with your email
    // const linkedinUrl = "https://www.linkedin.com/in/eram-murtaza";
    // const gitUrl = "https://github.com/ErmMurtaza";

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
          >
            <Icon name="heart" color="#fff" size={18} />
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
            <Icons name="box" size={20} color="#8e603c" />
          </TouchableOpacity>
         
          <TouchableOpacity onPress={() => navigation.navigate("Experience")}>
            <Icons name="edit" size={20} color="grey" />
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
          <Text style={styles.sectionTitle}>OBJECTIVE</Text>

          {/* Objective Header */}
          <View style={styles.expContainer}>
            <MaterialCommunityIcons
              name="account-tie-outline"
              size={20}
              color="#8e603c"
              style={{ marginRight: 8 }}
            />
            <View style={styles.projectTextContainer}>
              <Text style={styles.roleTitle}>
                Software Developer/ Cross Platform Developer
              </Text>
              <Text style={styles.duration}>2021 - Present</Text>
            </View>
          </View>

          {/* Objective Text */}
          <Text style={styles.objectiveText}>
            Results-driven software developer with 5+ years of experience
            specializing in CodeIgniter, PHP, and React Native. Proven track
            record in developing robust web and mobile applications that
            optimize performance and enhance user experience. My objective is to
            leverage my skills and experience to contribute to the success of
            the organization while continuously improving my technical knowledge
            and staying up-to-date with emerging technologies.
          </Text>

          {/* Primary Skills */}
          <Text style={styles.subTitle}>PRIMARY SKILLS</Text>

          <View style={styles.skillContainer}>
            {[
              "React Native",
              "Redux",
              "ReactJS",
              "REST API",
              "PHP",
              "CodeIgniter",
              "MySQL",
              "JavaScript",
              "jQuery",
              "Ajax",
              "Git",
            ].map((skill, index) => (
              <View key={index} style={styles.skillRow}>
                <Entypo name="dot-single" size={20} color="#8e603c" />
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
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
  expContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
    marginBottom: 16,
  },
  projectTextContainer: {
    flex: 1,
  },
  roleTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#8e603c",
  },
  duration: {
    fontSize: 13,
    color: "#666",
  },
  objectiveText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 22,
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  skillContainer: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 30,
  },
  skillRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  skillText: {
    fontSize: 13.5,
    color: "#444",
  },
});
