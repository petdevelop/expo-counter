import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({text, onDeleteItem, id}) {

    const deleteItemHandler = () => {
        onDeleteItem(id)
    }   

    return (
        <View style={styles.goalItem}>
            <Pressable 
                onPress={deleteItemHandler}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}> {text} </Text>
            </Pressable>
        </View>             

    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: 'white',
      },
    goalText: {
        padding: 8,
        color: 'blue'
    },
    pressedItem: {
        opacity: 0.5
    }
});