import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";

export default function App() {
  //const isAndriod = Platform.OS === 'android';
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight,
        }}
      >
        <View
          style={{
            backgroundColor: "blue",
            padding: 20,
          }}
        >
          <Text>Hello World</Text>
        </View>
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>HI World</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
