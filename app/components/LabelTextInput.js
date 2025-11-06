import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const labelTextInput = ({
  onChangeText,
  style,
  text,
  icon,
  iconPosition,
  error,
  label,
  ViewStyle,
  asterisk,
  ...props
}) => {
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "left") {
        return "row";
      } else if (iconPosition === "right") {
        return "row-reverse";
      }
    }
  };
  const getBorderColor = () => {
    if (error) {
      return "#e60000";
    } else {
      return "#D8D8D8";
    }
  };
  return (
    <View>
      <View
        style={[
          styles.wrapper,
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ]}
      >
        <View style={{ color: "red" }}>
          <View>
            <Text style={styles.title}>
              {label && label}
              <Text style={[styles.required, { color: "red" }]}>
                {asterisk && asterisk}
              </Text>
            </Text>
          </View>
          <View style={[styles.TextView, ViewStyle]}>
            <TextInput
              style={[styles.TextInput, style]}
              onChangeText={onChangeText}
              value={text}
              {...props}
            />
          </View>
        </View>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 5,
    borderRadius: 10,
    marginTop: 5,
  },
  TextView: {
    height: 40,
  },
  TextInput: {
    flex: 1,
  },
  inputcontainer: {
    paddingVertical: 10,
  },
  error: {
    color: "#e60000",
    paddingLeft: 10,
  },
  title: {
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 7,
  },
});
export default labelTextInput;
