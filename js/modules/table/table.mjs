import throwDomEl from '../../utils/dom-emitter.mjs'

class TableItem {
  constructor(props) {
    this.props = props
    this.propsForView = {
      day: props.day,
      clicks: props.clicks,
      impressions: props.impressions
    }
  }
  
  get template() {
    console.log('this.amount', this.amount);
    const columns = Object.keys(this.propsForView)
    const content = columns.map(item => `
      <div class="table-column">
        ${this.propsForView[item]}
      </div>
    `).join('')

    return `
    <li class="table-item">
      ${content}
    </li>`
  }
}

class TableHead {
  constructor() {
    this.columns = ['day', 'clicks', 'impressions']
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
  constructor(data) {
    this.blockId = 'table';
    this.data = data
  }
  get template() {
    console.log('this.data', this.data);
    const items = this.data.slice(0, 7).map(item => new TableItem(item).template).join('')
    const tableHead = new TableHead().template;

    return `
    <section class="table-wrap">
      <h2 class="game__title">Таблица</h2>
      <ul class="table">
        ${tableHead}
        ${items}
      </ul>
    </section>`;
  }

  init() {
    this._render()
  }

  _render() {
    return throwDomEl(this.blockId, this.template);
  }
}