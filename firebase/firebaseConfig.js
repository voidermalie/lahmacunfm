import firebase from '@react-native-firebase/app';
import '@react-native-firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  gcmSenderId: process.env.FIREBASE_GCM_SENDER_ID,
  plistVersion: "1",
  bundleID: "com.lahmacun.lahmacunfm",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  isAdsEnabled: "false",
  isAnalyticsEnabled: "true",
  isAppInviteEnabled: "true",
  isGcmEnabled: "true",
  isSigninEnabled: "false",
  googleAppId: process.env.FIREBASE_GOOGLE_APP_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export { firebase };
export const analytics = firebase.analytics();
