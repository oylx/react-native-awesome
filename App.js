import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyScene from './app/000navigator/MyScene';

const onForward = () => console.log(1);
const onBack = () => console.log(2);

const Stack = createStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home">
					{(props) => (
						<MyScene
							{...props}
							title="myScene"
							onForward={onForward}
							onBack={onBack}
						/>
					)}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
