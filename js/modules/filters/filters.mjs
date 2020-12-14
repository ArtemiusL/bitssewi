import throwDomEl from '../../utils/dom-emitter.mjs'
import formatDate from '../../utils/formatDate.mjs'

export default class Filters {
  constructor(props) {
    this.blockId = 'filters';
    this.dateFrom = props.dateFrom
    this.dateTo = props.dateTo
    this.changeDate = props.changeDate
  }
  get template() {
    return `
    <section class="filters">
      <h2 class="filters__title">Filters</h2>
      <form class="filtersForm">
        <label for="date-from">
          Date from
          <input type="date" id='date-from' value="${formatDate(this.dateFrom)}">
        </label>
        <label for="date-to">
          Date to
          <input type="date" id="date-to" value="${formatDate(this.dateTo)}">
        </label>
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
    document.querySelector('#date-from').addEventListener('change', (evt) => {
      this.changeDate('_dateFrom', evt.target.value)
    })
    document.querySelector('#date-to').addEventListener('change', (evt) => {
      this.changeDate('_dateTo', evt.target.value)
    })
  }
}