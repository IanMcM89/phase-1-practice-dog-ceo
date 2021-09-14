console.log('%c HI', 'color: firebrick')

let breedObj = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => {
        let dogDiv = document.querySelector('#dog-image-container');
        let dogArray = json.message;
        for (let img of dogArray) {
            let newImg = document.createElement('img');
            dogDiv.appendChild(newImg);
            newImg.src = img;
        }
    })

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
        let breedObj = Object.keys(json.message);
        console.log(breedObj);
        updateBreedList(breedObj);
    })
})

function updateBreedList(breedObj) {
    for (let breed of breedObj) {
        addBreed(breed);
        //let breedList = document.querySelector('#dog-breeds');
        //filterBreeds(breedList)
    }
    filterBreeds(breedObj);
}

function addBreed(breed) {
    let breedList = document.querySelector('#dog-breeds');
    let newLi = document.createElement('li');
    newLi.textContent = breed;
    breedList.appendChild(newLi);
    changeFontColor(newLi);
}

function changeFontColor(newLi) {
    newLi.addEventListener('click', () => {
        newLi.style.color = 'red';
    })
}

function filterBreeds(breedObj) {
    let breedDropDown = document.querySelector('#breed-dropdown');
    breedDropDown.addEventListener('change', (e) => {
        //console.log(e.target.value);
        let filteredBreedList = breedObj.filter(dog => dog.startsWith(e.target.value));
        //console.log(filteredBreedList)
        changeBreedFilter(filteredBreedList);
    });
}

function changeBreedFilter(filteredBreedList) {
    let breedList = document.querySelector('#dog-breeds');
    removeLi(breedList);
    for (let dog of filteredBreedList) {
        let newLi = document.createElement('li');
        breedList.appendChild(newLi);
        newLi.textContent = dog;
        changeFontColor(newLi);
    }
}

function removeLi(breedList) {
    let firstChild = breedList.firstChild; 
    while (firstChild) {
        breedList.removeChild(firstChild);
        firstChild = breedList.firstChild;
    }
}