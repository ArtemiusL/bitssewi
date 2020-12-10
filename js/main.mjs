import welcome from './test.mjs'
import StateModule from './modules/state.mjs'
import ControllerModule from './modules/controller.mjs'
import View from './modules/view.mjs'

const Controller = new ControllerModule(StateModule, View);
Controller.init()

// fetch('../../data/data.json')
//     .then(curData => curData.json())
//     .then(nextData => {
//       const state = new StateModule()
//       const FilterView = new Filters(state.changeDateFrom)
//       const ChartView = new Chart()
//       const TableView = new Table(nextData, state.tableFields, state.dateFrom)

//       FilterView.init()
//       ChartView.init()
//       TableView.init()
//     })
