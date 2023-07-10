const diseases = {
    cold: ['cough'],
    flu: ['fever', 'cough'],
    covid19: ['fever', 'cough', 'headache'],
    allergies: ['sneezing', 'itchy_eyes', 'runny_nose'],
    migraine: ['severe_headache', 'nausea', 'light_sensitivity']
};

document.getElementById('detect-btn').addEventListener('click', function () {
    const selectedSymptoms = Array.from(document.querySelectorAll('input[name="symptom"]:checked'))
        .map(checkbox => checkbox.value);

    const matchedDiseases = matchDisease(selectedSymptoms);
    displayDiseases(matchedDiseases);
});

function matchDisease(symptoms) {
    const matchedDiseases = [];

    for (const disease in diseases) {
        const diseaseSymptoms = diseases[disease];
        const allSymptomsMatched = diseaseSymptoms.every(symptom => symptoms.includes(symptom));

        if (allSymptomsMatched) {
            matchedDiseases.push(disease);
        }
    }

    return matchedDiseases;
}

function displayDiseases(diseases) {
    const diseaseList = document.getElementById('disease-list');
    diseaseList.innerHTML = '';

    if (diseases.length === 0) {
        diseaseList.innerHTML = '<li>No matching diseases found</li>';
    } else {
        diseases.forEach(disease => {
            const listItem = document.createElement('li');
            listItem.textContent = disease;
            diseaseList.appendChild(listItem);
        });
    }

    document.getElementById('result-container').style.display = 'block';
}
