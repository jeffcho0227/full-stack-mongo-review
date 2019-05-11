
const Helpers = require('../database/mongoDBHelpers.js');


const getList = (req, res) => {
  Helpers.getListHelper()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => res.status(404).send(err));
}

const create = (req, res) => {
  const {name, priority} = req.body;
  // console.log(priority);
  Helpers.createHelper({name, priority})
    .then(data => {
      res.status(201).send('data create')
    })
    .catch(err => res.status(404).send(err));
}

const update = (req, res) => {
  const {id} = req.params;
  const {name, priority} = req.body;
  console.log(req.body, 'update')
  Helpers.updateHelper({_id: id}, {name, priority})
    .then(data => res.status(202).send('data updated'))
    .catch(err => res.status(404).send(err));
}

module.exports = {
  getList, 
  create,
  update,
}