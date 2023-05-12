let digitalEllement = document.querySelector('.digital');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalEllement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
}

function fixZero(time){
    return time < 10 ? `0${time}` : time;
 }

setInterval(updateClock,1000);
updateClock();