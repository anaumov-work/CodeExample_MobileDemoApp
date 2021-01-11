import React, {createRef, useState} from 'react';
import styles from "./CustomBar.styles";
import {Image, TouchableOpacity, View} from "react-native";
import HomeIconPNG from "../../assets/images/home.png";
import SearchIconPNG from "../../assets/images/search.png";
import {Asset} from "expo-asset";
import {MoviesRoutes} from "../../navigation/Navigation";
import {useDispatch, useSelector} from "react-redux";
import {clearSearchFilter, updateSearchFilter} from "../../redux/movies/movies.actions";
import SearchBar from "../SearchBar/SearchBar.component";

const CustomBar = ({navigate, getRoute}) => {
    const dispatch = useDispatch();
    const homeIconUri = Asset.fromModule(HomeIconPNG).uri;
    const searchIconUri = Asset.fromModule(SearchIconPNG).uri;
    const [isSearchActivated, setIsSearchActivated] = useState(false);
    const searchText = useSelector(state=>state.movies.searchText);
    const route = getRoute();

    const onGoHomePress = () => {
        navigate(MoviesRoutes.HOME);
    }

    const onSearchPress = () => {
        setIsSearchActivated(true);
        dispatch(updateSearchFilter(""));
    }

    const onUpdateSearchText = (text) => {
        dispatch(updateSearchFilter(text));
        const route = getRoute();
        if (route?.name === MoviesRoutes.DETAILS){
            navigate(MoviesRoutes.HOME);
        }
    }

    const onCancelSearch = () => {
        dispatch(clearSearchFilter());
        setIsSearchActivated(false);
    }

    const homeButton = (
        <TouchableOpacity key={'home'} onPress={onGoHomePress}>
            <View style={styles.homeButton}>
                <Image style={styles.homeButtonIcon} source={{uri: homeIconUri}}/>
            </View>
        </TouchableOpacity>);
    const searchButton = (
        <TouchableOpacity key={'search'} onPress={onSearchPress}>
            <View style={styles.searchButton}>
                <Image style={styles.searchButtonIcon} source={{uri: searchIconUri}}/>
            </View>
        </TouchableOpacity>
    );
    const searchBar = <SearchBar placeholder="Type Here..." value={searchText} onChangeText={onUpdateSearchText} onCancel={onCancelSearch}/>
    const customBarComponents = isSearchActivated ? searchBar : [homeButton, searchButton];

    return (
        <View style={styles.customBar}>
            {customBarComponents}
        </View>
    );
};

export default CustomBar;