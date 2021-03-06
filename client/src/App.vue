<template>
  <v-app>
    <v-app-bar app>
      <Header />
    </v-app-bar>
    <v-container>
      <v-main>
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }

};
</script>

<style>
.centerContent {
  text-align: center;
}
</style>