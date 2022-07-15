import mongoose from "mongoose";

const ImageSchema = mongoose.Schema({
    email:{
        type:String,
    },
    image:{
        data:Buffer,
        contentType: String,
    },
})

const Image = mongoose.model("ProfilePictures", ImageSchema);
export default Image;