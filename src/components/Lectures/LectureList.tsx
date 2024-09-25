import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "native-base";
import { ILecture } from "../../types/lectures";
import LectureCard from "./LectureCard";
import VideoPopup from "../VideoPopup";

type Props = {
  data: ILecture[];
};

const LectureList = ({ data }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState<ILecture | null>(null);
  return (
    <>
      <VideoPopup isOpen={isOpen} data={item} onClose={() => setIsOpen(false)} />
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <LectureCard
            onPress={() => {
              setItem(item);
              setIsOpen(true);
            }}
            ml={index === 0 ? "4" : "2"}
            data={item}
          />
        )}
      />
    </>
  );
};

export default LectureList;

const styles = StyleSheet.create({});
