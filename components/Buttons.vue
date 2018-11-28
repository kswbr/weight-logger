<template>
  <section class="tabWrapper">
    <el-row>
      <el-button  type="default" @click="() => $router.push('/')">Record</el-button>
      <el-button type="default" @click="() => $router.push('/log')" >Log</el-button>
      <el-button type="default" @click="() => $router.push('/graph')">Graph</el-button>
    </el-row>
  </section>
</template>

<style scoped>
.tabWrapper {
  margin-top: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

