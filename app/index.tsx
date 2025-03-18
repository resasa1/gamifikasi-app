// WHATS THE PROBLEM
// SO,  KITA GABISA NGARAHIN KE HALAMAN LAIN PRESSABLE PAKE SUCCES, INI JADI PR SIH


import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter  } from "expo-router";
import { Success } from "./succes";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <Text style={styles.text}>Hola, I say something</Text>
      <Text style={styles.text}>Press the button below:</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Click Me</Text>
      </View>
      <Pressable 
        onPress={() => router.push('/succes')} 
        style={{
          backgroundColor: '#007bff',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 8
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, textTransform: 'none' }}>Go to Detail</Text>
      </Pressable>
    </View>
  );
}




















// its styles css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  }
});
