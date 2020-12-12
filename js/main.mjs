import Model from './model.mjs'
import ControllerModule from './controller.mjs'
import View from './view.mjs'

const Controller = new ControllerModule(Model, View);
Controller.init()
