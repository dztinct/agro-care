const db = require('../routes/db-config')

const addplant = async (req, res) => {
    const { symptom, disease, description, causes, prevention, treatment, image} = req.body
    if(!symptom || !disease || !description || !causes || !prevention || !treatment || !image) return res.json({status: 'error', error: "Please Enter complete credentials"})
    else{
        db.query('SELECT symptom FROM plant WHERE symptom = ?', [symptom], async (err, result) => {
            if(err) throw err;
            if(result[0]) return res.json({status: 'error', error: 'Symptom already exists'})
            else{
                db.query('INSERT INTO plant SET ?', {symptom: symptom, disease: disease, description: description, causes : causes, prevention: prevention, treatment: treatment, image : image}, (error, results) => {
                    if(error) throw error;
                    return res.json({ status: 'success', success: 'Disease details added successfully'})
                })
            }
        })
    }
}

module.exports = addplant 