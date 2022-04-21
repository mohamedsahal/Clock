let time = document.querySelector("#time");
let date = document.querySelector("#date");

setInterval(() => {
    today();
    
}, 1000);



function today() {
    let today = new Date();

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];


let curenTime= `${today.getHours() <9? "0"+ today.getHours(): today.getHours()}: ${today.getMinutes() <9? "0" +today.getMinutes():today.getMinutes() }: ${today.getSeconds() < 9? "0" + today.getSeconds():today.getSeconds()}`;


let currentDate = `${dayNames[today.getDay()]}, ${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`

time.innerHTML = curenTime;
date.innerHTML = currentDate;

}
