export default class Controller {
  constructor(model, view) {
    this._tableFields = ['day', 'clicks', 'impressions', 'leads', 'revenue'];
    this._dateFrom = 'initial'
    this._dateTo = ''
    this.model = model
    this.view = view
    this.viewClass = ''
    this.update = this.update.bind(this)
  }

  init() {
    this.state = new this.model(this.update)
    this.state.init()
    const View = this.view
    this.viewClass = new View(this.state).init()
  }

  update() {
    const View = this.view
    this.viewClass = new View(this.state).init(true)
  }
  
  updateData() {
    // обновить model 
  }
}