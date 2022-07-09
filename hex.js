const hex=[0,1,2,3,4,5,6,7,8,9,"A", "B","C","D","E","F"]
const clickBtn = document.getElementById('clickBtn');                   // grab click button
const colorIdDisplay = document.getElementById('colorId') 

clickBtn.addEventListener('click', function(e){
    let hexInitial = '#';
    for(let h=0;h<6;h++){
        hexInitial += hex[myRandomNumber()];
    }
    document.body.style.backgroundColor = hexInitial;
    colorIdDisplay.textContent = hexInitial;

})
function myRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}