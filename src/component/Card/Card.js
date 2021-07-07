import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
     const {data} = props;
     console.log(data)
    return (
        <View style={styles.main}>
            <Text>{data.id}</Text>
            <Text>{data.name}</Text>
            <Text>{data.username}</Text>
        </View> 
        )
    }

export default Card;

const styles = StyleSheet.create({
    main:{
        backgroundColor:'white',
        color:'white',
        padding:10,
        marginTop:10,
        elevation:5
    }
})
