export default class State {
  constructor(handleUpdate) {
    this._tableFields = ['day', 'clicks', 'impressions', 'leads', 'revenue'];
    this._dateFrom = new Date(0)
    this._dateTo = new Date()
    this.data = []
    this.filteredData = []
    this.handleUpdate = handleUpdate
    this.changeDateFrom = this.changeDateFrom.bind(this)
    this.changeDateTo = this.changeDateTo.bind(this)

  }

  get tableFields() {
    return this._tableFields;
  }

  changeDateFrom(value) {
    this._dateFrom = value
    console.log('this._dateFrom', this._dateFrom);
    this.filteredData = this.data.filter(item => new Date(item.day) >= new Date(this._dateFrom) && new Date(item.day) <= new Date(this._dateTo))
    console.log('this.filteredData', this.filteredData);
    this.handleUpdate()
  }

  changeDateTo(value) {
    this._dateTo = value
    console.log('this._dateFrom', this._dateTo);
    this.filteredData = this.data.filter(item => new Date(item.day) >= new Date(this._dateFrom) && new Date(item.day) <= new Date(this._dateTo))
    console.log('this.filteredData', this.filteredData);
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
        this.filteredData = nextData
        this.handleUpdate()
      })
  }
}