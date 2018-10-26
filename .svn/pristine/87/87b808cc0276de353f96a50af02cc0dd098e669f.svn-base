<template>
  <div />
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'ZMessage',
  data () {
    return {
      msg: null
    }
  },
  computed: {
    ...mapState({
      message: state => state.MESSAGE_STATUS
    })
  },
  methods: {
    success (content) {
      this.clearMsg()
      this.$Message.success(content)
    },
    error (content) {
      this.clearMsg()
      this.$Message.error(content)
    },
    warn (content) {
      this.clearMsg()
      this.$Message.warning(content)
    },
    info (content) {
      this.clearMsg()
      this.$Message.info(content)
    },
    pending (content) {
      this.msg = null
      this.msg = this.$Message.loading({
        content,
        duration: 0
      })
    },
    clearMsg () {
      setTimeout(this.msg, 0)
    }
  },
  watch: {
    message (msg) {
      console.log(msg, 'watch')
      if (msg.type && msg.content) {
        this[msg.type](msg.content)
      }
    }
  }
}
</script>
