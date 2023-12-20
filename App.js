import { StatusBar } from "expo-status-bar";
import Welcome from "./src/components/screens/Welcome";
import Signin from "./src/components/screens/Signin";

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
      <Signin />
    </>
  );
}
