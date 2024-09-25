import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Center, Column, FlatList, Text } from "native-base";
import PDFPopup from "../components/PDFPopup";
import { COMPETITIONS, ICompetition } from "../types/competition";
import CompetitionCard from "../components/Competitions/CompetitionCard";

const Competitions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<ICompetition | null>(null);
  return (
    <Column flex="1" bg="white">
      <Center bg="#5928A2" safeAreaTop pb="3">
        <Text color="white" fontSize="lg" fontWeight="medium">
          Competitions in 2023
        </Text>
      </Center>
      <PDFPopup data={data} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <FlatList
        flex="1"
        data={COMPETITIONS}
        renderItem={({ item }) => (
          <CompetitionCard
            onPress={() => {
              setData(item);
              setIsOpen(true);
            }}
            data={item}
          />
        )}
      />
    </Column>
  );
};

export default Competitions;

const styles = StyleSheet.create({});
