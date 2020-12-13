export default class ChartColumn {
  constructor(value, width, margin) {
    this.value = value
    this.width = width
    this.margin = margin
  }

  get template() {    
    return `
      <div class="chartContent__column" style="height: ${this.value}% ; width: ${this.width}%; margin-right: ${this.margin}%; margin-left: ${this.margin}%;">
      </div>
    `
  }
}