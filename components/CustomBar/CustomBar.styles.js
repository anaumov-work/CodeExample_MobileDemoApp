import {StyleSheet} from "react-native";
import {Theme} from "../../styles/theme";
import {windowHeight} from "../../styles/styleHelper";

export default StyleSheet.create({
    customBar: {
        zIndex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // height: 70,
        width: "100%",
        backgroundColor: Theme.PRIMARY,
        borderTopColor: "#FFFFFF90",
        // borderTopStyle: "solid",
        borderTopWidth: 2,
    },
    homeButton: {
        height: 80,
        width: 80,
        padding: 20,
    },
    homeButtonIcon: {
        height: "100%",
        width: "100%",
    },
    searchButton: {
        height: 80,
        width: 80,
        padding: 20,
    },
    searchButtonIcon: {
        height: "100%",
        width: "100%",
    },
});