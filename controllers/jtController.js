const JobData = require('../models/jtSchema');

//Create 
async function createJob(req,res) {
    try{
        let newJob = await JobData.create(req.body)
        console.log(req.body)
        res.json(newJob)
    } catch (error){
        res.status(500).json({error: error.message})
    }
}

// Read
async function readJob(req,res){
    try {
        let allJobs = await JobData.find({});
        res.json(allJobs);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//Update
async function updateJob(req,res){
    try {
      let updatedJob = await JobData.findByIdAndUpdate(req.params.id, req.body);
      res.json(updatedJob);  
    } catch (error) {
      res.status(500).json({error: error.message})
    }
}

//Delete
async function deleteJob(req,res){
    try {
        let deletedJob = await JobData.findByIdAndDelete(req.params.id);
        res.json(deletedJob)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}







module.exports = { createJob, readJob, updateJob, deleteJob};
