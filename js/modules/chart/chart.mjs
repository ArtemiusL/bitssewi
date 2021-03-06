import throwDomEl from '../../utils/dom-emitter.mjs'
import getInfoForChart from './utils/getInfoForChart.mjs'
import ChartColumn from './chartColumn.mjs'
import { DEFAULT_CHART_POST_AMOUNT } from '../../constants.mjs'

export default class Chart {
  constructor(props) {
    this.blockId = 'chart';
    this.tableFields = props.tableFields.filter(item => item !== 'day')
    this.data = props.filteredData.slice(0, DEFAULT_CHART_POST_AMOUNT)
    this.activeChart = props.activeChart || this.tableFields[0]
    this.emit = props.emit
  }
  get template() {
    const chartData = getInfoForChart(this.data, this.activeChart)
    const verticals = chartData.streaks.map((item) =>  `<li class="markingVertical__line">${item}</li>`).join('')
    const horizontals = this.data.map((item, index) =>  `<li class="markingHorizontal__line">${item.day}</li>`).join('')

    const chartColumns = chartData.chartColumnsValues.map((item, indx, arr) => {
      const unit = 100 / arr.length;
      const width = unit * 0.6 // 1 - (0.2 * 2) = 0.6
      const margin = unit * 0.2 // 1 - 0.6 = 0.4 => 0.4/2 = 0.2 side margins


      return new ChartColumn(item, width, margin).template
    }).join('')


    return `
    <section class="chart">
      <h2 class="chart__title">Chart</h2>
      <div class="chartContent">
        ${chartColumns}
        <div class="chartMarking">
          <ul class="markingVertical">
            ${verticals}
          </ul>
          <ul class="markingHorizontal">
            ${horizontals}
          </ul>
        </div>  
      </div>
      <h2 class="chartMetrik__title">Chart metric</h2>
      <form>
        <select id="chartMetrik__select" name="chartMetrik">
        ${this.tableFields.map(item => `<option value="${item}" ${this.activeChart === item ? 'selected' : ''}>
          ${item}
        </option>`)}
        </select>
      </form>
    </section>`;
  }

  init(isNeedClear) {
    this._render(isNeedClear)
    this._bind()
  }

  unmount() {
    this.chartMetrikSelect.removeEventListener('change', this._handleChartMetrikChange)
  }

  _render(isNeedClear) {
    return throwDomEl(this.blockId, this.template, isNeedClear);
  }

  _handleChartMetrikChange = (evt) => {
    this.emit('_activeChart', evt.target.value)
  }

  _bind() {
    this.chartMetrikSelect = document.querySelector('#chartMetrik__select')
    this.chartMetrikSelect.addEventListener('change', this._handleChartMetrikChange)
  }
}