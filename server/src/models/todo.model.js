const mongoose = require('mongoose');


const TodoSchema = new mongoose.Schema({
title: { type: String, required: true, trim: true },
description: { type: String, default: '' },
dueAt: { type: Date },
status: { type: Boolean, default: false }, // false = incomplete, true = done
}, { timestamps: true });


module.exports = mongoose.model('Todo', TodoSchema);