const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello There!")
})

const authController = require("./auth/auth.controller");
app.use("/api/auth", authController);

const itemController = require("./item/item.controller");
app.use("/api/items", itemController);

const userController = require("./user/user.controller");
app.use("/api/users", userController);

const transactionController = require("./transaction/transaction.controller");
app.use("/api/transactions", transactionController);

app.listen(PORT, () => {
    console.log('App listening on port' + PORT)
})