import React from "react";
import SvgUri from "expo-svg-uri";
import { View, StyleSheet, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <SvgUri
          width="24"
          height="24"
          source={require("../../assets/icons/menu.svg")}
        />
      </TouchableOpacity>
      <SvgUri
        fill="#ED1D24"
        width="71"
        height="26"
        source={require("../../assets/icons/marvel.svg")}
      />
      <TouchableOpacity>
        <SvgUri
          width="24"
          height="24"
          source={require("../../assets/icons/search.svg")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
  },
});
