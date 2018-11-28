<template>
  <el-alert class="log" type="info"  @close="remove(log)" >
    <el-button class="logButton" type="text" @click="() => $router.push('/log/' + log.id)"  >
      <span class="date">{{log.date}}</span><span class="weight">{{log.num}}</span>
    </el-button>
  </el-alert>
</template>

<script>
export default {
  props: {
    log: Object,
  },
  methods: {
    remove (log) {
      if (window.confirm('Remove ok ?')) {
        this.$store.commit('remove', log)
      }
    }
  }
}
</script>

<style scoped>
.log{
  width:300px;
  margin: 10px 0 ;
}
.date {
  font-size:0.8em;
}
.weight {
  margin: 10px 0 0 40px;
}
.logButton {
  margin: inherit;
  padding: inherit;
  color: inherit;
}

</style>
