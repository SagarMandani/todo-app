

import React, { } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screen/Home';
import AddToDo from './screen/AddTodo';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }} >
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="AddToDo" component={AddToDo} />
        </HomeStack.Navigator>
    );
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <HomeNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;