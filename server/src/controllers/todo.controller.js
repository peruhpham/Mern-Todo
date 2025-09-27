const Todo = require('../models/todo.model');
const { getPagination } = require('../../utils/pagination');


// Create
exports.createTodo = async (req, res) => {
const { title, description, dueAt } = req.body;
if (!title || title.toString().trim() === '') {
return res.status(400).json({ message: 'Title is required' });
}


const todo = new Todo({ title: title.trim(), description, dueAt });
await todo.save();
return res.status(201).json(todo);
};




// List with filters, pagination, date range
exports.listTodos = async (req, res) => {
const { page = 1, limit = 10, status, from, to, search } = req.query;


const filter = {};
if (status === 'true' || status === 'false') filter.status = status === 'true';
if (search) filter.title = { $regex: search, $options: 'i' };
if (from || to) {
filter.createdAt = {};
if (from) filter.createdAt.$gte = new Date(from);
if (to) filter.createdAt.$lte = new Date(to);
}


const { skip, limitNum, pageNum } = getPagination(page, limit);


const [total, todos] = await Promise.all([
Todo.countDocuments(filter),
Todo.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limitNum)
]);


const pages = Math.ceil(total / limitNum) || 1;
res.json({ total, page: pageNum, pages, limit: limitNum, data: todos });
};


// Stats
exports.stats = async (req, res) => {
const total = await Todo.countDocuments();
const done = await Todo.countDocuments({ status: true });
const notDone = total - done;
const latest5 = await Todo.find().sort({ createdAt: -1 }).limit(5);
res.json({ total, done, notDone, latest: latest5 });
};




// Get one
exports.getOne = async (req, res) => {
const { id } = req.params;
const todo = await Todo.findById(id);
if (!todo) return res.status(404).json({ message: 'Todo not found' });
res.json(todo);
};


// Update
exports.updateTodo = async (req, res) => {
const { id } = req.params;
const { title, description, dueAt, status } = req.body;


if (title !== undefined && title.toString().trim() === '') {
return res.status(400).json({ message: 'Title cannot be empty' });
}


const updates = {};
if (title !== undefined) updates.title = title.trim();
if (description !== undefined) updates.description = description;
if (dueAt !== undefined) updates.dueAt = dueAt;
if (status !== undefined) updates.status = status;


const updated = await Todo.findByIdAndUpdate(id, updates, { new: true });
if (!updated) return res.status(404).json({ message: 'Todo not found' });
res.json(updated);
};


// Delete
exports.deleteTodo = async (req, res) => {
const { id } = req.params;
const deleted = await Todo.findByIdAndDelete(id);
if (!deleted) return res.status(404).json({ message: 'Todo not found' });
res.json({ message: 'Deleted', id: deleted._id });
};