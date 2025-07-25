const mongoose = require('mongoose');

const blacklistTokenSchmea = new mongoose.Schema({
    token:{
        type : String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // 24 hours into seconds
    }
});

module.exports = mongoose.model('BlacklistToken',blacklistTokenSchmea);