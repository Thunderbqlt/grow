import { View, Text, ScrollView, Button, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router, useRouter } from 'expo-router'
import { images } from '../../constants';
import CustomButton from '../../components/CustomButton';


const About = () => {

  return (
    <SafeAreaView>
      <ScrollView className="px-4 my-6">
        <View className="w-full justify-center items-center h-full px-4">
        <Text className="text-2xl text-black text-center font-psemibold">WHAT WE DO</Text>
        <View className="rounded-xl bg-accent w-full mt-2">
        <Text className="text-md text-black text-center font-pregular">Grow is an app for you to keep a track of your garden. Grow is your pocket companion to manage any garden, from a sprawling community project to your single veggie plot!</Text>
        
        </View>
        <Image //Image of the Environmental Club gardens
          source={images.garden}
          className="max-w-[380px] w-full h-[300px] rounded-xl mt-6"
        />

        <CustomButton //Button leading to the home page
          title="Get Started"
          handlePress={() => router.push('/home')}
          containerStyles="w-[200px] mt-7 bg-secondary"
        />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default About