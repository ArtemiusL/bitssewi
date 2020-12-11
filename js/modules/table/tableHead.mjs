export default class TableHead {
  constructor(tableFields, sortField) {
    this.columns = tableFields
    this.sortField = sortField
  }

  get template() {
    const columns = this.columns.map(item => `
      <div class="tableHead__column ${this.sortField === item ? 'isActive' : ''}" data-name="${item}">
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