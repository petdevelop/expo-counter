import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native'
 
export default function Goals() {

    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);


    const goalInputHandler = (enteredGoalText) => {
        setEnteredGoalText(enteredGoalText)
    }

    const addGoalHandler = () => {
        setCourseGoals((currentCourseGoals) => 
            [...currentCourseGoals, 
            enteredGoalText
        ]);
    }
 
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                />
                <Button title="Add Goal" onPress={addGoalHandler}/>
            </View>
            <View style={styles.goalsContainer}>
                <ScrollView alwaysBounceVertical={false}>
                    {courseGoals.map((goal) => (
                        <View key={goal} style={styles.goalItem}>
                            <Text style={styles.goalText}> {goal} </Text>
                        </View>
                    ))}
                </ScrollView> 
            </View>

    </View>
    );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
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
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'purple',
  },
  goalText: {
    color: 'white'
  }
});