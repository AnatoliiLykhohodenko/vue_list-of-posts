<script>
  export default {
    name: 'App',
    data() {
      return {
        nickname: '',
        isLogged: false,
      }
    },
    methods: {
      setNickname(nickname) {
        this.nickname = nickname;
      },
      toggleIsLogged(isLogged) {
        this.isLogged = isLogged;
      },
    },
  }
</script>

<template>
  <router-view
   :nickname="nickname"
   @setNickname="setNickname"
   :isLogged="isLogged"
   @toggleIsLogged="toggleIsLogged"
  >
  </router-view>
</template>