import throwDomEl from '../../utils/dom-emitter.mjs'

class TableItem {
  constructor(props, tableFields) {
    this.columns = tableFields
    this.data = props
  }
  
  get template() {
    const content = this.columns.map(item => `
      <div class="table-column">
        ${this.data[item]}
      </div>
    `).join('')

    return `
    <li class="table-item">
      ${content}
    </li>`
  }
}

class TableHead {
  constructor(tableFields) {
    this.columns = tableFields
  }

  get template() {
    const columns = this.columns.map(item => `
      <div class="tableHead__column">
        ${item}
      </div>
    `).join('')
 
    
    return `
      <section class="table-head">
        ${columns}
      </section>
    `
  }
}

export default class Table {
  constructor(data, tableFields, dateFrom) {
    this.blockId = 'table';
    this.data = data
    this.tableFields = tableFields
    this.dateFrom = dateFrom
  }

  get template() {
    console.log('this.data', this.data);
    const items = this.data.slice(0, 7).map(item => new TableItem(item, this.tableFields).template).join('')
    const tableHead = new TableHead(this.tableFields).template;

    return `
    <section class="table-wrap">
      <h2 class="game__title">Таблица</h2>
      <ul class="table">
        ${tableHead}
        ${items}
      </ul>
      <h3>
        DateFrom: ${this.dateFrom}
      </h3>
    </section>`;
  }

  init(isNeedClear) {
    this._render(isNeedClear)
  }

  _render(isNeedClear) {
    return throwDomEl(this.blockId, this.template, isNeedClear);
  }
}