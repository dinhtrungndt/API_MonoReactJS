var express = require("express");
var router = express.Router();
var modelLocationP = require("../models/localtionPlanning");

// lấy danh sách locationP
// http://localhost:3000/locationP/get-locationP
router.get("/get-locationP", async function (req, res) {
  var Data = await modelLocationP.find();
  res.json(Data);
});

//  Thêm danh sách locationP
// http://localhost:3000/locationP/add-locationP
router.post("/add-locationP", async function (req, res, next) {
  try {
    var Data = await modelLocationP.create(req.body);

    res.json({ status: 200, message: "Thêm mới thành công", Data });
  } catch (err) {
    next(err);
    res.json({ status: 500, message: "Thêm mới thất bại" });
  }
});

//  Xóa danh sách locationP
// http://localhost:3000/locationP/delete-locationP
router.delete("/delete-locationP/:id", async function (req, res, next) {
  try {
    var Data = await modelLocationP.findByIdAndDelete(req.params.id);

    res.json({ status: 200, message: "Xóa thành công", Data });
  } catch (err) {
    next(err);
    res.json({ status: 500, message: "Xóa thất bại" });
  }
});

module.exports = router;
