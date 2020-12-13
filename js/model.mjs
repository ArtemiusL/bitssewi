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
    this.changeSortField = this.changeSortField.bind(this)
    this.changeIsDesc = this.changeIsDesc.bind(this)
    this.changeActiveChart = this.changeActiveChart.bind(this)
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

  changeActiveChart(value) {
    this._activeChart = value
    this.handleUpdate()
  }

  changeIsDesc(value) {
    if (value) {
      this._isDesc = true
    } else {
      this._isDesc = !this._isDesc
    }

    this.handleUpdate()
  }

  changeSortField(value) {
    this._sortField = value
    this.handleUpdate()
  }

  changeDateFrom(value) {
    this._dateFrom = value
    this._updateFilteredData()
  }

  changeDateTo(value) {
    this._dateTo = value
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