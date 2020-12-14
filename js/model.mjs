export default class State {
  constructor(handleUpdate) {
    this._tableFields = ['day', 'clicks', 'impressions', 'leads', 'revenue'];
    this._dateFrom = new Date(0)
    this._dateTo = new Date()
    this.data = []
    this.filteredData = []
    this.handleUpdate = handleUpdate
    this.emit = this.emit.bind(this)
    this.changeDate = this.changeDate.bind(this)
    this._sortField = null
    this._isDesc = true
    this._activeChart = ''
  }

  get activeChart() {
    return this._activeChart;
  }

  get tableFields() {
    return this._tableFields;
  }

  get sortField() {
    return this._sortField;
  }

  get isDesc() {
    return this._isDesc;
  }

  emit(key, newValue) {
    this[key] = newValue
    this.handleUpdate()
  }

  changeDate(key, value) {
    this[key] = value
    this._updateFilteredData()
  }

  _updateFilteredData() {
    this.filteredData = this.data.filter(item => new Date(item.day) >= new Date(this._dateFrom) && new Date(item.day) <= new Date(this._dateTo))
    this.handleUpdate()
  }

  get dateFrom() {
    return this._dateFrom;
  }

  get dateTo() {
    return this._dateTo;
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