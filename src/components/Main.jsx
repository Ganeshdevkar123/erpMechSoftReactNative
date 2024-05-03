import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import HomeScreen from '../screens/HomeScreen'

const Main = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}/>
      <HomeScreen navigation={navigation}/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})