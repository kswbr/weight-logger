<template>
  <div class="contents">
    <buttons />
    <section class="logWrapper">
      <el-row >
        <el-col >
          <log-bar />
          <log-bar />
          <log-bar />
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

