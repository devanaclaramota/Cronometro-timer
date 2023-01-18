let display = document.getElementById('p')
let seconds = 00
let minutes = 00
let hour = 00
let interval 


function counter(){
    seconds++
    if(seconds == 60){
        minutes++
        seconds = 00
        if(minutes == 60){
            hour++
            minutes=00
        }
    }
        display.innerText= menor10(hour)+':'+menor10(minutes)+':'+menor10(seconds)
    }
    
function menor10(num){
    if(num < 10){
        return('0'+ num)

    }else{
        return(num)
    }
}
function start(){
    counter()
  interval = setInterval(counter,1000)

  
}

function pause(){
    clearInterval(interval)
   let li = document.querySelector("li")
   li.innerHTML = (`${display} aqui`)
    
}
function reset(){
    clearInterval(interval)
    seconds = 00
    minutes = 00
    hour = 00
    display.innerText = '00:00:00'
}
