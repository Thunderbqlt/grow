import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs 
        screenOptions={{ //Styling for navigation bar
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#6AE364',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 5,
            borderTopColor: '#FFFFFF',
            height: 84,
          }
        }}
      >
        <Tabs.Screen //Home page screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon //Home page icon styling variables
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen //Plots page screen
          name="plots"
          options={{
            title: 'Plots',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon //Plots page icon styling variables
                icon={icons.plus}
                color={color}
                name="Plots"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen //About page screen
          name="about"
          options={{
            title: 'About',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon //About page icon styling variables
                icon={icons.profile}
                color={color}
                name="About"
                focused={focused}
              />
            )
          }}
        />
        

      </Tabs>
    </>
  )
}

export default TabsLayout