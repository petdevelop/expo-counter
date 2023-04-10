import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native"


const GoalInput = ({onAddGoal}) => {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (enteredGoalText) => {
        setEnteredGoalText(enteredGoalText)
    }

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="Your course goal!"
                value={enteredGoalText}
                onChangeText={goalInputHandler}
            />
            <Button title="Add Goal" onPress={addGoalHandler}/>
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'blue'
      },    
      textInput: {
        borderWidth: 1,
        borderColor: 'blue',
        width: '70%',
        marginRight: 8,
        padding: 8
      },
})