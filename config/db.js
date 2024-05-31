const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/newTodo').on('open', () => {
    console.log("MongoDB connected");
}).on('error', ()=>{
    console.log("MongoDB connection error");
});

const groupList = mongoose.createConnection('mongodb://localhost:27017/groupList').on('open', () => {
    console.log("MongoDB connected and let's make group together");
}).on('error', (error) => {
    console.log("MongoDB connection error and you can't make group:", error);
});

module.exports = connection;
module.exports = groupList;
// 172.31.33.66