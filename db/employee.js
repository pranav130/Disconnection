// const employee =  new mongoose.model('employee',emplyeeSchema);

const express = require("express");
const router = express.Router();

//trial of edit delete tab
router.post("/employee", async (req, res) => {
    console.log(req.body)
    const data = new employee(req.body)
    const result = await data.save()
  
    if (!result) {
        res.json({
            status: "FAILED",
            message: "employee not register successfully...."
        })
    }
    else {
        res.json({
            status: "SUCCESS",
            message: "employee register successfully....",
            data: result
        })
    }
  })
  
  //get records 
  router.get("/", async (req, res) => {
    try {
        // const result = await employee.find()
        // if (!result) {
        //     res.json({
        //         status: "FAILED",
        //         message: "Not found record"
        //     })
        // }
        // else {
        //     res.json({
        //         status: "SUCCESS",
        //         message: "Records found",
        //         data: result
        //     })
        // }
        res.send("request found");
    }
    catch (e) {
        console.log(e)
    }
  })
  
  //get single record
  router.get("/:id", async (req, res) => {
    // try {
    //     const _id = req.params.id;
    //     const result = await employee.findById(_id);
    //     if (!result) {
    //         res.json({
    //             status: "FAILED",
    //             message: "Record not found on this ID"
    //         })
    //     }
    //     else {
    //         res.json({
    //             status: "SUCCESS",
    //             message: "Records found",
    //             data: result
    //         })
    //     }
    // }
    // catch (e) {
    //     res.send(e)
    // }
    console.log(req.params)
    res.send(`employee id : ${req.params.id}`);
  })
  // update records 
  router.put("/employee/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await employee.findByIdAndUpdate(_id,req.body,{new: true});
        console.log(result)
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Records not Update....",
                data: result
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Record is Updated successfully...",
                data: result
            })
        }
    }
    catch (e) {
        res.send(e)
    }
  })
  // Delete Records 
  router.delete("/employee/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await employee.findByIdAndDelete(_id);
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record not Delete..."
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Record is Delete successfully..."
            })
        }
    }
    catch (e) {
        res.send(e)
    }
  })
  
module.exports = router;