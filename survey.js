// Example array of image URLs - replace these with your actual image URLs
const imageUrls = [
    'species_grids/Abies alba.jpg', 
    'species_grids/Abies balsamea.jpg', 
    'species_grids/Abies fraseri.jpg', 
    'species_grids/Acer buergerianum.jpg', 
    'species_grids/Acer campestre.jpg', 
    'species_grids/Acer ginnala.jpg', 
    'species_grids/Acer nigrum.jpg', 
    'species_grids/Acer palmatum.jpg', 
    'species_grids/Acer platanoides.jpg', 
    'species_grids/Acer pseudoplatanus.jpg', 
    'species_grids/Acer rubrum.jpg', 
    'species_grids/Acer saccharinum.jpg',
    'species_grids/Acer saccharum.jpg', 
    'species_grids/Acer tataricum.jpg', 
    'species_grids/Acer truncatum.jpg', 
    'species_grids/Acer x freemanii.jpg',
    'species_grids/Aesculus glabra.jpg',
    'species_grids/Aesculus hippocastanum.jpg',
    'species_grids/Amelanchier arborea.jpg',
		'species_grids/Amelanchier canadensis.jpg',
		'species_grids/Amelanchier laevis.jpg',
		'species_grids/Betula alleghaniensis.jpg',
		'species_grids/Betula lenta.jpg',
		'species_grids/Betula nigra.jpg',
		'species_grids/Betula papyrifera.jpg',
		'species_grids/Betula pendula.jpg',
		'species_grids/Betula platyphylla.jpg',
		'species_grids/Betula populifolia.jpg',
		'species_grids/Carya cordiformis.jpg',
		'species_grids/Carya glabra.jpg',
		'species_grids/Carya ovata.jpg',
		'species_grids/Castanea dentata.jpg',
		'species_grids/Castanea mollissima.jpg',
		'species_grids/Catalpa bignonioides.jpg',
		'species_grids/Catalpa speciosa.jpg',
		'species_grids/Cedrus atlantica.jpg',
		'species_grids/Cedrus deodara.jpg',
		'species_grids/Celtis australis.jpg',
		'species_grids/Celtis occidentalis.jpg',
		'species_grids/Cercidiphyllum japonicum.jpg',
		'species_grids/Cercis canadensis.jpg',
		'species_grids/Cercis reniformis.jpg',
		'species_grids/Chamaecyparis thyoides.jpg',
		'species_grids/Cornus alternifolia.jpg',
		'species_grids/Cornus canadensis.jpg',
		'species_grids/Cornus florida.jpg',
		'species_grids/Cornus kousa.jpg',
		'species_grids/Cornus mas.jpg',
		'species_grids/Corylus americana.jpg',
		'species_grids/Corylus colurna.jpg',
		'species_grids/Crataegus crus-galli.jpg',
		'species_grids/Crataegus viridis.jpg',
		'species_grids/Cryptomeria japonica.jpg',
		'species_grids/Fagus grandifolia.jpg',
		'species_grids/Fagus sylvatica.jpg',
		'species_grids/Fraxinus americana.jpg',
		'species_grids/Fraxinus pennsylvanica.jpg',
		'species_grids/Gleditsia triacanthos.jpg',
		'species_grids/Juglans ailantifolia.jpg',
		'species_grids/Juglans nigra.jpg',
		'species_grids/Juniperus virginiana.jpg',
		'species_grids/Liquidambar styraciflua.jpg',
		'species_grids/Maclura pomifera.jpg',
		'species_grids/Magnolia grandiflora.jpg',
		'species_grids/Malus ioensis.jpg',
		'species_grids/Metasequoia glyptostroboides.jpg',
		'species_grids/Picea abies.jpg',
		'species_grids/Picea glauca.jpg',
		'species_grids/Picea pungens.jpg',
		'species_grids/Pinus flexilis.jpg',
		'species_grids/Pinus nigra.jpg',
		'species_grids/Pinus pungens.jpg',
		'species_grids/Pinus resinosa.jpg',
		'species_grids/Pinus rigida.jpg',
		'species_grids/Pinus strobus.jpg',
		'species_grids/Pinus sylvestris.jpg',
		'species_grids/Pinus virginiana.jpg',
		'species_grids/Platanus occidentalis.jpg',
		'species_grids/Platanus x acerifolia.jpg',
		'species_grids/Populus deltoides.jpg',
		'species_grids/Populus grandidentata.jpg',
		'species_grids/Populus tremuloides.jpg',
		'species_grids/Prunus cerasifera.jpg',
		'species_grids/Prunus serotina.jpg',
		'species_grids/Prunus virginiana.jpg',
		'species_grids/Pyrus calleryana.jpg',
		'species_grids/Quercus acutissima.jpg',
		'species_grids/Quercus alba.jpg',
		'species_grids/Quercus bicolor.jpg',
		'species_grids/Quercus cerris.jpg',
		'species_grids/Quercus coccinea.jpg',
		'species_grids/Quercus ellipsoidalis.jpg',
		'species_grids/Quercus falcata.jpg',
		'species_grids/Quercus ilex.jpg',
		'species_grids/Quercus imbricaria.jpg',
		'species_grids/Quercus laurifolia.jpg',
		'species_grids/Quercus lyrata.jpg',
		'species_grids/Quercus macrocarpa.jpg',
		'species_grids/Quercus muehlenbergii.jpg',
		'species_grids/Quercus palustris.jpg',
		'species_grids/Quercus phellos.jpg',
		'species_grids/Quercus robur.jpg',
		'species_grids/Quercus rubra.jpg',
		'species_grids/Quercus shumardii.jpg',
		'species_grids/Quercus stellata.jpg',
		'species_grids/Quercus velutina.jpg',
		'species_grids/Quercus virginiana.jpg',
		'species_grids/Robinia hispida.jpg',
		'species_grids/Robinia pseudoacacia.jpg',
		'species_grids/Salix alba.jpg',
		'species_grids/Salix babylonica.jpg',
		'species_grids/Sassafras albidum.jpg',
		'species_grids/Styphnolobium japonicum.jpg',
		'species_grids/Taxodium ascendens.jpg',
		'species_grids/Taxodium distichum.jpg',
		'species_grids/Taxus baccata.jpg',
		'species_grids/Thuja plicata.jpg',
		'species_grids/Tilia americana.jpg',
		'species_grids/Tilia cordata.jpg',
		'species_grids/Tilia platyphyllos.jpg',
		'species_grids/Tilia tomentosa.jpg',
		'species_grids/Tilia x. europaea.jpg',
		'species_grids/Tsuga canadensis.jpg',
		'species_grids/Ulmus americana.jpg',
		'species_grids/Ulmus parvifolia.jpg',
		'species_grids/Ulmus pumila.jpg', 
		'species_grids/Zelkova serrata.jpg'
];
let currentPairIndex = 0;
const responses = [];

