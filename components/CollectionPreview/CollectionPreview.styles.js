import {StyleSheet} from "react-native";
import {Theme} from "../../styles/theme";

export default StyleSheet.create({
    collectionPreview: {
        flexDirection: "column",
        marginBottom: 15,
    },
    title: {
        fontSize: 25,
        marginBottom: 15,
        color: Theme.TEXT_LIGHT,
    },
    collectionContainer: {
        width: "100%",
        flexDirection: "row",
    },
});