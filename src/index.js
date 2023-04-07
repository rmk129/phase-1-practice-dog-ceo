console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
.then((resp) => {
    return resp.json();
})
.then((e) => {
    e.message.forEach((element) => {
        let img = document.createElement('img');
        img.src = element;
        let dig = document.getElementById("dog-image-container")
        dig.appendChild(img);
    });
})
let dogBreedArray = []
fetch("https://dog.ceo/api/breeds/list/all")
.then((resp) => {
    return resp.json();
})
.then((event) => {
    
      dogBreedArray = Object.keys(event.message)
    
    dogBreedArray.forEach((element) => {
        let li = document.createElement("li")
        let ul = document.getElementById("dog-breeds")
        li.innerText = element
        ul.appendChild(li)
        return dogBreedArray
    })
})

let uldog = document.getElementById("dog-breeds")
uldog.addEventListener('click', (e) => {
    e.target.style.color = 'red'
    
})



let select = document.getElementById('breed-dropdown')
select.addEventListener('change', (e) => {
    let ul = document.getElementById("dog-breeds")
    ul.innerHTML = ""
    dogBreedArray.forEach((element) => {
        if (element[0].toLowerCase() === e.target.value) {
            let li = document.createElement("li")
            li.innerText = element
            ul.appendChild(li)
        }
    })
})