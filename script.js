let digitalEllement = document.querySelector('.digital');
let second = 0
let minute = 0
let interval;

function start() {
    interval = setInterval(counter,1000);
}

function pause(){
   clearInterval(interval)
}
function stopp(){
    clearInterval(interval)
    second = 00
    minute = 00
    digitalEllement.innerHTML = "00:00"

    location.reload()
}


function counter() {
    second++
    digitalEllement.innerHTML = `${fixZero(minute)}:${fixZero(second)}`
    if(second == 60){
        minute ++
        second = 0
    }
}


function fixZero(time){
    return time < 10 ? `0${time}` : time;
 }



