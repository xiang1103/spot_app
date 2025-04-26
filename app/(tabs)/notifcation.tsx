import { View, Text } from 'react-native'
import React from 'react'
import {styles} from "../../styles/index_style"; 

export default function notifcation() 
{
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Notification Page</Text>
    </View>
  )
}