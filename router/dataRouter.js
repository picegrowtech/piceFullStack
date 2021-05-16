const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const DisplayData = mongoose.model("displayData");

router.post("/create", (req, res) => {
  console.log(req.body);
  let dataValue = JSON.stringify(req.body);
  const displayData = new DisplayData({
    data: dataValue,
  });
  displayData
    .save()
    .then((user) =>
      res.json({
        message: "saved",
        secretID: user,
      })
    )
    .catch((err) => console.log(err));
});
//
//router.get(`/read/:id`, (req, res) => {
//  User.findOne({ _id: req.params.id })
//    .then((savedUser) => {
//      if (savedUser) res.send(JSON.parse(savedUser.data));
//    })
//    .catch((err) => res.json(err));
//});

router.get(`/displayData`, (req, res) => {
  DisplayData.find({"_id" : "60a0f8b46f1d872dec7ddcc3"}).then((savedUser) => {
    console.log( savedUser)
        if (savedUser) res.send(savedUser);
      })
      .catch((err) => res.json(err));
// console.log( DisplayData.find());
//
// let dataValue = JSON.stringify(req.body);
// console.log(dataValue);
// User.findByIdAndUpdate(
//   { _id: req.params.id },
//   { $set: { data: dataValue } }, // $set for string , $push for array
//   { new: true }
// ).exec((err, result) => {
//   if (err) {
//     res.send("err : " + err);
//   } else {
//     res.send("result :" + result);
//   }
// });
});
router.put(`/updateDisplayData`, (req, res) => {
  
 DisplayData.findByIdAndUpdate(
   { _id: req.body.id },
   { $set: { data: req.body.data } }, // $set for string , $push for array
   { new: true }
 ).exec((err, result) => {
   if (err) {
     res.send("err : " + err);
   } else {
     res.send(result);
   }
 });
});
module.exports = router;
