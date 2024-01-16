const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ITask = new Schema(
  {
    _id: { type: ObjectId, auto: true },
    no_: { type: String, required: true },
    siteNo_: { type: String, required: true },
    parentProjectTaskRow: { type: String, required: true },
    projectRow: { type: String, required: true },
    statusProject: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    assignNo_: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    createdBy: { type: String, required: true },
    createdDate: { type: Date, required: true },
    updatedBy: { type: String, required: true },
    updatedDate: { type: Date, required: true },
    priority: { type: String, required: true },
    projectTaskTypeRow: { type: String, required: true },
    contractNo: { type: String, required: true },
    projectedRevenue: { type: Number, required: true },
    currencyUnit: { type: String, required: true },
  },
  { _id: false }
);

const Projects = new Schema(
  {
    id: ObjectId,
    no_: { type: String },
    siteNo_: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    projectManagerNo_: { type: String, required: true },
    assignNo_: { type: String, required: true },
    location: { type: String, required: true },
    contactNo_: { type: String, required: true },
    deal: { type: String, required: true },
    projectURL: { type: String, required: true },
    source: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    statusProject: { type: String, required: true },
    createdBy: { type: String, required: true },
    createDate: { type: Date, required: true },
    updatedBy: { type: String, required: true },
    updateDate: { type: Date, required: true },
    siteID: { type: String, required: true },
    customerNo_: { type: String, required: true },
    projectTypeRow: { type: String, required: true },
    projectFundingRow: { type: String, required: true },
    contractNo_: { type: String, required: true },
    contractDate: { type: Date, required: true },
    projectRevenue: { type: Number, required: true },
    budgetTarget: { type: Number, required: true },
    currencyUnit: { type: String, required: true },
    progress: { type: String, required: true },
    priority: { type: String, required: true },
    hasChild: { type: Boolean, required: true },
    expanded:  { type: Boolean, required: true },
    ITask: [ITask],
  },
  {
    versionKey: false,
  }
);

module.exports =
  mongoose.models.Projects || mongoose.model("Projects", Projects);
