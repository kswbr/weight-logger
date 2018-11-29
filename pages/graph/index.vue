<template>
  <div class="contents">
    <buttons />
    <div class="graphWrapper">
      <line-chart class="graph" :chart-data="datacollection"></line-chart>
    </div>
  </div>
</template>

<script>
  import Buttons from '~/components/Buttons.vue'
  import LineChart from '~/components/LineChart.vue'

  export default {
    components: {
      Buttons,
      LineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    created () {
      this.$store.commit("fetch")
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        const logs = this.$store.state.logs
        const labels = logs.map((log) => {
          return log.date
        }).reverse()
        const data = logs.map((log) => {
          return log.num
        }).reverse()

        this.datacollection = {
          labels,
          datasets: [
            {
              label: 'weight',
              backgroundColor: '#f87979',
              data
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .graphWrapper {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: top;
    zoom:0.92;
  }
</style>

