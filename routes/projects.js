var express = require("express");
var router = express.Router();
var modelProjects = require("../models/projects");
var cors = require("cors"); // Import the cors middleware

// Enable CORS for all routes
router.use(cors());

// lấy danh sách projects
// http://localhost:8080/projects/get-projects
router.get("/get-projects", async function (req, res) {
  var data = await modelProjects.find();
  res.json({data});
});

//  Thêm danh sách projects
// http://localhost:8080/projects/add-projects
router.post("/add-projects", async function (req, res, next) {
  try {
    var Data = await modelProjects.create(req.body);

    res.json({ status: 200, message: "Thêm mới thành công", Data });
  } catch (err) {
    next(err);
    res.json({ status: 500, message: "Thêm mới thất bại" });
  }
});

//  Xóa danh sách projects
// http://localhost:8080/projects/delete-projects
router.delete("/delete-projects/:id", async function (req, res, next) {
  try {
    var Data = await modelProjects.findByIdAndDelete(req.params.id);

    res.json({ status: 200, message: "Xóa thành công", Data });
  } catch (err) {
    next(err);
    res.json({ status: 500, message: "Xóa thất bại" });
  }
});

//  Sửa danh sách projects theo id
// http://localhost:8080/projects/update-projects
router.put("/update-projects", async function (req, res, next) {
try {
    const body = req.body;
    const id = body.id;
    const data = body.data;

    await modelProjects.findByIdAndUpdate(id, data);
    res.json({ status: 200, message: "Sửa thành công" });
  } catch (err) {
    next(err);
    res.json({ status: 500, message: "Sửa thất bại" });
  }
}
);

module.exports = router;
