const Test = require('../models/TestModel');

const TestController = {
  getTest: (req, res) => {
    Test.find({})
      .then(result => {
        res.json({ result });
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  },

  addTest: (req, res) => {
    var testData = new Test(req.body);
    console.log(testData);
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
