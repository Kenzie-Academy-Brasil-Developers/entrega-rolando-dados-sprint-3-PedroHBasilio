function rollDice(min, max){
    let random = Math.random() * (max - min) + min;
    return Math.ceil(random)
}
//console.log(rollDice(0, 6))

function twoDice(){
    return rollDice(0, 6) + rollDice(0, 6)
}
//console.log(twoDice())




function rollTimes(rolls){

    let count = []  

    let arr = []

    for(let i = 0; i < rolls; i ++){
        arr.push(twoDice())
    }

    for(let j = 0; j < arr.length; j++){
        for(let l = 2; l <= 12; l ++){
            if(count[l] === undefined){
                count[l] = 1
            }
            if(arr[j] === l){
                count[l] += 1
            }
        }      
    }
    
    
    const frequencia = document.getElementById("frequencia");

    for(let i = 2; i < count.length; i++){

        const paragraph = document.createElement("div")
        paragraph.classList.add("numbers")

        paragraph.innerHTML = `${i} - ${count[i]}`
        paragraph.style.width = `${count[i] + 30}px`

        frequencia.appendChild(paragraph)
    }

    


}
rollTimes(1000)






