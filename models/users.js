const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username : String,
    username_lowercase: String,
    displayName: String,
    email: String,
    cover_img: String,
    profile_img: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    chats: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat"
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Follower"
    }],
    followings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Following"
    }],
    external_ID : String,
    create_Date : String,
    update_Date : String,
    
});

const User = mongoose.model('User', userSchema);
module.exports = User;