import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TasklistItem from '@/components/TasklistItem'
import TaskList from '@/components/TaskList'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TaskList />
     
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})