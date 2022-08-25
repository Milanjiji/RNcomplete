import React from 'react';
import { View,Text, Image,StyleSheet,TouchableOpacity } from 'react-native';

const Images = () => {
    return (
        <View style={{justifyContent:"center",alignItems:"center",flex:1}} >
            <Text style={styles.head} >Image</Text>
            <Image
                source={require('../assets/images/image1.jpg')}
                style={{width:350,height:350}}
            />
         </View>
    );
        
}

const styles = StyleSheet.create({
    head:{
        fontSize:20,
        color:"black",
        
        textAlign:"center",
        fontFamily:'Montserrat-SemiBold',
    }
})

export default Images;