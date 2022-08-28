import React from 'react'; 
import { View, Text, TextInput, StyleSheet, ProgressViewIOSComponent } from 'react-native';

const Input = props => {
    return (
        <View>
            <TextInput {...props} style={{...styles.wrapboxInput,...props.style}} textAlign="center"   />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapboxInput:{
        borderBottomColor:"grey",
        borderBottomWidth:1,
        
        marginHorizontal:'10%',
        marginBottom:10
        
    }
})

export default Input;