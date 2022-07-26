const db = require('../routes/db-config')    
const updateanimal = async(req, res) => {
    const { symptom, disease, description, causes, prevention, treatment, image} = req.body
    const animalId = req.body.animalId 
    let sql = "UPDATE animals SET symptom ='"+req.body.symptom+"', disease = '"+req.body.disease+"', description = '"+req.body.description+"', causes = '"+req.body.causes+"', prevention = '"+req.body.prevention+"', treatment = '"+req.body.treatment+"', image = '"+req.body.image+"' WHERE id = "+animalId
    if(!symptom || !disease || !description || !causes || !prevention || !treatment || !image) return res.json({status: 'error', error: "Please Enter complete credentials"})
    let query = await db.query(sql)
    return res.json({ status: 'success', success: 'Disease details updated successfully'})     
}
            
module.exports = updateanimal