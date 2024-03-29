//fillSpinnerTable
let countries = [
  {
    countrycode: "LB",
    countryName: "lebanon",
    cities: [
      { name: "Beirut Governorate", code: "Beyrouth" },
      { name: "Mount Lebanon Governorate", code: "Mont-Liban" },
      { name: "North Governorate", code: "AS" },
      { name: "South Governorate", code: "JA" },
      { name: "Nabatieh Governorate", code: "NA" },
    ],
  },
  {
    countrycode: "SY",
    countryName: "syria",
    cities: [
      { name: "syria Governorate", code: "Beyrouth" },
      { name: "syria Lebanon Governorate", code: "JL" },
      { name: "syria Governorate", code: "AS" },
      { name: "syria Governorate", code: "JA" },
      { name: "syria Governorate", code: "NA" },
    ],
  },
];

function fillSpinnerTable() {
  for (contry of countries)
    document.getElementById(
      "countrySelected"
    ).innerHTML += `<option value="${contry.countrycode}">${contry.countryName}</option>        
  `;
}
document.getElementById("countrySelected").addEventListener("change", () => {
  let selectedCountry = document.getElementById("countrySelected").value;
  for (city of countries) {
    if (selectedCountry === city.countrycode) {
      let currentCountryCode = city.countrycode;
      document.getElementById("tabledata").innerHTML = ``;
      let currentCities = city.cities;
      for (currentcity of currentCities) {
        getTimeByCity(currentCountryCode, currentcity.code, currentcity.name);
      }
    }
  }
});
//-------------------------------------
async function getTimeByCity(ncontry, ncity, cityname) {
  await axios
    .get(" http://api.aladhan.com/v1/timingsByCity", {
      params: {
        country: ncontry,
        city: ncity,
      },
    })
    .then(function (response) {
      let timings = response.data.data.timings;
      let date = response.data.data.date;
      let hijriDate = date.hijri.date;
      let gregorianDate = date.gregorian.date;
      console.log(hijriDate, gregorianDate);
      let Fajr = timings.Fajr;
      let Dhuhr = timings.Dhuhr;
      let Asr = timings.Asr;
      let Sunrise = timings.Sunrise;
      let Isha = timings.Isha;
      let Imsak = timings.Imsak;
      fillDataInHtml(
        Fajr,
        Dhuhr,
        Asr,
        Sunrise,
        Isha,
        Imsak,
        cityname,
        hijriDate,
        gregorianDate
      );
    })
    .catch(function (error) {
      console.log(error);
    });
}
function fillDataInHtml(
  Fajr,
  Dhuhr,
  Asr,
  Sunrise,
  Isha,
  Imsak,
  cityname,
  hijriDate,
  gregorianDate
) {
  document.getElementById(
    "higridate"
  ).innerHTML = `<h1 id="hegredatee" >${hijriDate}</h1>`;
  document.getElementById(
    "meladedate"
  ).innerHTML = `<h1 id="hegredatee" >${gregorianDate}</h1>`;
  let content = `
<tr>
<th scope="row">${cityname}</th>
  <td>${Fajr}</td>
  <td>${Dhuhr}</td>
  <td>${Asr}</td>
  <td>${Sunrise}</td>
  <td>${Isha}</td>
  <td>${Imsak}</td>
</tr>`;
  document.getElementById("tabledata").innerHTML += content;
}
function fillinitial() {
  let currentCountryCode = "LB";
  let currentCities = countries[0].cities;
  for (currentcity of currentCities) {
    getTimeByCity(currentCountryCode, currentcity.code, currentcity.name);
  }
}
fillSpinnerTable();
fillinitial();
