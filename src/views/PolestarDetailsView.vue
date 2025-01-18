<script setup lang="ts">
import { onMounted, ref, useTemplateRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js'

Chart.register(LineController, LineElement, CategoryScale, LinearScale, PointElement)

const route = useRoute()

const history = ref<{Timestamp: string, LastPrice: number}[]>([])
fetchHistory()

const canvas = useTemplateRef('canvas')
let currentChart: Chart<'line', unknown[]> | null = null

async function fetchHistory() {
  const historyResponse = await fetch('https://stt.rsbat.dev/history?id=' + route.params.id)
  history.value = await historyResponse.json()
  updateChart()
}

watch(
  () => route.params.id,
  () => {
    history.value = []
    fetchHistory()
  },
)

onMounted(() => {
  updateChart()
})

function updateChart() {
  if (!canvas.value) {
    console.log('Canvas not mounted, skipping')
    return
  }

  if (currentChart != null) {
    currentChart.destroy()
    currentChart = null
  }

  const lastPrices = history.value.map((item) => {
    // return item.LastPrice
    return {
      x: item.Timestamp,
      y: item.LastPrice,
    }
  })

  console.log(lastPrices)

  const ctx = canvas.value.getContext('2d')
  if (ctx) {
    currentChart = new Chart(ctx, {
      data: {
        datasets: [
          {
            type: 'line',
            label: 'Last sale price',
            data: lastPrices,
            fill: false,
          },
        ],
      },
    })
  }
}
</script>

<template>
  <main>
    <h1>Polestar {{ $route.params.id }} details</h1>
    <div id="canvas-container">
      <canvas ref="canvas" />
    </div>
  </main>
</template>

<style lang="css" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 0;
}

#canvas-container {
  flex: 1;
}
</style>
