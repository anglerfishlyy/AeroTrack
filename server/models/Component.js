const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  serialNumber: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['Manufacturing', 'Quality Check', 'In Transit', 'Deployed', 'Maintenance'],
    default: 'Manufacturing'
  },
  manufacturingDate: {
    type: Date,
    required: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  history: [{
    status: String,
    timestamp: Date,
    notes: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('Component', componentSchema); 