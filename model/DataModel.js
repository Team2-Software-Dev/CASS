import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    incidentId: Number,
    createdBy: String,
    assignedTo: String,
    description: String,
    Date: String,
    state: String
})

const DataModel = mongoose.model("data", DataSchema)

export default DataModel