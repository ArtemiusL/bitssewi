import throwDomEl from '../utils/dom-emitter.mjs'

export default class Filters {
  constructor() {
    this.blockId = 'filters';
  }
  get template() {
    return `
    <section class="filters">
      <h2 class="game__title">Фильтры</h2>
    </section>`;
  }

  init() {
    this._render()
  }

  _render() {
    return throwDomEl(this.blockId, this.template);
  }
}