tokyoDate = moment().tz("Asia/Tokyo").format("dddd, Do MMMM yy");
let tokyoElement = document.querySelector("#tokyoDate");
tokyoElement.innerHTML = tokyoDate;

let tokyoTime = moment().tz("Asia/Tokyo").format("h:mm[<small>]A [</small>]");
let tokyoTimeElement = document.querySelector("#tokyoTime");
tokyoTimeElement.innerHTML = tokyoTime;
