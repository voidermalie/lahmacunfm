import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LAHMACUN_PURPLE } from '../../util/constants';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LAHMACUN_PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
