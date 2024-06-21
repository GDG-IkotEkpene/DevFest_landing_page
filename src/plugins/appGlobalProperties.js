// Toastify
import 'toastify-js/src/toastify.css'
import toastify from 'toastify-js'

// / Import Firebase and Firestore
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import firebaseApp from '@/https/firebase' // Import your Firebase configuration file

// Initialize Firestore
const firestore = getFirestore(firebaseApp)

const setupGlobalProperties = (app) => {
  app.config.globalProperties.$toastify = toastify
  app.config.globalProperties.$firestore = firestore
  app.config.globalProperties.$getDocs = getDocs
  app.config.globalProperties.$collection = collection
}

export default setupGlobalProperties