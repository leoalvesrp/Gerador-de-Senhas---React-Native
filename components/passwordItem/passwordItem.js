import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export function PasswordItem({ data, removePassword }) {
  return (
    <Pressable onLongPress={removePassword} style={stlyes.container}>
      <Text style={stlyes.text}>{data}</Text>
    </Pressable>
  );
}
const stlyes = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
  },
});
