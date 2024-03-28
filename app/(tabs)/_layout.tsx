import React from 'react';
import { Tabs } from 'expo-router';
import { LAHMACUN_PURPLE } from '../../util/constants';
import { StyleSheet, View, Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarStyle: styles.tabBarBackground
      }}
      sceneContainerStyle={styles.scrollView}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Radio',
          tabBarIcon: RadioIcon
        }}
      />
      <Tabs.Screen
        name="shows/shows"
        options={{
          title: 'Shows',
          tabBarIcon: ShowsIcon
        }}
      />
      <Tabs.Screen
        name="donate"
        options={{
          title: 'Donate',
          tabBarIcon: DonateIcon
        }}
      />
    </Tabs>
  );
}

const RadioIcon = ({ focused }: { focused: boolean }) => (
  <Image
    style={{ ...styles.radioIcon, ...(!focused ? styles.inactive : '') }}
    source={require('../../assets/img/lahmacun-logo.png')}
  />
);

const ShowsIcon = ({ focused }: { focused: boolean }) => (
  <Image
    style={{ ...styles.showsIcon, ...(!focused ? styles.inactive : '') }}
    source={require('../../assets/img/vinyl-record.png')}
  />
);

const DonateIcon = ({ focused }: { focused: boolean }) => (
  <Image
    style={{ ...styles.donateIcon, ...(!focused ? styles.inactive : '') }}
    source={require('../../assets/img/money.png')}
  />
);

const styles = StyleSheet.create({
  mainWrapper: {
    paddingVertical: 15
  },
  scrollView: {
    backgroundColor: LAHMACUN_PURPLE,
    height: '100%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center'
  },
  radioIcon: {
    width: 30,
    height: 25
  },
  showsIcon: {
    width: 30,
    height: 30
  },
  donateIcon: {
    width: 30,
    height: 30
  },
  inactive: {
    tintColor: '#606060'
  },
  tabOptions: {
    backgroundColor: LAHMACUN_PURPLE,
    width: '100%',
    height: '100%'
  },
  tabBarBackground: {
    backgroundColor: LAHMACUN_PURPLE
  }
});
