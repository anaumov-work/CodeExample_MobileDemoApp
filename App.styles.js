import {StyleSheet} from "react-native";
import {Theme} from "./styles/theme";
import {windowHeight, windowWidth} from "./styles/styleHelper";

export default StyleSheet.create({
    app: {
        flexDirection: "column",
        backgroundColor: Theme.PRIMARY,
        height: windowHeight,
        width: windowWidth,
    },
    container: {
        flex: 1,
        // height: windowHeight ,
        // width: windowWidth,
    },
    customBar: {
        width: "100%",
    }
});