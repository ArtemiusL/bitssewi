export default class TableHead {
  constructor(tableFields, sortField, isDesc) {
    this.columns = tableFields
    this.sortField = sortField
    this.isDesc = isDesc
  }

  get template() {
    const columns = this.columns.map(item => `
      <div class="tableHead__column ${this.sortField === item ? 'isActive' : ''} ${this.isDesc && 'isDesc'}" data-name="${item}">
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