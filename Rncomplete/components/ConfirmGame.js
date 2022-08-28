import React from 'react';
import { View, Text,StyleSheet, Button } from 'react-native';

import Colors from '../assets/Colors';
import Card from './Card';

const ConfirmGame = props => {
    return (

        <Card style={styles.startCard} >
            <View style={styles.startCardTitle} >
            <View style={styles.wrapCard} >

                <Text
                style={{color:'black'}} >
                    You have selected :
                </Text>
                <View style={styles.selectedNumber} >
                    <Text style={styles.selected} >
                        {props.number}
                    </Text>
                </View>
                </View>          
            </View>
            <Button color={Colors.primary} title="START GAME" />                
        </Card>
        
    );

}

const styles = StyleSheet.create({
    wrapCard:{
        flexDirection:'column',
        alignItems:'center'
    },
    selectedNumber:{
        paddingVertical:5,
        paddingHorizontal:25,
        borderWidth:2,
        borderColor:Colors.second,
        borderRadius:8,
        marginTop:10,
    },
    selected:{
        color:Colors.primary,
        fontSize:25
    },
    startCard:{
        padding:20,
        marginTop:20,
        alignItems:'center'
    },
    startCardTitle:{
        
        marginBottom:10
    },
})

export default ConfirmGame;