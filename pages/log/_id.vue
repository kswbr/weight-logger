<template>
  <div class="contents">
    <buttons />
    <recorder :save=this.save :targetLog=log />
  </div>
</template>

<script>
import Buttons from '~/components/Buttons.vue'
import Recorder from '~/components/Recorder.vue'

export default {
  components: {
    Recorder,
    Buttons
  },
  created () {
    this.$store.commit("fetch")
  },
  computed: {
    log () {
      const id = this.$route.params.id
      return this.$store.state.logs.find((log) => {
        return log.id === id
      })
    }
  },
  methods: {
    save (log) {
      if (log.num != 0) {
        this.$store.commit("update", log)
        this.$router.push('/graph')
      }
    }
  }
}
</script>
