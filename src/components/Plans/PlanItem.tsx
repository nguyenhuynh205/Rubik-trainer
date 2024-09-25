import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React, { useState } from "react";
import { Box, Row, Text, useTheme } from "native-base";
import { Switch } from "native-base";
import { useNavigation } from "@react-navigation/native";

export interface PlanItemProps extends TouchableOpacityProps {
  time: string;
  index: number;
}

const PlanItem = (props: PlanItemProps) => {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();
  const [isOpen, setIsOpen] = useState(false);
  const textColor = isOpen ? "#000" : colors.coolGray[300];

  return (
    <TouchableOpacity
      {...props}
      onPress={() =>
        navigation.navigate("TimePicker", {
          initialTime: props.time,
          index: props.index,
        })
      }
    >
      <Row
        justifyContent={"space-between"}
        padding={"4"}
        alignItems={"center"}
        borderBottomWidth={"1"}
        borderBottomColor={colors.muted[300]}
      >
        <Box>
          <Text fontSize="2xl" color={textColor}>
            {props.time}
          </Text>
          <Text fontSize="16" color={textColor}>
            Hàng ngày
          </Text>
        </Box>
        <Box>
          <Switch
            size="md"
            onTrackColor={colors.green[500]}
            onChange={() => setIsOpen((prevState) => !prevState)}
          />
        </Box>
      </Row>
    </TouchableOpacity>
  );
};

export default PlanItem;

const styles = StyleSheet.create({});
