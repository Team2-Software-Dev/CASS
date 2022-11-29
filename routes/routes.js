import express from "express"
import { addDataPage, addNewData, deleteData, homePage, login, register, singlePage, updateData } from "../controllers/pageControllers.js"

const router = express.Router()


router.put("/:id", updateData)
router.delete("/:id", deleteData)
router.get("/update/:id", singlePage)
router.get("/", homePage)
router.get("/add", addDataPage)
router.post("/add", addNewData)
router.get("/login", login)
router.get("/register", register)


export default router