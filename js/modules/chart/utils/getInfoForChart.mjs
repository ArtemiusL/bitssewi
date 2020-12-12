export default (data, activeChart) => {
  const maxValue = data.reduce((prev, cur) => {
    return prev > cur[activeChart] ? prev : cur[activeChart]
  }, 0)
  const minValue = maxValue / 10
  const filler = new Array(10).fill('')
  const streaks = filler.map((item, indx) => Math.round(minValue * (indx + 1)))
  const chartColumnsValues = data.map(item => item[activeChart] * 100 / maxValue)

  return {
    minValue,
    maxValue,
    streaks,
    chartColumnsValues
  }
}