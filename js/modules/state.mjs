export default class State {
  constructor(handleUpdate) {
    this._tableFields = ['day', 'clicks', 'impressions', 'leads', 'revenue'];
    this._dateFrom = 'initial'
    this._dateTo = ''
    this.data = []
    this.handleUpdate = handleUpdate
    this.changeDateFrom = this.changeDateFrom.bind(this)
  }

  get tableFields() {
    return this._tableFields;
  }

  changeDateFrom(value) {
    this._dateFrom = value
    console.log('changeDateFrom',this._dateFrom );
    this.handleUpdate()
  }

  get dateFrom() {
    return this._dateFrom;
  }

  init() {
    fetch('../../data/data.json')
      .then(curData => curData.json())
      .then(nextData => {
        this.data = nextData
        this.handleUpdate()
      })
  }
}