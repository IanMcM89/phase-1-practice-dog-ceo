console.log('%c HI', 'color: firebrick')

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
        console.log(json.message);
        let breedList = document.querySelector('#dog-breeds');
        let breedObj = json.message;
        for (let breed in breedObj) {
            let newLi = document.createElement('li');
            breedList.appendChild(newLi);
            newLi.textContent = breed;
            newLi.addEventListener('click', () => {
                newLi.style.color = 'red';
            })
        }
    })
    filterBreeds()
})

function filterBreeds() {
    let breedDropDown = document.querySelector('#breed-dropdown');
    breedDropDown.addEventListener('change', () => {
        let selection = breedDropDown.value;
        if (selection === 'a') {
            let liArray = document.querySelectorAll('li');
            console.log(liArray)
        } else if (selection === 'b') {
            console.log(selection);
        } else if (selection === 'c') {
            console.log(selection);
        } else if (selection === 'd') {
            console.log(selection);
        }
    });
}