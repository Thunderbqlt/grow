import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import CustomButton from '../../components/CustomButton';
import {router} from 'expo-router'


const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView className="px-4 my-6">
        <View className="w-full justify-center items-center h-full px-4">
        <Text className="text-2xl text-black text-center font-psemibold">SELECT A PLOT TO VIEW IT</Text>
        
        <CustomButton //Button leading to the plots page
          title="Plot 1"
          handlePress={() => router.push('/plots')}
          containerStyles="w-[200px] mt-7 bg-lightbrown"
          textStyles="text-black"
        />
        <CustomButton //Button leading to the plots page
          title="Plot 2"
          handlePress={() => router.push('/plots')}
          containerStyles="w-[200px] mt-7 bg-lightbrown"
          textStyles="text-black"
        />
        <CustomButton //Button leading to the plots page
          title="Plot 3"
          handlePress={() => router.push('/plots')}
          containerStyles="w-[200px] mt-7 bg-lightbrown"
          textStyles="text-black"
        />
        

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home