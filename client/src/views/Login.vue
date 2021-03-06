<template>
    <v-layout class="column mt-8">
      <v-flex class="xs6">
          <Panel title="Login">
            <form name="tab-tracker-form" autocomplete="off">
              <v-text-field
                label="Email"
                v-model="email"
              ></v-text-field>
                <br>
              <v-text-field
                label="Password"
                type="password"
                v-model="password"
              ></v-text-field>
            </form>
              <br>
              <div v-if="error">
                <span class="error">{{ error }}</span>
              </div>
              <br>
              <v-btn dark class="cyan" @click="login">Login</v-btn>
          </Panel>
      </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    ...mapActions(['setToken', 'setUser']),
    async login() {
      try {
          const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.setToken(response.data.token)
        this.setUser(response.data.user)
        this.$router.push({ name: 'Songs' })
      } catch(error) {
        this.error = error.response.data.error
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: #fff;
  padding: 5px;
  border-radius: 5px;
}

</style>
