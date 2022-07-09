const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025" ];
const clickBtn = document.getElementById('clickBtn');                   // grab click button
const colorIdDisplay = document.getElementById('colorId')               // grab span tag which will display color code

//add event listener to click button
clickBtn.addEventListener('click', function(e){
    // get a random number by which we can access our array 
    const randomNumber = myRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];     // to select a color from array
    colorIdDisplay.textContent = colors[randomNumber];
})

// create a function to get a random number
function myRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}