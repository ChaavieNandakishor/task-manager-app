import React from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link } from "expo-router";

export default function Signin() {
  const showToast = () => {};
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 30, paddingLeft: 30, paddingTop: 100 }}>
            Sign In
          </Text>
          <Text style={{ fontSize: 14, paddingLeft: 30 }}>
            Sign in to your account
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} />
          <TextInput style={styles.textInput} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Link */}
          <Link href="/welcome" asChild>
            <Pressable style={styles.pressable} onPress={showToast}>
              <Button color="#CD5C5C" title="Sign up" />
            </Pressable>
          </Link>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              marginTop: 150,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text>Dont have an account? </Text>
            <Text style={{ color: "#CD5C5C" }}>Signup</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redBorder: {
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 10,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#CD5C5C",
    borderRadius: 10,
    height: 47,
    width: "85%",
  },
  pressable: {
    width: "85%",
    backgroundColor: "red",
    borderRadius: 10,
    marginTop: 50,
    overflow: "hidden",
  },
  textInputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    display: "flex",
    gap: 35,
  },
});
