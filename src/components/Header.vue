<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-reserved-component-names -->
<script>
 export default {
    name: 'Header',
    props: {
      nickname: String,
    },
    emits: ["toggleIsLogged"],
    methods: {
      logout() {
        this.$emit("toggleIsLogged", false);
        this.$router.push('/login');
      }
  }
  }
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-item">
      <h2 class="is-size-4">Vue List Of Posts</h2>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <div class="mr-5 mb-2">
            <p>User: {{ this.nickname }}</p>
          </div>

          <a 
          @click="logout"
          class="button is-light"> Logout </a>
        </div>
      </div>
    </div>
  </nav>
</template>