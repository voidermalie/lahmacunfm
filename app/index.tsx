import { Redirect } from "expo-router";
import { firebase, analytics } from '../firebase/firebaseConfig.js';

// Log to verify initialization
console.log('Firebase app initialized:', firebase.apps.length > 0);
console.log('Firebase analytics initialized:', analytics != null);

const Home = () => {
  return <Redirect href="/(tabs)/home"/>
}

export default Home;
