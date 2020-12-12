import Filters from './modules/filters.mjs'
import Chart from './modules/chart/chart.mjs'
import Table from './modules/table/table.mjs'

export default class View {
  constructor(state) {
    this.state = state
  }

  unmount() {
    this.tableView.unmount()
    this.chartView.unmount()
  }

  init(isRerender) {
    if (isRerender) {
      this.tableView = new Table(this.state)
      this.chartView = new Chart(this.state)
      this.chartView.init(isRerender)
      this.tableView.init(isRerender)
    } else {
      this.filterView = new Filters(this.state.changeDateFrom, this.state.changeDateTo, this.state.dateFrom, this.state.dateTo)
      this.chartView = new Chart(this.state)
      this.tableView = new Table(this.state)
  
      this.filterView.init()
      this.chartView.init()
      this.tableView.init(isRerender)
    }
  }
}