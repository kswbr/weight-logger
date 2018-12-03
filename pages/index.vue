<template>
  <div class="contents">
    <buttons />
    <recorder :save=this.save />
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
  methods: {
    save (log) {
      if (log.num != 0) {
        this.$store.commit("add", log)
        this.$router.push('/graph')
      }
    }
  }
}
</script>

