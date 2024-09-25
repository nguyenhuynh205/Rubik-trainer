import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { Box, Center, Checkbox } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text } from "native-base";
import { STYLES, colors } from "../constansts/style";
import { timeConvert, timeFormat } from "../constansts/functions";
import { useDispatch } from "react-redux";
import { addCalendar, removeCalendar, updateCalendar } from "../store/calendar.reducer";
import Header1 from "../components/Header1";

const AddPlan = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const dispatch = useDispatch<any>();
  const isUpdate = !!route.params.initialTime;
  const [date, setDate] = useState<any>(
    isUpdate ? timeConvert(route.params.initialTime) : new Date()
  );
  // console.log("date initial: ", new Date(`${route.params.initialTime}Z`));
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  const onCancelHandler = () => {
    console.log("Cancel");
    navigation.goBack();
  };
  const onSaveHandler = () => {
    if (isUpdate) {
      dispatch(updateCalendar({ index: route.params.index, value: timeFormat(date) }));
    } else {
      dispatch(addCalendar(timeFormat(date)));
    }
    navigation.goBack();
  };
  const deleteCalendarHandle = () => {
    dispatch(removeCalendar(route.params.initialTime));
    navigation.goBack();
  };
  return (
    <Box bgColor={"#fff"} flex={1}>
      <Header1
        title="Thêm lịch"
        LeftBtn={() => (
          <TouchableOpacity onPress={onCancelHandler} style={{ marginLeft: 4 }}>
            <Text color={"#fff"}>Hủy</Text>
          </TouchableOpacity>
        )}
        RightBtn={() => (
          <TouchableOpacity onPress={onSaveHandler} style={{ marginRight: 4 }}>
            <Text color={"#fff"}>Lưu</Text>
          </TouchableOpacity>
        )}
      />
      <DateTimePicker
        mode={"time"}
        display="spinner"
        locale="en_GB"
        value={date}
        onChange={onChange}
      />
      <Box borderBottomWidth={1} borderBottomColor={colors.lightGrey}>
        <Text bold fontSize={16} px={6} pb={2}>
          Lặp lại
        </Text>
      </Box>
      <MultipleChoiceBox
        options={[
          "Mọi Thứ Hai",
          "Mọi Thứ Ba",
          "Mọi Thứ Tư",
          "Mọi Thứ Năm",
          "Mọi Thứ Sáu",
          "Mọi Thứ Bảy",
          "Mọi Chủ Nhật",
        ]}
      />
      {isUpdate && (
        <Center mx={6} position={"absolute"} bottom={15} left={3} right={3}>
          <TouchableOpacity
            style={[
              STYLES.primaryButton,
              {
                width: "100%",
                paddingVertical: 10,
                paddingHorizontal: 24,
                borderRadius: 100,
              },
            ]}
            onPress={deleteCalendarHandle}
          >
            <Center>
              <Text color={"#fff"}>Xóa lịch</Text>
            </Center>
          </TouchableOpacity>
        </Center>
      )}
    </Box>
  );
};

export default AddPlan;

interface MultipleChoiceBoxProps {
  options: string[];
}

const MultipleChoiceBox: React.FC<MultipleChoiceBoxProps> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <Box>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.optionContainer}
          onPress={() => toggleOption(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
          <Checkbox
            value={option}
            borderWidth={0}
            rounded={"full"}
            isChecked={selectedOptions.includes(option)}
            size={6}
          />
        </TouchableOpacity>
      ))}
    </Box>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 4,
  },
  optionText: {
    marginLeft: 10,
  },
});
