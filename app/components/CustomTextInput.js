import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const CustomTextInput = ({ icon, placeholder, value, onChangeText, borderColor }) => {
  return (
    <View style={[styles.container, { borderColor }]}>
      {icon && <Image source={icon} style={styles.icon} />}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1, // Bottom border
    borderColor: 'gray', // Default border color
    paddingVertical: 8,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  input: {
    flex: 1,
  },
});

export default CustomTextInput;
