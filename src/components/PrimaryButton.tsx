import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { Center } from "native-base";
import { Text } from "native-base";
import { STYLES, colors } from "../constansts/style";

export interface PrimaryButtonProps extends TouchableOpacityProps {
	title: String;
	bottom?: number;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
	return (
		<Center
			mx={6}
			position={"absolute"}
			bottom={15}
			left={3}
			right={3}
		>
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
				{...props}
			>
				<Center>
					<Text color={"#fff"}>{props.title}</Text>
				</Center>
			</TouchableOpacity>
		</Center>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({});
