import {StyleSheet} from "react-native";
import {windowHeight, windowWidth} from "../../styles/styleHelper";
import {Theme} from "../../styles/theme";

export default StyleSheet.create({
    detailsScreen: {
        backgroundColor: Theme.PRIMARY,
        minHeight: windowHeight,
        flex: 1,
        paddingBottom: 100,
    },
    movieInfoWrapper: {
        padding: 20,
    },
    backdropWrapper: {
        width: windowWidth,
        height: windowWidth * 0.6,
    },
    backdropImage: {height: "100%"},
    mainInfoBlock: {
        flexDirection: "row",
        width: "100%",
        marginTop: windowWidth * (-0.45),
        padding: 20,
    },
    mainInfoLeftBlock: {
        flexDirection: "row",
        justifyContent: "flex-end",
        height: "100%",
        paddingRight: 10,
    },
    mainInfoRightBlock: {
        flexDirection: "column",
        alignItems: "flex-start",
        height: "100%",
        marginLeft: 10,
    },
    poster: {
        height: windowWidth * 0.4,
        width: windowWidth * 0.3,
        // height: windowWidth * 0.45,
        // width: windowWidth * 0.3,
    },
    titleWrapper: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        marginBottom: 5,
        maxWidth: "80%",
    },
    title: {
        color: Theme.TEXT_LIGHT,
        fontSize: 25,
        textShadowColor: '#000',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
    },
    ratingWrapper: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        marginTop: 5,
    },
    rating: {
        backgroundColor: Theme.PRIMARY,
    },
    details: {
        flexDirection: "column",
        width: "100%",
        marginTop: 20,
    },
    detailsRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 10,
    },
    detailsText: {
        color: Theme.TEXT_LIGHT,
        fontSize: 18,
    },
});