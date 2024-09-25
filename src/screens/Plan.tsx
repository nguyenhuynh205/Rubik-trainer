import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Column } from "native-base";
import { useTheme } from "native-base";
import Header1 from "../components/Header1";
import { Add } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import PlanItem from "../components/Plans/PlanItem";

const Trainning = () => {
	const { colors } = useTheme();
	const navigation = useNavigation<any>();
	const calendars: any = useSelector<RootState>((state) => {
		// console.log(state.calendars);
		return state.calendars.filter((calendar) => !!calendar);
	});
	const calendarsDisplay = calendars.map((item: any, index: number) => (
		<PlanItem
			index={index}
			time={item}
			key={index}
		/>
	));

	console.log(calendars);

	return (
		<Column flex={1} bg="white">
			<Header1
				title="Training Plan"
				RightBtn={({ color, size }) => (
					<TouchableOpacity onPress={() => navigation.navigate("AddPlan", {})}>
						<Add
							color={color}
							size={size}
						/>
					</TouchableOpacity>
				)}
			/>
			<Box flex={1}>{calendarsDisplay}</Box>
		</Column>
	);
};

export default Trainning;

const styles = StyleSheet.create({});
