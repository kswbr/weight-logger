<template>
  <div class="recorder">
    <label>{{date}}</label>
    <el-input-number v-model="recorder" :precision="2" :step="0.1" :max="200"  ></el-input-number>
  </div>
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
