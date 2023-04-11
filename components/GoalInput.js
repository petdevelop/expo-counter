import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native"


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
                <TextInput 
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={endAddGoal}/>
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'blue'
      },    
      textInput: {
        borderWidth: 1,
        borderColor: 'blue',
        width: '100%',
        // marginRight: 8,
        padding: 8
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
      },
      button: {
        width: 100,
        marginHorizontal: 8
      }
})