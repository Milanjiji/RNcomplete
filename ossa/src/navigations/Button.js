import React from 'react';
import { View, Text, Button, Linking, TouchableOpacity } from 'react-native';


const Buttons = () => {
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity
             onPress={() => {Linking.openURL('https://reactnative.dev/docs/handling-touches')}}
             style={{backgroundColor:'#4c4f63',width:250,height:75,borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                <Text style={{color:"white", fontSize:30}}>click me</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Buttons;