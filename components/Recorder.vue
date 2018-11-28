<template>
  <section class="recorderWrapper">
    <el-row >
      <el-col >
        <div class="recorder">
          <label>{{date}}</label>
          <el-input-number v-model="recorder" :precision="2" :step="0.1" :max="200"  ></el-input-number>
        </div>
      </el-col>
      <el-col >
        <el-button type="success">Save</el-button>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    choiceData: Object
  },
  data() {
    return {
      recorder: 0,
      date: moment().format('YYYY-MM-DD hh:mm:ss')
    }
  }
}
</script>

<style scoped>
.recorderWrapper {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
label {
  display: block;
  color:#888;
  font-size:1.5em;
  margin-bottom:10px;
}
.recorder {
  margin-bottom:20px;
}
</style>
