import throwDomEl from '../utils/dom-emitter.mjs'

export default class Filters {
  constructor(changeDateFrom, changeDateTo) {
    this.blockId = 'filters';
    this.changeDateFrom = changeDateFrom
    this.changeDateTo = changeDateTo
  }
  get template() {
    return `
    <section class="filters">
      <h2 class="game__title">Фильтры</h2>
      <form class="filtersForm">
        <label for="date-from">
          Date from
          <input type="date" id='date-from'>
        </label>
        <label for="date-to">
          Date to
          <input type="date" id='date-to'>
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
      this.changeDateFrom(evt.target.value)
    })
    document.querySelector('#date-to').addEventListener('change', (evt) => {
      this.changeDateTo(evt.target.value)
    })
  }
}