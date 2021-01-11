import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./CollectionItem.styles";
import {MoviesRoutes} from "../../navigation/Navigation";
import {withNavigation} from 'react-navigation';
import {useNavigation} from "@react-navigation/core";

const CollectionItem = ({id, title, backdropUri}) => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.push(MoviesRoutes.DETAILS, {movieId: id});
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.collectionItem}>
                <Image style={styles.poster} source={{uri: backdropUri}} resizeMode={"stretch"}></Image>
                <View><Text style={styles.title}>{title}</Text></View>
            </View>
        </TouchableOpacity>
    );
};

export default CollectionItem;