import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPA57L8oMxzD9kw14Zyvj62HYv-IKzrY0",
  authDomain: "sierra-research-fund.firebaseapp.com",
  projectId: "sierra-research-fund",
  storageBucket: "sierra-research-fund.firebasestorage.app",
  messagingSenderId: "270146568108",
  appId: "1:270146568108:web:a9828594c652ff90f90409",
  measurementId: "G-5W5BZ90GYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);

export { app, analytics, auth };
