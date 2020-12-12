import throwDomEl from '../../utils/dom-emitter.mjs'

const getForChart = (data, activeChart) => {
  const maxValue = data.reduce((prev, cur) => {
    return prev > cur[activeChart] ? prev : cur[activeChart]
  }, 0)
  const minValue = maxValue / 10
  const filler = new Array(10).fill('')
  const streaks = filler.map((item, indx) => Math.round(minValue * (indx + 1)))
  const chartColumnsValues = data.map(item => item[activeChart] * 100 / maxValue)

  return {
    minValue,
    maxValue,
    streaks,
    chartColumnsValues
  }
}

export default class Chart {
  constructor(props) {
    this.blockId = 'chart';
    this.tableFields = props.tableFields.filter(item => item !== 'day')
    this.data = props.filteredData.slice(0, 10)
    this.activeChart = props.activeChart || this.tableFields[0]
    this.changeActiveChart = props.changeActiveChart
  }
  get template() {
    const chartData = getForChart(this.data, this.activeChart)
    const count = new Array(10).fill('')
    const verticals = chartData.streaks.map((item) =>  `<li class="markingVertical__line">${item}</li>`).join('')
    const horizontals = this.data.map((item, index) =>  `<li class="markingHorizontal__line">${item.day}</li>`).join('')

    const chartColumns = chartData.chartColumnsValues.map((item,indx, arr) => {
      const unit = 100 / arr.length;
      const width = unit * 0.6
      const margin = unit * 0.2


      return `
      <div class="chartContent__column" style="height: ${item}% ; width: ${width}%; margin-right: ${margin}%; margin-left: ${margin}%;">
      </div>
    `
    }).join('')


    return `
    <section class="chart">
      <h2 class="chart__title">График</h2>
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

  _render(isNeedClear) {
    return throwDomEl(this.blockId, this.template, isNeedClear);
  }

  _bind() {
    document.querySelector('#chartMetrik__select').addEventListener('change', (evt) => {
      this.changeActiveChart(evt.target.value)
    })
  }
}