import React from 'react';
import styles from "./CollectionOverview.styles";
import {View} from "react-native";
import CollectionPreview from "../CollectionPreview/CollectionPreview.component";
import {withNavigation} from "react-navigation";

const CollectionOverview = (props) => {
    const {collections} = props;

    const mapCollectionsToCollectionPreviews = (collections) => {
        const keys = [...Object.keys(collections)];
        return keys.map((key) => {
            const collectionItems = collections[key];
            return <CollectionPreview key={key} title={key} collection={collectionItems}/>
        });
    }

    return (
        <View style={styles.collectionOverview}>
            {mapCollectionsToCollectionPreviews(collections)}
        </View>
    );
};

export default CollectionOverview;