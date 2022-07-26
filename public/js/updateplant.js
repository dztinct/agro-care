form.addEventListener('submit', () => {
    const updateplant = {
        symptom: symptom.value,
        disease: disease.value,
        description: description.value,
        causes : causes.value,
        prevention: prevention.value,
        treatment: treatment.value,
        image : image.value,
        plantId : plantId.value
    }
    fetch('/api/updateplant', {
        method: 'PUT',
        body: JSON.stringify(updateplant),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == 'error') {
                success.style.display = 'none'
                error.style.display = 'block'
                error.innerText = data.error

                symptom.value =""
                disease.value =""
                description.value =""
                causes.value =""
                prevention.value =""
                treatment.value =""
                image.value =""
            }else{
                error.style.display = 'none'
                success.style.display = 'block'
                success.innerText = data.success
                
                symptom.value =""
                disease.value =""
                description.value =""
                causes.value =""
                prevention.value =""
                treatment.value =""
                image.value =""
            }
        })
})