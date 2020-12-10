export default class TableItem {
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