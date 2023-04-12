import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"


const GoalInput = ({onAddGoal, visible, endAddGoal}) => {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (enteredGoalText) => {
        setEnteredGoalText(enteredGoalText)
    }

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return(
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/splash.png')}/>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="white"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={endAddGoal} color="white"/>
                    </View>
                </View>
            </View>
        </Modal>

    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        backgroundColor: 'blue'
    },    
    image: {
        width: 300,
        height: 300
    },
    textInput: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'white',
        color: 'black',
        borderRadius: 6,
        width: '100%',
        padding: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8,
        color: 'white'
    }
})