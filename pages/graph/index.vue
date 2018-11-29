  <div class="contents">
    <el-slider v-model="data1" :min="0" :max="100" />
    <el-slider v-model="data2" :min="0" :max="100" />
  </div>
</template>

<script>
import VueCharts from 'vue-chartjs'
import {Line, mixins} from 'vue-chartjs'
import Buttons from '~/components/Buttons.vue'

export default {
  components: {
    Buttons
  },
  mixins: [Line, mixins.reactiveData],
  data: function() {
    return {
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 200,
              }
            },
          ]
        },
      },
    }
  },
  mounted: function() {
    this.chartData = {
      datasets: [
        {
          label: 'weight',
          data: [100,200,100,120],
        },
      ],
    }
  }
}
</script>


