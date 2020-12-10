import throwDomEl from '../utils/dom-emitter.mjs'

export default class Chart {
  constructor() {
    this.blockId = 'chart';
  }
  get template() {
    return `
    <section class="chart">
      <h2 class="game__title">График</h2>
    </section>`;
  }

  init() {
    this._render()
  }

  _render() {
    return throwDomEl(this.blockId, this.template);
  }
}