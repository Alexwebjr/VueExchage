<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <td></td>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100" v-for="coin in assets" :key="coin.id">
        <td>
          <img class="w-6 h-6" :src="`https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`" :alt="coin.name">
        </td>
        <td>#{{coin.rank}}</td>
        <td>{{coin.name}} | {{coin.symbol}}</td>
        <td>{{dollarFilter(coin.priceUsd)}}</td>
        <td>{{dollarFilter(coin.marketCapUsd)}}</td>
        <td :class="coin.changePercent24Hr.includes('-')? 'text-red-600':'text-green-600'">{{percentFilter(coin.changePercent24Hr)}}</td>
        <td class="hidden sm:block"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import numeral from 'numeral'

export default {
  name: "PxAssetsTable",

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    dollarFilter(value){
        if(!value){
            return '$ 0'
        }
        return numeral(value).format('($ 0.00a)')
      },
    percentFilter(value){
        if(!value){
            return '0%'
        }
        return `${Number(value).toFixed(2)}%`
      }
    }
}
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
