<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  data () {
    return{
      options: {
        scales:{
          yAxes: [{
            ticks: {
              min: 60,
              max: 90,
            },
          }],
        }
      },
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
