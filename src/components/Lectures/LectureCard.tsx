import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Column, Image, Text } from "native-base";
import { ILecture } from "../../types/lectures";

type Props = {
  data: ILecture;
  onPress?: () => void;
  ml: string;
};

const LectureCard = ({ data, onPress, ..._stack }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Column style={styles.container} space="1.5" {..._stack}>
        <Image
          style={styles.img}
          rounded="lg"
          alt={data.title}
          source={{
            uri: data.imgUri,
          }}
        />
        <Text fontWeight="light" numberOfLines={1}>
          {data.title}
        </Text>
      </Column>
    </TouchableOpacity>
  );
};

export default LectureCard;

const IMG_W = 150;
const IMG_H = (IMG_W * 118) / 210;

const styles = StyleSheet.create({
  container: {
    width: IMG_W,
  },
  img: {
    width: IMG_W,
    height: IMG_H,
  },
});
