
//import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { Button } from 'react-native';
import Home from './src/auth/Home';
import CaseInfo from './src/auth/CaseInfo';
import PhysicianQuestion from './src/auth/PhysicianQuestion';
import ContactInfo from './src/auth/ContactInfo';
import FinishScreen from './src/auth/FinishScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'black' },
    }}
  >

<Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Consumer medical',
          headerStyle: {
            backgroundColor: 'black',
          },
          // headerRight: () => (
          //   <Button 
          //     onPress={() => alert('This is a button!')}
          //     title="Info"
          //     color="#1ABC9C"
          //   />
          // ),
        }}


      />
      <Stack.Screen
        name="CaseInfo"
        component={CaseInfo}
        options={{
          title: 'Consumer medical',
        }}
      />
      <Stack.Screen
        name="PhysicianQuestion"
        component={PhysicianQuestion}
        options={{
          title: 'Consumer medical',
        }}
      />
      <Stack.Screen
        name="ContactInfo"
        component={ContactInfo}
        options={{
          title: 'Consumer medical',
        }}
      />
      <Stack.Screen
        name="FinishScreen"
        component={FinishScreen}
        options={{
          title: 'Consumer medical',
        }}
      />
    </Stack.Navigator>
  );
}


export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
      <MyStack />
      </NavigationContainer>
    );
  }
}


