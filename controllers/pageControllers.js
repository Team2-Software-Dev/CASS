import DataModel from "../model/DataModel.js"

export const homePage = async (req, res) => {

    const data = await DataModel.find()

    const payload = {
        title: "Home Page",
        data: data
    }

    res.status(200).render("home", payload)
}

export const singlePage = async (req, res) => {

    const dataId = req.params.id

    const singleData = await DataModel.findById(dataId)

    const payload = {
        title: "Single Page",
        data: singleData
    }

    res.status(200).render("single", payload)
}

export const updateData = async (req, res) => {

    const dataId = req.params.id
    const data = req.body

    const updatedData = await DataModel.findByIdAndUpdate(dataId, data, { new: true })

    res.status(201).json(updatedData)
}

export const deleteData = async (req, res) => {

    const dataId = req.params.id

    const data = await DataModel.findByIdAndRemove(dataId)

    res.status(201).json(data)
}

export const addNewData = async (req, res) => {

    const data = await DataModel.create(req.body)

    res.status(201).json(data)
}

export const addDataPage = async (req, res) => {

    const payload = {
        title: "Add New Data"
    }
    res.status(201).render("add", payload)
}