import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function CategoryCard({icon,name,size,backgroundColor,color,iconColor}) {
  return (
    <View style={[styles.container,{backgroundColor : backgroundColor && backgroundColor}]}>
      <MaterialCommunityIcons name={icon && icon} color={iconColor && iconColor} size={size && size}/>
      <Text style={[styles.textstyle,{color:color && color}]}>{name && name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#d9dbda",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginRight:10,
    paddingLeft:15,
    paddingRight:20,
    marginTop:10,
    borderWidth:1
  },
  textstyle:{
    left:5,
    color:"#000"
  }
});
