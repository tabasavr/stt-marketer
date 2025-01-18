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

interface PriceHistory {
  id: number
  name: string
  history: PriceHistoryItem[]
}

interface PriceHistoryItem {
  sold_last_day: number
  buy_count: number
  sell_count: number
  high: number
  low: number
  last_price: number
  count_at_low: number
  timestamp: number
}

const history = ref<PriceHistory>({ id: 0, name: 'Loading...', history: [] })
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
    history.value = { id: 0, name: 'Loading...', history: [] }
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

  const lastPrices = history.value.history.map((item) => {
    // return item.LastPrice
    return {
      x: new Date(item.timestamp * 1000).toLocaleString(),
      y: item.last_price,
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
    <h1>{{ history.name }} price history</h1>
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
