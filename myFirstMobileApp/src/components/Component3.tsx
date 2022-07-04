import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
type Props = {
  name?: string;
};
const Component3: React.FC<Props> = (props) => {
  //const [state, setState] = useState(initialState);
  const [name, setName] = useState(props.name);
  const [count, setCount] = useState(0);
  const changeNameToGreet = (text: string) => {
    setName(text);
  };
  return (
    <View style={{ padding: 6, alignItems: "center", }}>
      <Text style={{color: "black",fontSize: 20,}}>Hello {name}. Greetings from React-Native.</Text>
      <View>
        <TextInput placeholder="Write a name here..." onChangeText={changeNameToGreet} autoFocus/>
      </View>
      <View>
        <Text style={{ color: "black",fontSize: 20,padding: 6,alignItems: "center", }}>You clicked {count} times</Text>
        <Button title="Click Me" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 20,
    backgroundColor: "blue",
    padding: 6,
    alignItems: "center",
  },
});
Component3.defaultProps = {
  name: "Nifemi",
};
export default Component3;
