//fillSpinnerTable
let countries = [
  {
    countrycode: "LB",
    countryName: "Lebanon",
    cities: [
      { name: "Beirut", code: "BEY" },
      { name: "Tripoli", code: "KYE" },
      { name: "Sidon", code: "SDT" },
      { name: "Tyre", code: "TYR" },
      { name: "Jounieh", code: "JIE" }
    ]
  },
  {
    countrycode: "SA",
    countryName: "Saudi Arabia",
    cities: [
      { name: "Riyadh", code: "RUH" },
      { name: "Jeddah", code: "JED" },
      { name: "Mecca", code: "MEC" },
      { name: "Medina", code: "MED" },
      { name: "Dammam", code: "DMM" }
    ]
  },
  {
    countrycode: "EG",
    countryName: "Egypt",
    cities: [
      { name: "Cairo", code: "CAI" },
      { name: "Alexandria", code: "ALY" },
      { name: "Luxor", code: "LXR" },
      { name: "Aswan", code: "ASW" },
      { name: "Sharm El Sheikh", code: "SSH" }
    ]
  },
  {
    countrycode: "DZ",
    countryName: "Algeria",
    cities: [
      { name: "Algiers", code: "ALG" },
      { name: "Oran", code: "ORN" },
      { name: "Constantine", code: "CZL" },
      { name: "Annaba", code: "AAE" },
      { name: "Tlemcen", code: "TLM" }
    ]
  },
  {
    countrycode: "MA",
    countryName: "Morocco",
    cities: [
      { name: "Casablanca", code: "CAS" },
      { name: "Rabat", code: "RBA" },
      { name: "Fes", code: "FEZ" },
      { name: "Marrakesh", code: "RAK" },
      { name: "Agadir", code: "AGA" }
    ]
  },
  {
    countrycode: "SD",
    countryName: "Sudan",
    cities: [
      { name: "Khartoum", code: "KRT" },
      { name: "Omdurman", code: "OMD" },
      { name: "Port Sudan", code: "PZU" },
      { name: "Kassala", code: "KSL" },
      { name: "El Obeid", code: "EBD" }
    ]
  },
  {
    countrycode: "IQ",
    countryName: "Iraq",
    cities: [
      { name: "Baghdad", code: "BGW" },
      { name: "Basra", code: "BSR" },
      { name: "Mosul", code: "OSM" },
      { name: "Erbil", code: "EBL" },
      { name: "Kirkuk", code: "KIK" }
    ]
  },
  {
    countrycode: "SY",
    countryName: "Syria",
    cities: [
      { name: "Damascus", code: "DAM" },
      { name: "Aleppo", code: "AL" },
      { name: "Dar'ā", code: "DR" },
      { name: "Dayr az Zawr", code: "DY" },
      { name: "Latakia", code: "LA" }
    ]
  },
  {
    countrycode: "YE",
    countryName: "Yemen",
    cities: [
      { name: "Sana'a", code: "SAH" },
      { name: "Aden", code: "ADE" },
      { name: "Taiz", code: "TAI" },
      { name: "Al Hudaydah", code: "HOD" },
      { name: "Ibb", code: "IBB" }
    ]
  },
  {
    countrycode: "LY",
    countryName: "Libya",
    cities: [
      { name: "Tripoli", code: "TIP" },
      { name: "Benghazi", code: "BEN" },
      { name: "Misrata", code: "MRA" },
      { name: "Zawiya", code: "ZAW" },
      { name: "Sirte", code: "SIR" }
    ]
  },
  {
    countrycode: "TN",
    countryName: "Tunisia",
    cities: [
      { name: "Tunis", code: "TUN" },
      { name: "Sfax", code: "SFA" },
      { name: "Sousse", code: "QSF" },
      { name: "Kairouan", code: "QKN" },
      { name: "Gabès", code: "GAE" }
    ]
  },
  {
    countrycode: "JO",
    countryName: "Jordan",
    cities: [
      { name: "Amman", code: "AMM" },
      { name: "Zarqa", code: "ADJ" },
      { name: "Irbid", code: "QIR" },
      { name: "Aqaba", code: "AQJ" },
      { name: "Madaba", code: "QMD" }
    ]
  },
 
  {
    countrycode: "PS",
    countryName: "Palestine",
    cities: [
      { name: "Jerusalem", code: "JRS" },
      { name: "Gaza City", code: "GZA" },
      { name: "Hebron", code: "HBN" },
      { name: "Nablus", code: "NBS" },
      { name: "Bethlehem", code: "BTH" }
    ]
  },
  {
    countrycode: "KW",
    countryName: "Kuwait",
    cities: [
      { name: "Kuwait City", code: "KWI" },
      { name: "Hawalli", code: "HAI" },
      { name: "Farwaniya", code: "FAH" },
      { name: "Al Ahmadi", code: "AAM" },
      { name: "As Salimiyah", code: "SAH" }
    ]
  },
  {
    countrycode: "OM",
    countryName: "Oman",
    cities: [
      { name: "Muscat", code: "MCT" },
      { name: "Salalah", code: "SLL" },
      { name: "Sohar", code: "OHS" },
      { name: "Nizwa", code: "NIZ" },
      { name: "Sur", code: "SUH" }
    ]
  },
  {
    countrycode: "QA",
    countryName: "Qatar",
    cities: [
      { name: "Doha", code: "DOH" },
      { name: "Al Wakrah", code: "ALK" },
      { name: "Al Rayyan", code: "RAY" },
      { name: "Umm Salal", code: "UML" },
      { name: "Al Khor", code: "AKH" }
    ]
  },
  {
    countrycode: "BH",
    countryName: "Bahrain",
    cities: [
      { name: "Manama", code: "BAH" },
      { name: "Riffa", code: "RIF" },
      { name: "Muharraq", code: "MUH" },
      { name: "Hamad Town", code: "HTN" },
      { name: "A'ali", code: "ALI" }
    ]
  },
  {
    countrycode: "KM",
    countryName: "Comoros",
    cities: [
      { name: "Moroni", code: "YVA" },
      { name: "Mutsamudu", code: "MUT" },
      { name: "Fomboni", code: "FOM" },
      { name: "Domoni", code: "DZA" },
      { name: "Sima", code: "SIM" }
    ]
  },
  {
    countrycode: "DJ",
    countryName: "Djibouti",
    cities: [
      { name: "Djibouti City", code: "JIB" },
      { name: "Ali Sabieh", code: "ASB" },
      { name: "Tadjoura", code: "TDJ" },
      { name: "Obock", code: "OBK" },
      { name: "Dikhil", code: "DIK" }
    ]
  },
  {
    countrycode: "MR",
    countryName: "Mauritania",
    cities: [
      { name: "Nouakchott", code: "NKC" },
      { name: "Nouadhibou", code: "NDB" },
      { name: "Kiffa", code: "KFA" },
      { name: "Kaédi", code: "KED" },
      { name: "Rosso", code: "RSO" }
    ]
  },
  {
    countrycode: "KM",
    countryName: "Comoros",
    cities: [
      { name: "Moroni", code: "YVA" },
      { name: "Mutsamudu", code: "MUT" },
      { name: "Fomboni", code: "FOM" },
      { name: "Domoni", code: "DZA" },
      { name: "Sima", code: "SIM" }
    ]
  },
  {
    countrycode: "SS",
    countryName: "South Sudan",
    cities: [
      { name: "Juba", code: "JUB" },
      { name: "Wau", code: "WUU" },
      { name: "Malakal", code: "MAK" },
      { name: "Bor", code: "BOR" },
      { name: "Aweil", code: "AWL" }
    ]
  }
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
    .get(" https://api.aladhan.com/v1/timingsByCity", {
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
  // document.getElementById(
  //   "higridate"
  // ).innerHTML = `<h1 id="hegredatee" >${hijriDate}</h1>`;
  // document.getElementById(
  //   "meladedate"
  // ).innerHTML = `<h1 id="hegredatee" >${gregorianDate}</h1>`;
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
//yrdy
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
function calendar(){
  var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var month=['January','February','March','April','May','June','July','August','September','October','November','December'];
  var d=new Date();
  setText('calendar-day', day[d.getDay()]);
  setText('calendar-date', d.getDate());
  setText('calendar-month-year', month[d.getMonth()]+' '+(1900+d.getYear()));
};

//this function will set the text value of 

function setText(id, val){
  if(val < 10){
      val = '0' + val;    //add leading 0 if val < 10
  }
  document.getElementById(id).innerHTML = val;
};

//call calendar() when page load
calendar();
/**
 * html
 * <div id="calendar">
  <p id="calendar-day"></p>
  <p id="calendar-date"></p>
  <p id="calendar-month-year"></p>
</div>
css
#calendar{
    width: 130px;
    height: 180px;
    background-color: cornflowerblue;
    color: #fff;
    border-radius: 5%;
    box-shadow: 0 4px 4px 0 rgba(50, 50, 50, 0.4);
}

#calendar>p{
    font-family: Verdana, Arial, sans-serif;
    padding: 10px 0;
    margin: 0;
    color: #fff;
    text-align: center;
}

#calendar-day{
    font-size: 16px;
}

#calendar-month-year{
    font-size: 14px;
}

#calendar-date{
    font-size: 64px;
    padding-top: 10px;
    padding-bottom: 0;
}
js
//this function will find today's date
function calendar(){
    var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var month=['January','February','March','April','May','June','July','August','September','October','November','December'];
    var d=new Date();
    setText('calendar-day', day[d.getDay()]);
    setText('calendar-date', d.getDate());
    setText('calendar-month-year', month[d.getMonth()]+' '+(1900+d.getYear()));
};

//this function will set the text value of 

function setText(id, val){
    if(val < 10){
        val = '0' + val;    //add leading 0 if val < 10
    }
    document.getElementById(id).innerHTML = val;
};

//call calendar() when page load
calendar();
 */
