import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Square from '../Animations/Square'
import { useSharedValue, withTiming } from 'react-native-reanimated'

const Home = () => {
  const sharedValue = useSharedValue(0)
  useEffect(() => {
    sharedValue.value = withTiming(4 * Math.PI, {duration:10000})
  })

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
      {new Array(12).fill(0).map((_, index) => {
        return (
          <Square key={index} index={index} sharedValue={sharedValue}/>
        )
      })}
    </View>
  )
}

export default Home