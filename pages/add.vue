<template>
  <section class="container">
<div>
<v-form
   ref="form"
   lazy-validation
 >
      <v-text-field
        v-model="title"
        required
        label="Title"
        type="text"
        outlined
      />
      <v-text-field
        v-model="description"
        required
        label="Description"
        type="text"
        outlined
      />
      <v-text-field
        v-model="ingredient"
        required
        label="Ingredient"
        type="text"
        outlined
      />
      <v-text-field
        v-model="step"
        label="Step"
        type="text"
        outlined
      /></v-form>
<div>
      <h2>
        Add the receipe
      </h2>
      <div>
        <button @click="saveReceipe" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">Clic to add</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </div>

</div>
</section>
</template>


<script>
  import {fireDb} from '~/plugins/firebase.js'
  export default {
      layout: 'default',
    data() {
  return {
      title: "",
      description: "",
      ingredient: "",
      step: "",
    writeSuccessful: false,
  }
},
    methods: {
      async saveReceipe() {
        const ref = fireDb.collection("receipe").doc(this.title)
        const document = {
          description: this.description,
          ingredient: this.ingredient,
          step: this.step,
        }
        try {
          await ref.set(document)
        } catch (e) {
          // TODO: error handling
          console.error(e)
        }
        this.writeSuccessful = true
      },
    }
  }
</script>

<style>
  .container {
    min-height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>