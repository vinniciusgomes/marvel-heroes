import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";

import Routes from "./src/services/routes";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
