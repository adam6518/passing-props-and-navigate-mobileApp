import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Home = ({ route }) => {
  const navigation = useNavigation();
  console.log(route);
  return (
    <View style={Styles.main}> 
      <View style={Styles.container}>
        <Text style={Styles.title}> 
          {route.params.paramKey === "" ? `Hello User, please input your name in Form page !` : `Hello ${route.params.paramKey} !`}
        </Text>
      </View>
      <View style={Styles.btnGroup}>
        <Button
          onPress={() =>
            navigation.navigate("Home", {
              paramKey: ""
            })
          }
          style={Styles.navigateBtn}
          title="Go To Home"
          color="red"
          mode="contained"
        />
        <Button
          onPress={() =>
            navigation.navigate("Maps")
          }
          style={Styles.navigateBtn}
          title="Go To Maps"
          color="red"
          mode="contained"
        />
        <Button
          onPress={() =>
            navigation.navigate("Form")
          }
          style={Styles.navigateBtn}
          title="Go To Form"
          color="red"
          mode="contained"
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7903b",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  btnGroup: {
    flexDirection: "row",
    marginBottom: 0,
  },
  navigateBtn: {
    width: 40,
  },
});

export default Home;