function createRadioButtons(container) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.textContent = 'Do these images show the same type of tree?';
    
    const yesLabel = document.createElement('label');
    yesLabel.textContent = 'Yes';
    const yesInput = document.createElement('input');
    yesInput.type = 'radio';
    yesInput.name = 'pair_choice';
    yesInput.value = 'yes';
    yesLabel.prepend(yesInput);

    const noLabel = document.createElement('label');
    noLabel.textContent = 'No';
    const noInput = document.createElement('input');
    noInput.type = 'radio';
    noInput.name = 'pair_choice';
    noInput.value = 'no';
    noLabel.prepend(noInput);
    
    container.appendChild(questionDiv);
    container.appendChild(yesLabel);
    container.appendChild(noLabel);
}

function showImagePair(index) {
    const surveyContainer = document.getElementById('surveyContainer');
    surveyContainer.innerHTML = ''; // Clear the previous images

    const img1 = document.createElement('img');
    img1.src = imageUrls[index * 2];
    const img2 = document.createElement('img');
    img2.src = imageUrls[index * 2 + 1];
    
    surveyContainer.appendChild(img1);
    surveyContainer.appendChild(img2);

    createRadioButtons(surveyContainer);
    
    document.getElementById('nextButton').classList.remove('hidden');
}

function showNextPair() {
    const selectedValue = document.querySelector('input[name="pair_choice"]:checked')?.value;
    
    if (!selectedValue) {
        alert('Please make a selection before proceeding.');
        return;
    }

    responses.push({
        pairIndex: currentPairIndex,
        response: selectedValue
    });

    currentPairIndex++;
    
    if (currentPairIndex < imageUrls.length / 2) {
        showImagePair(currentPairIndex);
    } else {
        finishSurvey();
    }
    
    document.getElementById('nextButton').classList.add('hidden');
}

function finishSurvey() {
    console.log(responses);
    alert('Thank you for completing the survey!');
    document.getElementById('surveyContainer').innerHTML = '<p>Thank you for participating!</p>';
    
        fetch('https://script.google.com/macros/s/AKfycbxI0iwOr1a67gB_-XLcQTWxvwmpLj4_kUwR_YbeYgRSqAyR6VKTp6VIoIDuK93bjyZa/exec', {
        method: 'POST',
        mode: 'no-cors', // Note: no-cors will prevent reading the response
        body: JSON.stringify(answers),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        alert('Survey submitted successfully!');
        // Optionally, redirect or clear the form here
    }).catch(error => {
        console.error('Error submitting form:', error);
    });
}

// Initialize the survey by showing the first pair
showImagePair(currentPairIndex);