const Test = require('../models/Test');

const TestController = {

  getTest: (req, res) => {
    Test.find({}, { _id: 0 })
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
};

module.exports = TestController;
