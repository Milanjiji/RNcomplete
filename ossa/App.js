
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/navigations/Home';
import Detail from './src/navigations/Detail';
import Curly from './src/navigations/Curlybraces';
import Textinput from './src/navigations/TextInput';
import Style from './src/navigations/Style';
import Images from './src/navigations/Images';
import Button from './src/navigations/Button';
import Buttons from './src/navigations/Button';
import Parallax from './src/navigations/Parallax';





const App = () => {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
          component={Home} 
            options={{
              headerShown:false
               }} />
        <Stack.Screen name="Detail" 
          component={Detail}
          options={{headerShown:false}}
            />
        <Stack.Screen name="curly" 
            component={Curly}
            options={{headerShown:false}} 
            />
        <Stack.Screen name="text" 
            component={Textinput} 
            options={{headerShown:false}}
            /> 
        <Stack.Screen name="style" 
            component={Style} 
            options={{headerShown:false}}
            />   
        <Stack.Screen name="image" 
            options={{headerShown:false}}
            component={Images} 
            />    
        <Stack.Screen name="buttons" 
            options={{headerShown:false}}
            component={Buttons} 
            />       
        <Stack.Screen name="parallax" 
            options={{headerShown:false}}
            component={Parallax} 
            />       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
