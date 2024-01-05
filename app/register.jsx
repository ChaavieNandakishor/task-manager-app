import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import TextField from "../src/components/TextField";
import { router } from "expo-router";

const register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.signUpText}>
          <Text style={{ fontSize: 30, paddingLeft: 30 }}>
            Sign up
            {/* paddingTop: 10 */}
          </Text>
          <Text style={{ fontSize: 14, paddingLeft: 30 }}>
            Create your account
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <TextField placeholder="Name" />
        </View>
        <View style={{ alignItems: "center" }}>
          <TextField placeholder="Email" />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ alignItems: "center" }}>
          <TextField placeholder="hello" />
        </View>
        <View style={{ alignItems: "center" }}>
          <TextField placeholder="hello" />
        </View>
        <View style={{ alignItems: "center" }}>
          <Pressable onPress={() => {}} style={styles.signUpBtn}>
            <Text style={{ color: "white", fontSize: 17 }}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: "#e7e5e4",
    height: "50%",
    gap: 30,
    justifyContent: "space-between",
  },
  bottomContainer: {
    // backgroundColor: "#d4d4d8",
    height: "50%",
    gap: 30,
    paddingTop: 30,
    // justifyContent: "space-between",
  },

  signUpText: { flex: 1, justifyContent: "center", },
  signUpBtn: {
    width: "85%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CD5C5C",
    borderRadius: 10,
    overflow: "hidden",
  },
});
