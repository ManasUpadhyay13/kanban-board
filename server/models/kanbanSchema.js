const mongoose = require('mongoose')

const kanbanSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    data: [
        {
            id: {
                type: Number
            },
            columnId: {
                type: String,
            },
            content: {
                type: String,
            }
        }
    ]

})

const KanbanData = mongoose.model("KanbanData", kanbanSchema)

module.exports = KanbanData