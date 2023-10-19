<!-- eslint-disable vue/no-mutating-props -->
<script>
export default {
  name: 'LoginAll',
  props: {
    isLogged: Boolean,
  },
  emits: ["toggleIsLogged", "setNickname"],
  data () {
    return {
      email: '',
      nickname: '',
      isError: false,
    }
  },
  methods: {
    handleSubmit() {
      if (this.email.length === 0) {
        this.email = this.emailField.trim();
      } else if (this.nicknameField.length !== 0) {
        if (this.nicknameField.trim().length === 0) {
          this.isError = true;
          return;
        } 

        this.isError = false;
        this.nickname = this.nicknameField.trim();
        this.$emit("setNickname", this.nickname);
        this.$emit("toggleIsLogged", true);
        this.$router.push('/MainPage')
      }
    }
  }
}
</script>

<template>
  <section className="container is-flex is-justify-content-center">
    <form @submit.prevent="handleSubmit" className="box mt-5">
      <h1 className="title is-3">You need to register</h1>

      <div className="field">
        <label className="label" htmlFor="user-email"> Email </label>

        <div className="control has-icons-left">
          <input
            type="email"
            id="user-email"
            name="email"
            className="input"
            placeholder="Enter your email"
            required
            autocomplete="off"
            v-model="emailField"
          />

          <span className="icon is-small is-left">
            <i className="material-icons">email</i>
          </span>
        </div>
      </div>

      <div v-if="email.length > 0" className="field">
        <label className="label" htmlFor="user-name"> Your Name </label>

        <div className="control has-icons-left">
          <input
            type="text"
            id="user-name"
            name="name"
            className="input"
            placeholder="Enter your name"
            required
            autocomplete="off"
            v-model="nicknameField"
          />

          <span className="icon is-small is-left">
            <i className="material-icons">person</i>
          </span>
        </div>

        <p v-if="isError" className="help is-danger">Use letters, digits and signs only</p>
      </div>

      <div className="field">
        <button type="submit" className="button is-primary">Login</button>
      </div>
    </form>
  </section>
</template>