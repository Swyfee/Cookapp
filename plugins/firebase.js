import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
	    const config = {
		        apiKey: "AIzaSyACNEgOSYfVXtDy07fsEByVxIcVKd2zQxc",
		        authDomain: "cookapp-59408.firebaseapp.com",
		        databaseURL: "https://cookapp-59408.firebaseio.com",
		        projectId: "cookapp-59408",
		        storageBucket: "cookapp-59408.appspot.com",
		        messagingSenderId: "630539503028",
		        appId: "1:630539503028:web:04c5cc3e50acb45c0a1ee1",
		        measurementId: "G-KEHLGWEN7N"
		        }
	    firebase.initializeApp(config)
	    firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
export {fireDb}
