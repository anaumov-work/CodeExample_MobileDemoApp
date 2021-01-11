import React, {useEffect} from 'react';
import {ScrollView, Text, View} from "react-native";
import {fetchCollectionsStartAsync} from "../../redux/movies/movies.actions";
import {useDispatch, useSelector} from "react-redux";
import CollectionOverview from "../../components/CollectionsOverview/CollectionOverview.component";
import styles from "./HomeScreen.styles";
import {makeSelectMoviesBySearchText, makeSelectMoviesGroupedByGenre} from "../../redux/movies/movies.selectors";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const searchText = useSelector(state => state.movies.searchText);
    const movieCollections = useSelector(state => {
        if (searchText?.length > 0) {
            return makeSelectMoviesBySearchText(state);
        } else {
            return makeSelectMoviesGroupedByGenre(state)
        }
    });

    useEffect(() => {
        dispatch(fetchCollectionsStartAsync.bind(null, ""));
    }, []);

    return (
        <ScrollView style={styles.homeScreen}>
            <View style={styles.header}>
                <Text style={styles.headerText}>WOOKIE</Text>
                <Text style={styles.headerText}>MOVIES</Text>
            </View>
            <CollectionOverview collections={movieCollections}/>
        </ScrollView>
    );
};

export default HomeScreen;