
// both containers
const container = document.querySelector('#container')
const container2 = document.querySelector('#container2')

//choose btn
let btn = document.createElement('button')
btn.innerText = 'Choose'
container.appendChild(btn)

//list button
let btn2 = document.createElement('button')
btn2.innerText = 'See the List'
btn2.id = 'btn2'
container2.appendChild(btn2)

// by default image
const img = document.createElement('img')
img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
container.appendChild(img)

//Create new pokemon
btn.onclick = () => {
    if(document.getElementById('num')){
        document.getElementById('num').remove()
    }
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon');
    const random = Math.floor(Math.random() * 151 ) +1
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${random}.png`
    const numPlace = document.createElement('span')
    numPlace.id= 'num'
    numPlace.innerText = `${random}`
    
    pokemon.appendChild(img)
    pokemon.appendChild(numPlace)
    container.appendChild(pokemon)   
}

//list of pokemons
btn2.onclick = () => {
    if(document.getElementById('btn2')){
        document.getElementById('btn2').remove()
    }
    for(let j = 0; j<=151 ;j++){
        const pokemon = document.createElement('div')
        pokemon.classList.add('pokemon');
        const img2 = document.createElement('img')
        img2.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${j}.png`
        
        const numPlace = document.createElement('span')
        numPlace.innerText = `${j}`
        
        pokemon.appendChild(img2)
        pokemon.appendChild(numPlace)
        container2.appendChild(pokemon)
    }
}


