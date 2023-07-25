import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Maps = () => {
    const navigation = useNavigation();
  return (
    <View style={Styles.main}>
      <TextInput style={Styles.title}>Lokasi BINUS Syahdan : </TextInput>
      <View style={Styles.wrapper}>
        <MapView
          style={Styles.map}
          initialRegion={{
            latitude: -6.2003132,
            longitude: 106.7830804,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}
        ></MapView>
        <Marker
          coordinate={{
            latitude: -6.2002172053057345,
            longitude: 106.78544074228996,
          }}
        />
      </View>
      <View style={Styles.btnGroup}>
        <Button
          onPress={() =>
            navigation.navigate("Home")
          }
          style={Styles.navigateBtn}
          title="Go To Home"
          color="red"
          mode="contained"
        />
        <Button
          onPress={() => navigation.navigate("Maps")}
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
    flex: 1,
  },
  wrapper: {
    flex: 3,
  },
  map: {
    ...StyleSheet.absoluteFill,
  },
  title: {
    height: 30,
    backgroundColor: "#34e9fa",
  },
  navigateBtn: {
    width: 40,
  },
  btnGroup: {
    flexDirection: "row",
    alignSelf: "stretch",
    textAlign: "center"
  },
});

export default Maps;
