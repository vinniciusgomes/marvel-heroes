import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import SvgUri from "expo-svg-uri";

export default function Categories() {
  return (
    <View style={styles.categories}>
      <TouchableOpacity style={styles.category("#005BEA")}>
        <SvgUri
          fill="#ffffff"
          width="32"
          height="32"
          source={require("../../assets/icons/hero.svg")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.category("#ED1D24")}>
        <SvgUri
          fill="#ffffff"
          width="32"
          height="32"
          source={require("../../assets/icons/villain.svg")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.category("#B224EF")}>
        <SvgUri
          fill="#ffffff"
          width="32"
          height="32"
          source={require("../../assets/icons/antihero.svg")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.category("#0BA360")}>
        <SvgUri
          fill="#ffffff"
          width="32"
          height="32"
          source={require("../../assets/icons/alien.svg")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.category("#FF7EB3")}>
        <SvgUri
          fill="#ffffff"
          width="32"
          height="32"
          source={require("../../assets/icons/human.svg")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  categories: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  category: (iconColor: String) => ({
    width: 56,
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    backgroundColor: iconColor,
  }),
});
