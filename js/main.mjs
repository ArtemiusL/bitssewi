import welcome from './test.mjs'
import Filters from './modules/filters.mjs'
import Chart from './modules/chart.mjs'
import Table from './modules/table/table.mjs'

fetch('../../data/data.json')
    .then(curData => curData.json())
    .then(nextData => {
      const FilterView = new Filters()
      const ChartView = new Chart()
      const TableView = new Table(nextData)

      FilterView.init()
      ChartView.init()
      TableView.init()
    })

console.log('welcome', welcome)