import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header";
import Categories from "../../components/Categories";
import CharacterCard from "../../components/CharacterCard";
import { ScrollView } from "react-native-gesture-handler";

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.welcomeText}>Bem vindo ao Marvel Heroes</Text>
          <Text style={styles.choiceHero}>Escolhe seu personagem</Text>
        </View>
        <Categories />
        <ScrollView
          style={styles.charactersList}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <CharacterCard name="Peter Parker" codeName="Homem Aranha" image="spider-man" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
  },
  head: {
    width: "100%",
  },
  welcomeText: {
    color: "#B7B7C8",
    fontWeight: "bold",
    fontSize: 14,
  },
  choiceHero: {
    color: "#313140",
    marginTop: 10,
    fontSize: 32,
    fontWeight: "900",
  },
  charactersList: {
    marginLeft: -16,
  },
});

export default Home;
