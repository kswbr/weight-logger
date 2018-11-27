<template>
  <div class="contents">
    <section class="tabWrapper">
      <el-row>
        <el-button type="default" icon="el-icon-edit"></el-button>
        <el-button type="default" >Graph</el-button>
      </el-row>
    </section>
    <section class="recorderWrapper">
      <el-row >
        <el-col >
          <recorder />
        </el-col>
        <el-col >
          <el-button type="success">Save</el-button>
        </el-col>
      </el-row>
    </section>
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
import Recorder from '~/components/Recorder.vue'
import LogBar from '~/components/LogBar.vue'

export default {
  components: {
    Recorder,
    LogBar
  }
}
</script>

<style scoped>
.tabWrapper {
  margin-top: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.recorderWrapper {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.logWrapper {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: top;
}

</style>

