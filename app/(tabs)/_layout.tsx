import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: 'Radio',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="shows/shows"
        options={{
          title: 'Shows',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="donate"
        options={{
          title: 'Donate',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          )
        }}
      />
    </Tabs>
  );
}
