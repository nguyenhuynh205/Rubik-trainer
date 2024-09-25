import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "native-base";
import { COMPETITIONS } from "../../types/competition";
import CompetitionCard from "./CompetitionCard";

const CompetitionList = () => {
  return (
    <FlatList flex="1" data={COMPETITIONS} renderItem={({ item }) => <CompetitionCard data={item} />} />
  );
};

export default CompetitionList;

const styles = StyleSheet.create({});
