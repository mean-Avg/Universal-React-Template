const Test = require('../models/TestModel');

const TestController = {
  getTest: (req, res) => {
    Test.find({})
    .sort({_id: 1})
      .then(result => {
        res.json({ result });
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  },

  addTest: (req, res) => {
    var testData = new Test(req.body);
    testData
      .save()
      .then(item => {
        res.send('item saved to database');
      })
      .catch(err => {
        res.status(400).send(err.message);
      });
  },

  editTest: (req, res) => {
    Test.findOneAndUpdate({_id: req.params.id}, {test: req.body.test})
    .then(item=>{
      res.send(`${item} edited`)
    })
    .catch(err=>{
      res.status(500).send(err.message)
    })
  },

  deleteTest: (req, res) => {
    const id = req.params.id;
    Test.findByIdAndRemove(id)
      .then(item => {
        res.send('deleted');
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  },
};

module.exports = TestController;
