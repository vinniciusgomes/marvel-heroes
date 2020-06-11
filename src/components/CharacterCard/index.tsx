import React from "react";
import { Text, StyleSheet, ImageBackground } from "react-native";

type CardProps = {
  name: string;
  codeName: string;
  image: string;
};

export default function CharacterCard({ name, codeName, image }: CardProps) {
  return (
    <ImageBackground
      style={styles.container}
      imageStyle={{ borderRadius: 16 }}
      source={require(`../../assets/chars/spider-man.png`)}
      resizeMode="cover"
    >
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.codeName}>{codeName}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: 140,
    height: 230,
    borderRadius: 16,
    marginLeft: 16,
    padding: 10,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  name: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "700",
    opacity: 0.75,
  },
  codeName: {
    color: "#ffffff",
    fontWeight: "900",
    fontSize: 22,
  },
});
