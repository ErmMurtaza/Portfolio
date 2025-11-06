// TextInputWithIcon.js
import React from 'react';
import { TextInput, HelperText, IconButton } from 'react-native-paper';

const TextInputWithIcon = ({ label, value, onChangeText, icon, error, errorText }) => {
  return (
    <>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        error={error}
        autoCapitalize="none"
        mode="outlined"
        left={<TextInput.Icon name={icon} />}
      />
      <HelperText type="error" visible={error}>
        {errorText}
      </HelperText>
    </>
  );
};

export default TextInputWithIcon;
