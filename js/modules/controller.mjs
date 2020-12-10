export default class Controller {
  constructor(state, view) {
    this._tableFields = ['day', 'clicks', 'impressions', 'leads', 'revenue'];
    this._dateFrom = 'initial'
    this._dateTo = ''
    this.state = state
    this.view = view
    this.viewClass = ''
    this.update = this.update.bind(this)
  }

  init() {
    this.stateReal = new this.state(this.update)
    this.stateReal.init()
    const View = this.view
    console.log('this.view', this.view);
    this.viewClass = new View(this.stateReal).init()
  }

  update() {
    console.log('update', this);
    const View = this.view
    console.log('update view', View);
    this.viewClass = new View(this.stateReal).init(true)
  }
  
  updateData() {
    // обновить model 
  }
}