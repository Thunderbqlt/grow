import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const Plots = () => {
  getPlants()
  async function getPlants() {
    const res = await databases.listDocuments(config.databaseId, config.plotCollectionId);

    console.log(res);
  }
  return (
    <SafeAreaView>
      <Text>Plots</Text>
    </SafeAreaView>
  )
}

export default Plots   

const styles = StyleSheet.create({})