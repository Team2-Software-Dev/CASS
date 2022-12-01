import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import pageRoutes from "./routes/routes.js"
import authRoutes from "./routes/authRoutes.js"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// Call dot Env file
dotenv.config()

// Setup the PORT
const PORT = process.env.PORT || 5000

// Call the express app
const app = express()

// Call the database function to connect with database
connectDB()


// Template Engine and Views Folder
app.set("view engine", "ejs")
app.set("views", "views")


// Middleware 
app.use(express.json())


// Routes
app.use("/api/auth/", authRoutes)
app.use("/", pageRoutes)

app.use(express.static(path.join(__dirname, "public")))


// Start the server
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))