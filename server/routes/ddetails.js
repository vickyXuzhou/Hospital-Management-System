const express = require("express");
const router = express.Router();
const DdetailsModel = require("../models/ddetails");

router.post("/docDetails", (req, res) => {
  DdetailsModel.create(req.body)
    .then((doctor) => res.json(doctor))
    .catch((err) => res.json(err));
});

module.exports = router;
