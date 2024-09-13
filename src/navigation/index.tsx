import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./navigate";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Ratings from "../screens/Ratings";


const Stack = createStackNavigator();


const AppNavigator = () => {

    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Ratings" component={Ratings} />

            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default AppNavigator;

