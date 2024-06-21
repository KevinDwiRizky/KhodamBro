import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

// Data khodam
const khodams = [
  { name: "Anjing merah" },
  { name: "leluhur kelinci" },
  { name: "harimau assembly" },
  { name: "telur naga" },
  { name: "api unggun setan" },
  { name: "Pilus renyah" },
  { name: "dih kasian gapunya khodam" },
  { name: "gelandangan depan rumah" },
];

export default function App() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [khodamName, setKhodamName] = useState("");

  const fetchRandomKhodam = () => {
    const randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];
    setKhodamName(randomKhodam.name);
  };

  const handleGenerateKhodam = () => {
    fetchRandomKhodam();
  };

  const handleReset = () => {
    setName("");
    setBirthday("");
    setKhodamName("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Khodam</Text>
      <Text style={styles.subtitle}>
        Cek siapa khodam anda yang sesungguhnya, meh sia sadar bgst!
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
          placeholder="masukan nama kamu"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setBirthday(text)}
          value={birthday}
          placeholder="YYYY-MM-DD"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.button} onPress={handleGenerateKhodam}>
          <Text style={styles.buttonText}>Cek Khodam</Text>
        </TouchableOpacity>
        {khodamName ? (
          <Text style={styles.result}>Khodam kamu : {khodamName}</Text>
        ) : null}
        {name || birthday || khodamName ? (
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        ) : null}
        <Text style={styles.madeBy}>Made by Kevin</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2b2b2b", // Background gelap untuk nuansa mistis
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#e0a81e", // Warna emas untuk judul
    marginBottom: 20,
    textShadowColor: "#555", // Bayangan teks untuk efek magis
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 16,
    color: "#ddd", // Teks abu-abu muda
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center", // Mengatur agar konten berada di tengah
  },
  input: {
    height: 40,
    backgroundColor: "#444", // Warna input yang gelap
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "#fff", // Teks putih untuk kontras
    borderRadius: 5,
    width: "100%",
    maxWidth: 400,
  },
  button: {
    backgroundColor: "#e0a81e", // Tombol dengan warna emas
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
    maxWidth: 400,
  },
  buttonText: {
    color: "#2b2b2b", // Teks tombol dengan warna gelap
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "#555", // Bayangan teks untuk efek magis
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    color: "#e0a81e",
    textAlign: "center",
    textShadowColor: "#555",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  resetButton: {
    backgroundColor: "#555", // Tombol dengan warna abu-abu gelap
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
    maxWidth: 400,
  },
  resetButtonText: {
    color: "#fff", // Teks tombol reset putih
    fontSize: 16,
    fontWeight: "bold",
  },
  madeBy: {
    marginTop: 10,
    color: "#888",
    fontSize: 14,
    textAlign: "center", // Mengatur teks agar berada di tengah
  },
});
