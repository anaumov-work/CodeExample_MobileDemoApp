import {StyleSheet} from "react-native";
import {Theme} from "../../styles/theme";

export default StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    input: {
        flex: 1,
        height: 80,
        fontSize: 24,
        color: Theme.TEXT_LIGHT,
        marginLeft: 20,
    },
    cancelButton: {
        height: 40,
        width: 40,
        marginRight: 20,
        marginLeft: 20,
    },
    cancelButtonIcon: {
        height: 40,
        width: 40,
    }
});