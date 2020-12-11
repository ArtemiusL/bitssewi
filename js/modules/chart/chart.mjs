import throwDomEl from '../../utils/dom-emitter.mjs'

export default class Chart {
  constructor() {
    this.blockId = 'chart';
  }
  get template() {
    const verticalLine = `<li class="markingVertical__line"></li>`
    const count = new Array(10).fill('')
    const verticals = count.map((item, index) =>  `<li class="markingVertical__line">${index + 1}</li>`).join('')
    const horizontals = count.map((item, index) =>  `<li class="markingHorizontal__line">${index + 1}</li>`).join('')

    return `
    <section class="chart">
      <h2 class="game__title">График</h2>
      <div class="chartContent">
        <div class="chartMarking">
          <ul class="markingVertical">
            ${verticals}
          </ul>
          <ul class="markingHorizontal">
            ${horizontals}
          </ul>
        </div>  
      </div>
    </section>`;
  }

  init(isNeedClear) {
    this._render(isNeedClear)
  }

  _render(isNeedClear) {
    return throwDomEl(this.blockId, this.template, isNeedClear);
  }
}