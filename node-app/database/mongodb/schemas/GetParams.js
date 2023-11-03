import { Schema, model } from "mongoose";
import "../connection.js";

const RequestsSchema = new Schema({
    get_params: { 
        type: String, 
        require: true
    }
});

export default model("GetParams", RequestsSchema);