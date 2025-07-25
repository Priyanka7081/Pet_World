import mongoose from "mongoose";

const AdoptionSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
    },
     lastName:{
        type:String,
        required: true,
    },
     address:{
        type:String,
        required: true,
    },
     email:{
        type:String,
        required: true,
    },
     phone:{
        type:String,
        required: true,
    },
     pet:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
        required: true,
    },

},{
    timestamps: true,
});

export const Adoption = mongoose.model("Adoption", AdoptionSchema);