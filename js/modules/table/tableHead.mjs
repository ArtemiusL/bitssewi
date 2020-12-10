export default class TableHead {
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