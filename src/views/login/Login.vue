<template>
  <div class="login">
    <loginSidebar></loginSidebar>
    <loginMain></loginMain>
  </div>
</template>

<script>
import loginSidebar from '../../components/login/loginSidebar.vue'
import loginMain from '../../components/login/loginMain.vue'
import { mapActions } from 'vuex'

export default {
  name: 'login',
  components: {
    loginSidebar,
    loginMain
  },
  created () {
    this.login({
      success: data => {
        console.log(data)
      }
    })
  },
  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>
