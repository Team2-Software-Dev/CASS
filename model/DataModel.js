import mongoose from "mongoose";

const DataSchema = mongoose.Schema({    
    createdBy: String,
    assignedTo: String,
    description: String,
    date: String,
    state: String
})

const DataModel = mongoose.model("data", DataSchema)

export default DataModel