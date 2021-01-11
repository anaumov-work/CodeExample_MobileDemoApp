import React from 'react';
import styles from "./App.styles";
import {Provider} from 'react-redux';
import {View} from 'react-native';
import {store} from "./redux/store";
import Navigation, {getRoute, navigate} from "./navigation/Navigation";
import CustomBar from "./components/CustomBar/CustomBar.component";

export default function App() {
    return (
        <View style={styles.app}>
            <Provider store={store}>
                <View style={styles.container} >
                    <Navigation/>
                </View>
                <CustomBar navigate={navigate} getRoute={getRoute}/>
            </Provider>
        </View>
    );
}
