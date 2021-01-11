import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from "../screens/HomeScreen/HomeScreen.component";
import DetailsScreen from "../screens/DetailsScreen/DetailsScreen.component";

export const MoviesRoutes = {
    HOME: 'Home',
    DETAILS: "Details",
}

export const navigationRef = React.createRef();
const MoviesStack = createStackNavigator();

export const navigate = (name, params) => {
    navigationRef.current?.navigate(name, params);
}

export const getRoute = () => {
    return navigationRef.current?.getCurrentRoute();
}

const Navigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <MoviesStack.Navigator initialRouteName={MoviesRoutes.HOME}>
                <MoviesStack.Screen name={MoviesRoutes.HOME} component={HomeScreen}
                                    options={{title: MoviesRoutes.HOME, headerShown: false}}/>
                <MoviesStack.Screen name={MoviesRoutes.DETAILS} component={DetailsScreen}
                                    options={{title: MoviesRoutes.DETAILS, headerShown: false}}/>
            </MoviesStack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;