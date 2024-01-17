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

// Sửa danh sách projects theo id
// http://localhost:8080/projects/update-projects/:id
router.put("/update-projects/:id", async function (req, res, next) {
  try {
    // Extract the updated data from the request body
    const updatedData = req.body;

    // Find the project by ID and update it
    const updatedProject = await modelProjects.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true } // Set this option to true to get the updated document as a result
    );

    if (!updatedProject) {
      // If the project is not found, return an error
      return res.status(404).json({ status: 404, message: "Project not found" });
    }

    // Return the updated project
    res.json({ status: 200, message: "Cập nhật thành công", updatedProject });
  } catch (err) {
    // Handle errors
    next(err);
    res.status(500).json({ status: 500, message: "Cập nhật thất bại" });
  }
});

// Xem chi tiết danh sách projects theo id
// http://localhost:8080/projects/get-projects/:id
router.get("/get-projects/:id", async function (req, res, next) {
  try {
    var Data = await modelProjects.findById(req.params.id);

    res.json({ status: 200, message: "Xem chi tiết thành công", Data });
  } catch (err) {
    next(err);
    res.json({ status: 500, message: "Xem chi tiết thất bại" });
  }
});


module.exports = router;
