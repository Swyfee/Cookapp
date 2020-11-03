<template>
  <section class="container">
<div>
      <h2>
        Write to Firestore.
      </h2>
      <div>
        <button @click="writeToFirestore" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </div>


  <div>
  <h2>
    Read from Firestore.
  </h2>
  <div>
    <button @click="readFromFirestore" :disabled="readSuccessful">
      <span v-if="!readSuccessful">Read now</span>
      <span v-else>Successful!</span>
    </button>
    <p>{{text}}</p>
  </div>
  </div>


  <div>
  <h2>
    Delete from Firestore.
  </h2>
  <div>
    <button @click="deleteFromFirestore" :disabled="deleteSuccessful">
      <span v-if="!deleteSuccessful">Delete now</span>
      <span v-else>Successful!</span>
    </button>
  </div>

</div>
</section>
</template>
<script>
  import {fireDb} from '~/plugins/firebase.js'
  export default {
    data() {
  return {
    writeSuccessful: false,
    readSuccessful: false,
    deleteSuccessful: false,
    text: ""
  }
},
    methods: {
  async readFromFirestore() {
  const ref = fireDb.collection('receipe')
  let snap
  try {
    snap = await ref.get()
    } catch (e) {
    // TODO: error handling
      console.error(e)
    }
    this.text = snap.data().text
    this.readSuccessful = true
  },

      async writeToFirestore() {
        const ref = fireDb.collection("receipe").doc("canarde")
        const document = {
          text: "Il faut une canarde"
        }
        try {
          await ref.set(document)
        } catch (e) {
          // TODO: error handling
          console.error(e)
        }
        this.writeSuccessful = true
      },

      async deleteFromFirestore(){
        const ref = fireDb.collection("receipe").doc('canard')
        try {
          await ref.delete(document)
        } catch (e) {
          console.error(e)
        }
        this.deleteSuccessful = true
      }
    }
  }
</script>
<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>