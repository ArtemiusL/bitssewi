import welcome from './test.mjs'
import Filters from './modules/filters.mjs'
import Chart from './modules/chart.mjs'
import Table from './modules/table/table.mjs'
import StateModule from './modules/state.mjs'


fetch('../../data/data.json')
    .then(curData => curData.json())
    .then(nextData => {
      const state = new StateModule()
      const FilterView = new Filters()
      const ChartView = new Chart()
      const TableView = new Table(nextData, state.tableFields)

      FilterView.init()
      ChartView.init()
      TableView.init()
    })

console.log('welcome', welcome)