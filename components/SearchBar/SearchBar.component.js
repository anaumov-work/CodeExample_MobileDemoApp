import React, {createRef, useEffect} from 'react';
import {Image, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./SearchBar.styles";
import CancelIconPNG from "../../assets/images/cancel.png";
import {Asset} from "expo-asset";

const CancelIconUri = Asset.fromModule(CancelIconPNG).uri;

const SearchBar = ({value, placeholder, onChangeText, onBlur, onCancel}) => {
    const searchInputRef = createRef();
    useEffect(()=>{
     searchInputRef.current.focus();
    });

    return (
        <View style={styles.searchBar}>
            <TextInput ref={searchInputRef} style={styles.input} value={value} placeholder={placeholder}
                       onChangeText={onChangeText} onBlur={onBlur}/>
            <TouchableOpacity onPress={onCancel}>
                <View style={styles.cancelButton}>
                    <Image style={styles.cancelButtonIcon} source={{uri: CancelIconUri}}/>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;