import throwDomEl from '../../utils/dom-emitter.mjs'
import TableItem from './tableItem.mjs'
import TableHead from './tableHead.mjs'

export default class Table {
  constructor(data, tableFields, dateFrom) {
    this.blockId = 'table';
    this.data = data
    this.tableFields = tableFields
    this.dateFrom = dateFrom
  }

  get template() {
    const items = this.data.slice(0, 7).map(item => new TableItem(item, this.tableFields).template).join('')
    const tableHead = new TableHead(this.tableFields).template;

    return `
    <section class="table-wrap">
      <h2 class="game__title">Таблица</h2>
      <ul class="table">
        ${tableHead}
        ${items}
      </ul>
    </section>`;
  }

  init(isNeedClear) {
    this._render(isNeedClear)
  }

  _render(isNeedClear) {
    return throwDomEl(this.blockId, this.template, isNeedClear);
  }
}