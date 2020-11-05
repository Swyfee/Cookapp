# PLUGINS

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains Javascript plugins that you want to run before mounting the root Vue.js application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/plugins).
<br/>;
import firebase from 'firebase/app'<br/>;
import 'firebase/firestore'<br/>;
if (!firebase.apps.length) {<br/>;
	    const config = {<br/>;
		        #api credentials<br/>;
		        }<br/>;
	    firebase.initializeApp(config)<br/>;
	    firebase.firestore().settings({timestampsInSnapshots: true})<br/>;
}<br/>;
const fireDb = firebase.firestore()<br/>;
export {fireDb}<br/>;
