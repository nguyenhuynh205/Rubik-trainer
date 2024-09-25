import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Column, Image, Row, Text } from "native-base";
import { ICompetition } from "../../types/competition";

type Props = {
  data: ICompetition;
  onPress?: () => any;
};

const CompetitionCard = ({ data, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Row px="5" space="4" my="3">
        <Image source={{ uri: data.imgUrl }} w="24" h="24" resizeMode="contain" alt={data.title} />
        <Column flex="1" space="2">
          <Column>
            <Text color="#5928A2" fontWeight="semibold" fontSize="md" numberOfLines={1}>
              {data.title}
            </Text>
            <Text>{data.country}</Text>
          </Column>
          <Text color="muted.500">{data.date}</Text>
        </Column>
      </Row>
    </TouchableOpacity>
  );
};

export default CompetitionCard;

const styles = StyleSheet.create({});
