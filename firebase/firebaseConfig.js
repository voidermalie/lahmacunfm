import firebase from '@react-native-firebase/app';
import '@react-native-firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  gcmSenderId: process.env.GCM_SENDER_ID,
  plistVersion: "1",
  bundleID: "com.lahmacun.lahmacunfm",
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  isAdsEnabled: "false",
  isAnalyticsEnabled: "true",
  isAppInviteEnabled: "true",
  isGcmEnabled: "true",
  isSigninEnabled: "false",
  googleAppId: process.env.GOOGLE_APP_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export { firebase };
export const analytics = firebase.analytics();
