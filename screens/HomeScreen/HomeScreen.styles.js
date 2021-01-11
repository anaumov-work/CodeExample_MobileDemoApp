import {StyleSheet} from "react-native";
import {windowHeight} from "../../styles/styleHelper";
import {Theme} from "../../styles/theme";

export default StyleSheet.create({
    homeScreen: {
        padding: 25,
        width: "100%",
        // height: "100%",
        flex: 1,
        backgroundColor: Theme.PRIMARY,
        paddingBottom: 100,
    },
    header: {
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: windowHeight * 0.05,
        marginBottom: windowHeight * 0.03,
    },
    headerText: {
        fontSize: 35,
        fontWeight: "400",
        color: Theme.TEXT_LIGHT,
    },
});