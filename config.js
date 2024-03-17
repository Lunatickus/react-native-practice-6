import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBkA88Ak2gh6HGdbOQCg8XTR8tUcc5PW9A",
  authDomain: "mobileblogapp-efad4.firebaseapp.com",
  projectId: "mobileblogapp-efad4",
  storageBucket: "mobileblogapp-efad4.appspot.com",
  messagingSenderId: "146246528530",
  appId: "1:146246528530:web:82b842c0f8ad8cd82a32cb",
  measurementId: "G-KWP944X632",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);
