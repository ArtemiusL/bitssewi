export default class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    this.viewClass = ''
    this.update = this.update.bind(this)
  }

  init() {
    this.state = new this.model(this.update)
    this.state.init()
    const View = this.view
    this.viewClass = new View(this.state)
    this.viewClass.init()
  }

  update() {
    this.viewClass.unmount()
    const View = this.view
    this.viewClass = new View(this.state)
    this.viewClass.init(true)
  }
}