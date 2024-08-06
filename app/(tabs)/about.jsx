import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const About = () => {
  return (
    <SafeAreaView>
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-black text-center font-psemibold">WHAT WE DO</Text>
        <View className="rounded-xl bg-accent">
        <Text className="text-md text-black text-center font-pregular">Grow is an app for you to keep a track of your garden. Grow is your pocket companion to manage any garden, from a sprawling community project to your single veggie plot!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default About