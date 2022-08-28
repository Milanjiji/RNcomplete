import React ,{ useState } from "react";
import { 
    View,
    Text,
    StyleSheet, 
    TextInput, 
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
 } from "react-native";

import Card from "../components/Card";
import Colors from "../assets/Colors";
import Input from "../components/Input";
import ConfirmGame from "../components/ConfirmGame";
import Game from "./Game";

const Startgame = props =>{

    let printChoosen;
    const [enteredValue,setEnteredValue] = useState('')
    const [confirm,setconfirm] = useState(false);
    const [choosen,setchoosen] = useState();
    const [print,setprint] = useState(isNaN(choosen) ? "" : <ConfirmGame number={0} />)



    const inputHandler = inText => (
        setEnteredValue(inText.replace(/[^0-9]/g , ''))
    );
    const confirmHandler =() =>{
        const choosenNumber = parseInt(enteredValue);

        if(isNaN(choosenNumber) || choosenNumber <=0 || choosenNumber > 99 ){
            alert('The number has to between 1 & 99');
            setconfirm(false);
            setchoosen('')
            setprint(choosenNumber ? <ConfirmGame number={0} /> : '')
            return;
        }
        setconfirm(true);
        setEnteredValue('')
        setchoosen(choosenNumber) 
        setprint(<ConfirmGame number={choosenNumber} />)
    }
    const cheak = ()=>{
        console.log(choosen);
        console.log(confirm);
    }
    
    return(
        <TouchableWithoutFeedback
        onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen} >
            <Text style={styles.gameTitle} >Start a new game</Text>
            <Card style={styles.cardConfirm} >
                <Text style={styles.wrapboxtitle} >Guess a number</Text>
                <Input
                keyboardType="number-pad"
                maxLength={2}
                blurOnSubmit={true}
                value={enteredValue}
                onChangeText={inputHandler}
                style="width:'80%'" />  
                <View style={styles.buttons} >
                    <Button onPress={()=>{
                        setEnteredValue('')
                    }} color={Colors.second} title="Reset" />
                    <Button onPress={confirmHandler} color={Colors.primary} title="Confirm" />
                </View>
            </Card>
            {print}

            </View>
            
        </TouchableWithoutFeedback>
    );    
}

const styles = StyleSheet.create({
    screen:{
        alignItems:"center",
        
    },
    gameTitle:{
        color:'black',
        fontSize:15,
        marginTop:20,
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:20 
    },
    wrapboxtitle:{
        color:'black',
        textAlign:'center',
        marginTop:10
    },
    cardConfirm:{
        width:'80%'
    }
    
})

export default Startgame;
