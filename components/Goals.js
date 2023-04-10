import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native'

import GoalItem from './GoalItem';
import GoalInput from './GoalInput';
 
export default function Goals() {

    const [courseGoals, setCourseGoals] = useState([]);

    const onAddGoalHandler = (enteredGoalText) => {
        setCourseGoals((currentCourseGoals) => 
            [...currentCourseGoals, 
            {text: enteredGoalText, id: Math.random().toString()}
        ]);
    }

    const deleteGoalHandler = (id) => {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter(goal => goal.id !== id)
        })
    } 
 
    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={onAddGoalHandler}/>

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
    );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  goalsContainer: {
    flex: 5
  },
});