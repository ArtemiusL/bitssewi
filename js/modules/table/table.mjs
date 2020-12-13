import throwDomEl from '../../utils/dom-emitter.mjs'
import TableItem from './tableItem.mjs'
import TableHead from './tableHead.mjs'
import { DEFAULT_POST_AMOUNT } from '../../constants.mjs'

export default class Table {
  constructor(props) {
    const sortField = props.sortField
    const filteredData = props.filteredData.slice()
    const sortedData = filteredData.sort((itemA, itemB) => props.isDesc ? itemB[sortField] - itemA[sortField] : itemA[sortField] - itemB[sortField])

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
    const items = this.data.slice(0, DEFAULT_POST_AMOUNT).map(item => new TableItem(item, this.tableFields).template).join('')
    const tableHead = new TableHead(this.tableFields, this.sortField, this.isDesc).template;

    return `
      <section class="table-wrap">
        <h2 class="table__title">Table</h2>
        <ul class="table">
          ${tableHead}
          ${items}
        </ul>
      </section>
    `;
  }

  init(isNeedClear) {
    this._render(isNeedClear)
    this._bind(isNeedClear)
  }

  unmount() {
    this.tableColumnsRef.forEach(item => item.removeEventListener('click', this._handleTableColumnClick))
  }

  _render(isNeedClear) {
    return throwDomEl(this.blockId, this.template, isNeedClear);
  }

  _handleTableColumnClick = (evt) => {
    if (evt.target.dataset.name === this.sortField) {
      this.changeIsDesc()
    } else {
      this.changeSortField(evt.target.dataset.name)
      this.changeIsDesc(true)
    }
  }

  _bind() {   
    this.tableColumnsRef = document.querySelectorAll('.tableHead__column')
    this.tableColumnsRef.forEach(item => item.addEventListener('click', this._handleTableColumnClick))
  }
}