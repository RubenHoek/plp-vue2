<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1"
        description="We'll never share your email with anyone else.">
        <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" placeholder="Enter password" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your name:" label-for="input-3">
        <b-form-input id="input-3" v-model="form.name" placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { auth, db } from '@/includes/firebase'

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
      show: true
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      let userCred = null;
      try {
        userCred = await auth.createUserWithEmailAndPassword(
          this.form.email, this.form.password,
        );
        console.log(userCred);
      } catch (error) {
        // ToDo: handle error
        return console.log(error);
      }

      try {
        db.collection("users").add({
          email: this.form.email,
          name: this.form.name,
        })
      } catch (error){
        // ToDo: handle error
        console.error("Error adding document: ", error);
      }

  },
  onReset(event) {
    event.preventDefault()
    // Reset our form values
    this.form.email = ''
    this.form.password = ''
    this.form.name = ''
    // Trick to reset/clear native browser form validation state
    this.show = false
    this.$nextTick(() => {
      this.show = true
    })
  }
}
}
</script>