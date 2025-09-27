exports.getPagination = (page = 1, limit = 10) => {
const pageNum = Math.max(parseInt(page, 10) || 1, 1);
const limitNum = Math.max(parseInt(limit, 5) || 10, 1);
const skip = (pageNum - 1) * limitNum;
return { skip, limitNum, pageNum };
};