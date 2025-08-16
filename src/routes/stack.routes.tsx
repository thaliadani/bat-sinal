import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home/HomeScreen";
import {FormScreen} from "../screens/Form/FormScreen";

const {Screen, Navigator} = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator initialRouteName="Home">
            <Screen 
                name="Home" component={HomeScreen} 
                options={{headerShown: false}}
            />
            <Screen 
                name="Form" component={FormScreen} 
                options={{headerShown: false}}
            />
        </Navigator>
    );
}