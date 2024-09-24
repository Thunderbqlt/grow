import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { images } from '../constants';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image //Image of the Environmental Club gardens
          source={images.growbanner}
          className="max-w-[380px] w-full h-[250px] rounded-xl mt-6 ml-7"
        />
      <Text className="text-3xl font-pmedium">Welcome to Grow!</Text>
      <StatusBar style="auto" />  
      <Link className="font-pregular" href="/home" style={{ color: 'green'}}>Start with Grow now!</Link>
      <Image //Image of the Environmental Club gardens
          source={images.gardenvolunteers}
          className="max-w-[380px] w-full h-[290px] rounded-xl mt-6"
        />
    </View>
  );  
}


