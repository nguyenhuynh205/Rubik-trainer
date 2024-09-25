import { StyleSheet } from "react-native";
import React from "react";
import { Row, Text } from "native-base";

export type InfoCardProps = {
	title?: string;
	Left?: React.ReactNode;
	Right?: React.ReactNode;
};

const UserCard = ({ title, Left, Right }: InfoCardProps) => {
	return (
		<Row
			alignItems={"center"}
			flex={1}>
			{Left}
			<Text
				style={{
					flex: 1,
					fontSize: 16,
					fontFamily: "IBMPlexMono_400Regular",
					color: "#1F2937",
				}}>
				{title}
			</Text>
			{Right}
		</Row>
	);
};

export default UserCard;

const styles = StyleSheet.create({});
