import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema({
    fName: {
        type: String        
    },
    lName: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
    
});