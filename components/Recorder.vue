<template>
  <section class="recorderWrapper">
    <el-row >
      <el-col >
        <label>{{recorder.date}}</label>
        <el-input-number class="recorder" :value="recorder.num" @focus="focusNumber" @input="inputNumber" :precision="2" :step="0.1" :max="200"  ></el-input-number>
      </el-col>
      <el-col >
        <el-input class="comment" placeholder="comment" v-model="recorder.comment" ></el-input>
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
  methods: {
    inputNumber(e) {
      this.recorder.num = parseFloat(e)
    },
    focusNumber(e) {
      if (e.target.value == 0) {
        e.target.value = ''
      }
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
  margin-bottom: 20px;
}
</style>
