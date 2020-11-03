# PLUGINS

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains Javascript plugins that you want to run before mounting the root Vue.js application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/plugins).

import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
	    const config = {
		        #api credentials
		        }
	    firebase.initializeApp(config)
	    firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
export {fireDb}
