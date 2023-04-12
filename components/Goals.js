import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import GoalItem from './GoalItem';
import GoalInput from './GoalInput';
 
export default function Goals() {

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    const startAddGoalHandler = () => {
        setModalIsVisible(true)
    }

    const endAddGoalHandler = () => {
        setModalIsVisible(false)
    }

    const onAddGoalHandler = (enteredGoalText) => {
        setCourseGoals((currentCourseGoals) => 
            [...currentCourseGoals, 
            {text: enteredGoalText, id: Math.random().toString()}
        ]);

        setModalIsVisible(false)
    }

    const deleteGoalHandler = (id) => {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter(goal => goal.id !== id)
        })
    } 
 
    return (
        <>
            <StatusBar style='light'/>
            <View style={styles.appContainer}>
                <Button title='Add New Goal' color="white" onPress={startAddGoalHandler}/>

                {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={onAddGoalHandler} endAddGoal={endAddGoalHandler}/>}

                <View style={styles.goalsContainer}>
                    <FlatList 
                        data={courseGoals} 
                        renderItem={(itemData) => {
                            return (
                                <GoalItem 
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDeleteItem={deleteGoalHandler}
                                />
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item.id
                        }} 
                        alwaysBounceVertical={false} 
                    />
                        
                </View>

            </View>
        </>

    );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'blue'
  },
  goalsContainer: {
    flex: 5
  },
});