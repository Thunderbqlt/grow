import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';


const Plots = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getSuggestions();
  }, []);

  async function getPlants() {
    const res = await databases.listDocuments(config.databaseId, config.plotCollectionId);

    console.log(res); 
    setSuggestions(res.documents);
  }
  return (
    <SafeAreaView>
      <Text>Plots</Text>
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.plant}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Plots   

const styles = StyleSheet.create({})