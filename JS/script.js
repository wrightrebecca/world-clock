function updateTime() {
  tokyoDate = moment().tz("Asia/Tokyo").format("dddd, Do MMMM yy");
  let tokyoElement = document.querySelector("#tokyoDate");
  tokyoElement.innerHTML = tokyoDate;
  let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("h:mm:ss[<small>] A [</small>]");
  let tokyoTimeElement = document.querySelector("#tokyoTime");
  tokyoTimeElement.innerHTML = tokyoTime;

  barcelonaDate = moment().tz("Europe/Madrid").format("dddd, Do MMMM yy");
  let barcelonaElement = document.querySelector("#barcelonaDate");
  barcelonaElement.innerHTML = barcelonaDate;
  let barcelonaTime = moment()
    .tz("Europe/Madrid")
    .format("h:mm:ss[<small>] A [</small>]");
  let barcelonaTimeElement = document.querySelector("#barcelonaTime");
  barcelonaTimeElement.innerHTML = barcelonaTime;

  chicagoDate = moment().tz("America/Chicago").format("dddd, Do MMMM yy");
  let chicagoElement = document.querySelector("#chicagoDate");
  chicagoElement.innerHTML = chicagoDate;
  let chicagoTime = moment()
    .tz("America/Chicago")
    .format("h:mm:ss[<small>] A [</small>]");
  let chicagoTimeElement = document.querySelector("#chicagoTime");
  chicagoTimeElement.innerHTML = chicagoTime;

  let currentDate = moment().format("dddd, Do MMMM yy");
  let currentDateElement = document.querySelector("#currentLocationDate");
  currentDateElement.innerHTML = currentDate;

  let currentTime = moment().format("h:mm:ss[<small>] A [</small>]");
  let currentTimeElement = document.querySelector("#currentLocationTime");
  currentTimeElement.innerHTML = currentTime;

  let currentLocation = moment.tz.guess();
  let currentLocationElement = document.querySelector("#currentLocationName");
  currentLocationElement.innerHTML = currentLocation;
}
updateTime();
setInterval(updateTime, 1000);

function showSelectedCountry(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.split("/")[1];
  let selectedCityTime = moment().tz(cityTimezone);
  let searchedCityElement = document.querySelector("#defaultCities");
  searchedCityElement.innerHTML = `<div class="other-city">
          <div>
            <h2>${cityName}</h2>
            <div class="date"> ${selectedCityTime.format(
              "dddd, Do MMMM yy"
            )}</div>
          </div>

          <div class="time">${selectedCityTime.format(
            "h:mm:ss[<small>] A [</small>]"
          )}</div>
        </div>
        <a href="/"> Back to home </a>`;
}

let locationDropdown = document.querySelector("#locations");
locationDropdown.addEventListener("change", showSelectedCountry);
