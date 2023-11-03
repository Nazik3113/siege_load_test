import express from "express";
import GetParamsModel from "./database/mongodb/schemas/GetParams.js";

const app = express(); 
const PORT = 8076; 

app.get("/", (req, res) => {
    const getParamsModel = new GetParamsModel({
        get_params: JSON.stringify(req.query)
    });
    getParamsModel.save().then(() => {
        // console.log("Saved successfully");
    }).catch((error) => {
        console.log(error);
    });

    res.status(200);
    res.send({status: 1})
});
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log(`Server is Successfully Running, and App is listening on port ${PORT}`) 
    else 
        console.log("Error occurred, server can't start", error); 
    }
); 