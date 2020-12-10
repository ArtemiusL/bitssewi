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

  init(isNeedClear) {
    this._render(isNeedClear)
  }

  _render(isNeedClear) {
    return throwDomEl(this.blockId, this.template, isNeedClear);
  }
}