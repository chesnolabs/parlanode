/**
 * Created by francizidar on 21/02/16.
 */
var mongoose = require('mongoose');

var schema = mongoose.Schema({

    dateTimeCreated : { type:Date, default:Date.now },
    name : String,
    dataUrl : { type:String, required:true},
    ejs : String,
    group : { type:String, index:true, required:true },
    method : { type:String, index:true, required:true },
    uniquePath: { type:String, required:true, unique:true }

});

mongoose.model('Card', schema);