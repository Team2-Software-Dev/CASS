import express from "express"
import { addDataPage, addNewData, deleteData, homePage, singlePage, updateData } from "../controllers/pageControllers.js"

const router = express.Router()


router.put("/:id", updateData)
router.delete("/:id", deleteData)
router.get("/update/:id", singlePage)
router.get("/", homePage)
router.get("/add", addDataPage)
router.post("/add", addNewData)


export default router