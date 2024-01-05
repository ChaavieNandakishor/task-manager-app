import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const TextField = ({style,placeholder,onChangeText}) => {
  return (
    <>
      <TextInput placeholder={placeholder} style={styles.textInput} onChangeText={onChangeText} />

     
    </>
  );
};

export default TextField;

const styles = StyleSheet.create({
    textInput: {
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: "#CD5C5C",
        borderRadius: 10,
        height: 47,
        width: "85%",
      },
});
