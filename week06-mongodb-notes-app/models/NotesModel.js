const mongoose = require('mongoose');

// TODO - Create Note Schema here having fields
const NoteSchema = mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteDescription: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW'],
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);