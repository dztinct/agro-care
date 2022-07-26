const db = require('../routes/db-config')    
const updateplant = async(req, res) => {
    const { symptom, disease, description, causes, prevention, treatment, image} = req.body
    const plantId = req.body.plantId 
    let sql = "UPDATE plant SET symptom ='"+req.body.symptom+"', disease = '"+req.body.disease+"', description = '"+req.body.description+"', causes = '"+req.body.causes+"', prevention = '"+req.body.prevention+"', treatment = '"+req.body.treatment+"', image = '"+req.body.image+"' WHERE id = "+plantId
    if(!symptom || !disease || !description || !causes || !prevention || !treatment || !image) return res.json({status: 'error', error: "Please Enter complete credentials"})
    let query = await db.query(sql)
    return res.json({ status: 'success', success: 'Disease details updated successfully'})     
}
            
module.exports = updateplant