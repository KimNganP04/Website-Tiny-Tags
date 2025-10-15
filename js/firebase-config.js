// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiXnYvACDsrVFok3Qoqa28hoCaEUywkkU",
  authDomain: "tiny-tags.firebaseapp.com",
  databaseURL: "https://tiny-tags-default-rtdb.firebaseio.com",
  projectId: "tiny-tags",
  storageBucket: "tiny-tags.firebasestorage.app",
  messagingSenderId: "1071908349765",
  appId: "1:1071908349765:web:7890592f4e320b8aa5402c",
  measurementId: "G-MYGSXPKXFK"
};

// Khởi tạo app & export các service cần dùng
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);     // Firestore (tài liệu)
const auth = getAuth(app);        // Authentication
const storage = getStorage(app);  // Storage (nếu cần upload ảnh)

export { app, db, auth, storage };
