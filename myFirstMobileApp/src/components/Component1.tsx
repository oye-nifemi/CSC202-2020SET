import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Component1: React.FC = () => {
  return (
    <View>
      <Text style={{ backgroundColor: "blue", color: "#fff",fontSize: 20,padding: 10,margin: 6, alignItems: "center", }}>
        Hello from <Text style={{ color: "red" }}>Component1!</Text>
      </Text>
    </View>
  );
};
// const styles = StyleSheet.create({
//   text: {
//     color: "#fff",
//     fontSize: 20,
//     backgroundColor: "blue",
//     padding: 6,
//     alignItems: "center",
//   },
// });
export default Component1;
