import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import welcomeImage from "./assets/images/welcome.png";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ paddingTop: 100, alignItems: "center" }}>
        <Text style={{ fontSize: 25 }}>Your tasks, your plan</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image source={welcomeImage} style={{ height: 250 }} />
      </View>
      <View
        style={{
          justifyContent: "space-around",
          gap: 20,
          display: "flex",
          alignItems: "center",
          paddingBottom: 90,
        }}
      >
        <Pressable
          style={{
            width: "80%",
            backgroundColor: "red",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <Button color="#CD5C5C" title="Sign up" />
        </Pressable>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Dont have an account? </Text>
          <Text style={{ color: "#CD5C5C" }}>Signup</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  redBorder: {
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 10,
  },
});
