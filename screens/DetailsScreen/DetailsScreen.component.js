import React, {useEffect} from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import styles from "./DetailsScreen.styles";
import {AirbnbRating} from "react-native-elements";
import {fetchCollectionsStartAsync} from "../../redux/movies/movies.actions";
import {useDispatch, useSelector} from "react-redux";
import {makeSelectMovieById} from "../../redux/movies/movies.selectors";
import {useRoute} from "@react-navigation/core";

const DetailsScreen = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const movieData = useSelector(state => makeSelectMovieById(state, route.params.movieId));

    useEffect(() => {
        dispatch(fetchCollectionsStartAsync.bind(null, ""));
    }, []);

    if (!movieData) {
        return <View><Text>Movie is not found!</Text></View>
    }

    const {backdrop, poster, title, overview} = movieData;
    const rating = movieData.imdb_rating ? movieData.imdb_rating / 2 : 0;
    const year = movieData.year ? movieData.year + " | " : "";
    const length = movieData.length ? movieData.length + " | " : "";
    const director = movieData.director ? movieData.director : "";
    const cast = movieData.cast ? movieData.cast.join(', ') : "";

    return (
        <ScrollView style={styles.detailsScreen}>
            <View style={styles.backdropWrapper}>
                <Image style={styles.backdropImage} source={{uri: backdrop}}/>
            </View>
            <View style={styles.movieInfoWrapper}>
                <View style={styles.mainInfoBlock}>
                    <View style={styles.mainInfoLeftBlock}>
                        <Image style={styles.poster} source={{uri: poster}}/>
                    </View>
                    <View style={styles.mainInfoRightBlock}>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                        <View style={styles.ratingWrapper}>
                            <AirbnbRating defaultRating={rating} count={5} size={20} showRating={false} readonly={true}/>
                        </View>
                    </View>
                </View>
                <View style={styles.details}>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{`${year}${length}${director}`}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{cast}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{overview}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default DetailsScreen;