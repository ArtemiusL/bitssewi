import throwDomEl from '../../utils/dom-emitter.mjs'
import TableItem from './tableItem.mjs'
import TableHead from './tableHead.mjs'

export default class Table {
  constructor(props) {
    const sortField = props.sortField
    const sortedData = props.filteredData.sort((itemA, itemB) => props.isDesc ? itemA[sortField] - itemB[sortField] : itemB[sortField] - itemA[sortField])

    this.blockId = 'table';
    this.data = props.sortField ? sortedData : props.filteredData
    this.tableFields = props.tableFields
    this.dateFrom = props.dateFrom
    this.sortField = props.sortField
    this.changeSortField = props.changeSortField
    this.changeIsDesc = props.changeIsDesc
    this.isDesc = props.isDesc
  }

  get template() {
    const items = this.data.slice(0, 7).map(item => new TableItem(item, this.tableFields).template).join('')
    const tableHead = new TableHead(this.tableFields, this.sortField).template;

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
    this._bind()
  }

  _render(isNeedClear) {
    return throwDomEl(this.blockId, this.template, isNeedClear);
  }

  _bind() {
    document.querySelectorAll('.tableHead__column').forEach(item => item.addEventListener('click', (evt) => {
      if (evt.target.dataset.name === this.sortField) {
        this.changeIsDesc()
      } else {
        this.changeSortField(evt.target.dataset.name)
      }
    }))
  }
}