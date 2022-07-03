import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA8hYFKEdHESRfqNdZhHENism26eQB5T4A",
  authDomain: "ecommerce-coderh-65ccd.firebaseapp.com",
  projectId: "ecommerce-coderh-65ccd",
  storageBucket: "ecommerce-coderh-65ccd.appspot.com",
  messagingSenderId: "309273061987",
  appId: "1:309273061987:web:78d847da1b7741a39d2656"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const collectionProd = collection(db, "productos")