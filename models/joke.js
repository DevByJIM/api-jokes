import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            enum: ['misc', 'school', 'programming', 'sex'],
            trim: true,
            lowercase: true,
            require: true
        },
        age: {
            type: String,
            enum: ['all', '12', '18'],
            default: 'all',
            trim:true,
            require: true
        },
        lang: {
            type: String,
            enum: ['es', 'en', 'it', 'fr', 'ge'],
            default: 'es',
            trim: true,
            lowercase: true,
            require: true
        },
        type: {
            type: String,
            enum: ['single', 'twopart'],
            default: 'single',
            trim: true,
            lowercase: true,
            require: true
        },
        story: {
            type: String,
            trim: true,          
        },
        delivery: {
            type: String,
            trim: true,           
        },
    }
)  
  
export const Joke = mongoose.model('Joke', jokeSchema);
