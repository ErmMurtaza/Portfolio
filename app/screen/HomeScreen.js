import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";
import Icon from "react-native-vector-icons/Entypo";
import { Avatar } from "react-native-paper";

export default function HomeScreen({navigation}) {
  return (
    <Background>
      <Header
        location="Lagos, Nigeria"
        source={require("../assets/loginCup.png")}
      />
      <View style={styles.footer}>
        <SearchBar />
        <View style={styles.Category}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Cateogories</Text>
          <ScrollView horizontal={true}>
            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <CategoryCard
                icon="glass-mug-variant"
                name="Cappuccino"
                size={15}
                backgroundColor="#ad8058"
                color="#fff"
                iconColor="#fff"
              />
              <CategoryCard icon="glass-fragile" name="Espresso" size={15} />
              <CategoryCard
                icon="glass-mug-variant"
                name="Cappuccino"
                size={15}
              />
              <CategoryCard icon="glass-fragile" name="Espresso" size={15} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.Category}>
          <View style={styles.itemContainer}>
            <View style={styles.logo}>
              <Avatar.Image
                source={require("../assets/loginCup.png")} // Replace with your image source
                size={148}
              />
            </View>
            <View style={styles.itemCard}>
              <Text style={styles.itemText}>Cappuccino</Text>
              <View style={styles.rate}>
                <Icon name="star" />
                <Text>4.3</Text>
              </View>
              <Text style={{ color: "#fff", fontSize: 18 }}>
                Volume : 160 ml
              </Text>
              <View style={styles.bottomBtn}>
                <Text style={{ color: "#fff", fontSize: 18 }}>$25.40</Text>
                <TouchableOpacity
                  style={[styles.logo, { width: 60, height: 60, marginTop: 1 }]}
                  onPress={() => navigation.navigate("DescriptionScreen")}
                >
                  <Icon
                    name="plus"
                    size={25}
                    color={"green"}
                    style={{ alignSelf: "center" }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  Category: {
    padding: 10,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: "#8e603c",
    marginLeft: 20,
    marginRight: 20,
    // marginBottom: 90,
    borderColor: "#8e603c",
    borderWidth: 1,
    borderRadius: 15,
    position: "relative",
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  logo: {
    //padding: 10,
    borderWidth: 1,
    borderColor: "#8e603c",
    borderRadius: 70,
    width: 150,
    height: 150,
    position: "relative",
    marginTop: -45,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  itemCard: {
    padding: 10,
  },
  itemText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  rate: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#c4a386",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "20%",
    alignContent: "center",
  },
  bottomBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
});
