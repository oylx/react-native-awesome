import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyScene from './app/000navigator/MyScene';
import Index from './app/001layoutDemo/Index';

const onForward = () => console.log(1);
const onBack = () => console.log(2);

const Stack = createStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="首页">
					{(props) => <Index {...props} title="首页" />}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
