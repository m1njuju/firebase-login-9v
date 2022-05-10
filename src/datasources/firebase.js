// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeaz3012ROVJDa6ItN4DI1i5oy8H5O-oM",
  authDomain: "fir-test-login-4d569.firebaseapp.com",
};

// Initialize Firebase
// 파이어베이스를 다른 자바스크립트 파일에 작성했기에 모듈로 쓰기 위함
export const app = initializeApp(firebaseConfig);
