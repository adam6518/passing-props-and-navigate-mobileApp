import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';

const Form = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [hobi, setHobi] = useState("");

  const handleInput = (hasilInputNama, hasilInputHobi) => {
    setName(hasilInputNama);
    setHobi(hasilInputHobi);
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Input data diri Anda</Text>
        <View style={styles.form}>
          <Text style={styles.formText}>Nama</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Masukkan nama Anda..."
            value={name}
            onChangeText={(nama) => setName(nama)}
          />
          <Text style={styles.formText}>Hobi</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Masukkan hobi Anda..."
            value={hobi}
            onChangeText={(hobi) => setHobi(hobi)}
          />
          <Button
            onPress={() => handleInput(name, hobi)}
            style={styles.formButton}
            title="Simpan"
            color="#27f52e"
            mode="contained"
          />
        </View>
        <Text style={styles.notes}>Setelah mengisi data diri, klik tombol "SIMPAN" lalu pergi ke halaman Home untuk melihat hasilnya</Text>
      </View>
      <View style={styles.btnGroup}>
        <Button
          onPress={() =>
            navigation.navigate("Home", {
              paramKey: name,
            })
          }
          style={styles.navigateBtn}
          title="Go To Home"
          color="red"
          mode="contained"
        />
        <Button
          onPress={() =>
            navigation.navigate("Maps")
          }
          style={styles.navigateBtn}
          title="Go To Maps"
          color="red"
          mode="contained"
        />
        <Button
          onPress={() =>
            navigation.navigate("Form")
          }
          style={styles.navigateBtn}
          title="Go To Form"
          color="red"
          mode="contained"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#59c2f0",
  },
  formInput: {
    backgroundColor: "#e1e6e8",
    marginVertical: 20,
  },
  formText: {
    marginTop: 20,
  },
  formButton: {
    marginTop: 20,
  },
  navigateBtn: {
    width: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  btnGroup: {
    flexDirection: "row"
  },
  notes: {
    marginTop: 30
  }
});

export default Form;
