form.addEventListener('submit', () => {
    const updateanimal = {
        symptom: symptom.value,
        disease: disease.value,
        description: description.value,
        causes : causes.value,
        prevention: prevention.value,
        treatment: treatment.value,
        image : image.value,
        animalId : animalId.value
    }
    fetch('/api/updateanimal', {
        method: 'PUT',
        body: JSON.stringify(updateanimal),
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