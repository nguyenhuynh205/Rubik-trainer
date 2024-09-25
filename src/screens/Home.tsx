import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch } from "../store";
import { Button, Center, Column, Heading, Image, ScrollView } from "native-base";
import LectureList from "../components/Lectures/LectureList";
import {
  CUBE_2x2_LECTURES,
  CUBE_3x3OH_LECTURES,
  CUBE_3x3_LECTURES,
  CUBE_4x4_LECTURES,
} from "../types/lectures";

const headingConfig = {
  ml: "4",
  fontFamily: "mono",
  fontWeight: "medium",
  fontSize: "xl",
};

const IMG_W = 0.9 * Dimensions.get("screen").width;
const IMG_H = (468 / 833) * IMG_W;

const Home = () => {
  const dispatch = useAppDispatch();

  return (
    <Column flex={1} bg="white">
      <Center bg="#5928A2" safeAreaTop pb="3" flexDirection="row">
        <Image alt="Logo" source={require("../../assets/logo-app.png")} w="8" h="8" mr="3" />
        <Image alt="AppName" source={require("../../assets/app-name.png")} w="32" h="6" />
      </Center>
      <ScrollView flex="1">
        <Column space="4" pb="8">
          <Center mt="4">
            <Image
              source={{ uri: "https://i.ytimg.com/vi_webp/47JfJxU7EjM/maxresdefault.webp" }}
              style={{ width: IMG_W, height: IMG_H }}
              rounded="2xl"
              alt="Banner"
            />
          </Center>

          <Column space="2">
            <Heading {...headingConfig}>3x3 Rubik's Cube</Heading>
            <LectureList data={CUBE_3x3_LECTURES} />
          </Column>
          <Column space="2">
            <Heading {...headingConfig}>3x3 One Handed</Heading>
            <LectureList data={CUBE_3x3OH_LECTURES} />
          </Column>
          <Column space="2">
            <Heading {...headingConfig}>2x2 Rubik's Cube</Heading>
            <LectureList data={CUBE_2x2_LECTURES} />
          </Column>
          <Column space="2">
            <Heading {...headingConfig}>4x4 Rubik's Cube</Heading>
            <LectureList data={CUBE_4x4_LECTURES} />
          </Column>
        </Column>
      </ScrollView>
    </Column>
  );
};

export default Home;

const styles = StyleSheet.create({});
