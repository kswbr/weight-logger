<template>
  <section class="recorderWrapper">
    <el-row >
      <el-col >
        <div class="recorder">
          <label>{{recorder.date}}</label>
          <el-input-number v-model="recorder.num" :precision="2" :step="0.1" :max="200"  ></el-input-number>
          <el-input class="comment" placeholder="comment" v-model="recorder.comment" ></el-input>
        </div>
      </el-col>
      <el-col >
        <el-button @click="() => this.save(recorder)" type="success">Save</el-button>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    targetLog: Object,
    save: Function
  },
  mounted () {
    if (this.targetLog) {
      this.recorder = Object.assign({},this.targetLog)
    }
  },
  data() {
    return {
      recorder: {
        id: null,
        num: 0.00,
        comment: "",
        date: moment().format('YYYY-MM-DD hh:mm:ss')
      },
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
  font-size:1.0em;
  margin-bottom:10px;
}
.recorder {
  margin-bottom:20px;
}

.comment {
  margin-top: 20px;
  width: 80vw;
}
</style>
