const mongoose = require('mongoose');

const db = require('../config/db');

const { Schema } = mongoose;

const groupSchema = new Schema({
  groupName: {
    type: String,
    required: true,
    unique: true
  } ,
  groupInfo: {
    type: String,
    required: true
  } 
});

const groupModel = db.model('group', groupSchema);

module.exports = groupModel;