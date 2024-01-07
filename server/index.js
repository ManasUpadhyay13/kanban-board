const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const KanbanModel = require('./models/kanbanSchema');
require("dotenv").config()

app.use(express.json());
app.use(cors())

// DB CONNECTION
const dbUri = process.env.DB_URL;

mongoose.connect(dbUri);
const db = mongoose.connection;

db.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});


app.get("/", (req, res) => {
    res.send("hello, working , demo route")
})


// update or create kanban

app.post("/createKanban", async (req, res) => {
    try {

        const { name } = req.body

        if (!name) {
            return res.json({ "message": "name is missing" })
        }

        console.log(name);

        const existingKanban = await KanbanModel.findOne({ name });

        if (existingKanban) {
            console.log("enter");
            return res.json({ message: "Name already exists" });
        }

        const kanbanData = {
            "name": name,
            "data": [
                {
                    id: 123,
                    columnId: "todo",
                    content: "Todo 1"
                },
                {
                    id: 121233,
                    columnId: "doing",
                    content: "Doing 1"
                },
                {
                    id: 1224353,
                    columnId: "done",
                    content: "Done 1"
                },
            ]
        }

        const kanban = await KanbanModel.create(kanbanData);

        console.log(kanban);

        res.json({ id: kanban._id })

    } catch (error) {
        console.log(error.message);
    }
})


app.listen(5500, () => {
    console.log("listening on 5500");
})