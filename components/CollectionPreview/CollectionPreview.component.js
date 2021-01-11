import React from 'react';
import {Text, View} from "react-native";
import CollectionItem from "../CollectionItem/CollectionItem.component";
import styles from './CollectionPreview.styles';
import {FlatList} from "react-native";
import {withNavigation} from "react-navigation";

const CollectionPreview = ({title, collection}) => {
    const renderItem = ({item: {id, title, poster}}) => {
        return <CollectionItem id={id} title={title} backdropUri={poster}/>
    }

    return (
        <View style={styles.collectionPreview}>
            <Text style={styles.title}>{title}</Text>
            <FlatList style={styles.collectionContainer}
                      data={collection}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.id}
                      horizontal={true}
            />
        </View>
    );
};

export default CollectionPreview;