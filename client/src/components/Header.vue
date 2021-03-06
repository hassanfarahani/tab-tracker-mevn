<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title>
        <v-btn elevation="0" dark class="cyan">
          <router-link class="btn-router" :to="{name: 'Songs'}">TabTracker</router-link>
      </v-btn>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn elevation="0" dark class="cyan">
        <router-link class="btn-router" :to="{name: 'Songs'}">Browse</router-link>
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!isUserLoggedIn" elevation="0" dark class="cyan">
          <router-link class="btn-router" :to="{name: 'Login'}">Login</router-link>
      </v-btn>
      <v-btn v-if="!isUserLoggedIn" elevation="0" dark class="cyan">
          <router-link class="btn-router" :to="{name: 'Register'}">Sign Up</router-link>
      </v-btn>
      <v-btn @click="logout" v-if="isUserLoggedIn" elevation="0" dark class="cyan">
          Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['isUserLoggedIn'])
  },
  methods: {
    ...mapActions(['setToken', 'setUser']),
    logout() {
      this.setToken(null)
      this.setUser(null)
      this.$router.push({name: 'Songs'})
    }
  }

}
</script>

<style scoped>
.btn-router {
    text-decoration: none;
    color: #fff;
}
</style>
