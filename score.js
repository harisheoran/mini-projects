// max score to win
let winMaxScore = document.querySelector('#option')
let winScore = winMaxScore.value;

winMaxScore.addEventListener('change', function () {
   winScore = parseInt(this.value)
})

//grabbing the buttons
let leftBtn = document.querySelector('#left')
let rightBtn = document.querySelector('#right')
let resetBtn = document.querySelector('#reset')
let leftScore = document.querySelector('#leftScore')
let rightscore = document.querySelector('#rightScore')

let add = 0;
leftScore.textContent = add
let isGameOver = false


leftBtn.addEventListener('click', () => {
    if(!isGameOver){
        add++;
        leftScore.textContent = add
        if(add == winScore){
            isGameOver = true
            leftScore.style.color = 'green'
            rightScore.style.color = 'red'
        
        }
    
    }
})


let addRight = 0;
rightScore.textContent = addRight
rightBtn.addEventListener('click', () => {
    if(!isGameOver){
        addRight++;
        rightScore.textContent = addRight
        if(addRight == winScore){
            isGameOver = true
            leftScore.style.color = 'red'
            rightScore.style.color = 'green'
        }
    
    }

})




resetBtn.addEventListener('click', () => {
    add = 0;
    addRight = 0;
    leftScore.textContent = add
    rightScore.textContent = addRight
    leftScore.style.color = 'black'
    rightScore.style.color = 'black'
    isGameOver = false

})


//while(!isGameOver)



