import Filters from './filters.mjs'
import Chart from './chart.mjs'
import Table from './table/table.mjs'

export default class View {
  constructor(state) {
    this.state = state
  }

  _reset() {

  }

  init(isRerender) {
    const FilterView = new Filters(this.state.changeDateFrom)
    const ChartView = new Chart()
    const TableView = new Table(this.state.data, this.state.tableFields, this.state.dateFrom)

    FilterView.init(isRerender)
    ChartView.init(isRerender)
    TableView.init(isRerender)
  }
}