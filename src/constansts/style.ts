import { Dimensions, StyleSheet } from "react-native";

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const colors = {
    primary: '#652FAE',
    boldedGrey: "#F3F4F6",
    lightGrey: "#D4D4D4",
} 

export const STYLES = StyleSheet.create({
    title: {
        fontSize: 16,
        color: colors.primary,
        fontWeight: "bold"
    },
    primaryButton: {
        backgroundColor: colors.primary, 
    }
})