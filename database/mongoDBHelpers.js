const Model = require('./index.js');

const getListHelper = () => {
  return Model.find({});
};

const createHelper = (data) => {
  return Model.create(data);
}

const updateHelper = (target, data) => {
    return Model.findOneAndUpdate(target, data);
}

module.exports = {
  getListHelper,
  updateHelper,
  createHelper
}