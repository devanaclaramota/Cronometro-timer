let display = document.getElementById('p')



function start(){
    alert('iniciou')
    setInterval(counter,1000)
}

function pause(){
    alert('pausou')
}
function reset(){
    alert('zerou')
}

function counter(){
    display = display + 1 
}