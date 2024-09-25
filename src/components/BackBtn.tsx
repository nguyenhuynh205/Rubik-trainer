import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const BackBtn = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity onPress={navigation.goBack}>
      <AntDesign name="left" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({});
