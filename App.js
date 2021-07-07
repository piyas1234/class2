import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from './src/component/Card/Card';
const App = () => {
  const loading = true;
  const [data, setData] = useState([])
  useEffect(() => {
    loadData()
  },[])

  const loadData = ()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setData(data))

  }
  console.log(data)

  return (
    <View>
      <Text>Home Page</Text>

      {data.map((item)=>{
         return <Card key={item.id} data={item}></Card>
      })}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  main:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:10,
    marginTop:10,
    backgroundColor:'skyblue'
  },

  id:{
    fontSize:16,
    color:'red'
  }
})
