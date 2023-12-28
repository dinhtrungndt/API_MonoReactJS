const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const subtasksSchema = new Schema(
  {
    _id: { type: ObjectId, auto: true },
    name: { type: String, required: true },
    subtasksDate: { type: Date, required: true },
    shippedDate: { type: Date, required: true },
    units: { type: String, required: true },
    unitPrice: { type: String, required: true },
    price: { type: Number, required: true },
    content: { type: String, required: true },
  },
  { _id: false }
);

const locationPlanning = new Schema(
  {
    id: ObjectId,
    name: { type: String, required: true },
    kind: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    star: { type: String, required: true },
    content: { type: String, required: true },
    img: { type: String, required: true },
    subtasks: [{ type: subtasksSchema, auto: true }],
  },
  {
    versionKey: false,
  }
);

module.exports =
  mongoose.models.locationPlanning ||
  mongoose.model("locationPlanning", locationPlanning);
