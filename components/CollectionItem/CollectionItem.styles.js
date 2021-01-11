import {StyleSheet} from "react-native";
import {windowHeight, windowWidth} from "../../styles/styleHelper";
import {Theme} from "../../styles/theme";

export default StyleSheet.create({
    collectionItem: {
        flexDirection: "column",
        width: windowWidth * 0.4,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        color: Theme.TEXT_LIGHT,
    },
    poster: {
        height: windowWidth * 0.6,
        width: windowWidth * 0.4,
        // height: "100%",
        // width: "100%",
        borderRadius: 10,
        // overflow: "hidden",
    },
});