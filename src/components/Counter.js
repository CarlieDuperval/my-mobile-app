import { useState } from 'react'
import { View, StyleSheet, Text, Button} from 'react-native'


export default function Counter () {

const [count, setCount] = useState(0)

    return (
        <View style={styles.counterContainer}>
            <Text style={styles.counterText}> You Clicked the button {count} times.</Text>
            <Button title='+' onPress={() => setCount(count + 1)}/>
            <Button title='reset' onPress={() => setCount(0)}/>
            <Button title='-' onPress={() => setCount(count - 1)}/>
        </View>
    )
}
const styles = StyleSheet.create({
    counterContainer: {
        width: '80%',
        margin: 14,
        padding: 14,
        backgroundColor: 'beige',
        borderColor:'navy',
        borderWidth:2,
        borderRadius:16,

    },
    counterText: {
        fontSize: 30,
        textAlign: 'center',
    }
})