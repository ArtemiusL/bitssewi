export default class State {
  constructor() {
    this._tableFields = ['day', 'clicks', 'impressions', 'leads', 'revenue'];
  }

  get tableFields() {
    return this._tableFields;
  }
}