<template>
  <div class="contents">
    <buttons />
    <section class="logWrapper">
      <el-row >
        <el-col>
          <log-bar v-for="log in logs" :key="log.id" :log=log />
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
import Buttons from '~/components/Buttons.vue'
import LogBar from '~/components/LogBar.vue'

export default {
  components: {
    Buttons,
    LogBar
  },
  created () {
    this.$store.commit("fetch")
  },
  computed: {
    logs () { return this.$store.state.logs }
  }
}
</script>

<style scoped>
.logWrapper {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: top;
}
</style>

