var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const telephoneDirectoryController = require("../models/telephoneDirectoryModel");

router.post("/add-phone", async (req, res) => {
  data = req.body;
  data.telephone_id = uuidv4();
  telephoneDirectoryController.create(data, (err, phoneResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: phoneResponse,
    });
  });
});

router.post("/update-phone", (req, res) => {
  let data = req.body;
  telephoneDirectoryController.findOneAndUpdate(
    { telephone_id: req.body.telephone_id },
    data,
    (err, updatedPhone) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedPhone,
      });
    }
  );
});

router.get("/find-phone/:id", (req, res) => {
  telephoneDirectoryController.find(
    { telephone_id: req.params.id },
    (err, phoneDetails) => {
      if (err) {
        return res.send({ response: err });
      }
      res.json({
        response: phoneDetails,
      });
    }
  );
});

router.post("/delete-phone", (req, res) => {
  telephoneDirectoryController.findOneAndRemove(
    { telephone_id: req.body.telephone_id },
    (err, deletedPhone) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedPhone,
      });
    }
  );
});

router.get("/find-all-phones", (req, res) => {
  telephoneDirectoryController.find({}, (err, allPhoneDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPhoneDetails,
    });
  });
});

module.exports = router;
