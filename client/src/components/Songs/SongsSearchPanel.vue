<template>
  <Panel title="Search">
      <v-text-field
        label="Search by song title, artist, album, or genre"
        v-model="search"
      ></v-text-field>
  </Panel>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {

    }
  },
  computed: {
    search: {
      get() {
        return this.$route.query.search
      },
      set: _.debounce(async function (value) {
        this.$router.replace({
          query: {
            search: value
          }
        })
      }, 700)
    }
  }
}

// set: this.$router.push({ name: 'Songs', query: { search: value }})
</script>

<style scoped>

</style>