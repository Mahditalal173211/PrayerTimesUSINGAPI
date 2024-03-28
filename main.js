const regions = {
    DZ: [
      { name: "Algiers Province", code: "16" },
      { name: "Oran Province", code: "31" },
      { name: "Constantine Province", code: "25" },
      { name: "Annaba Province", code: "23" },
      { name: "Tlemcen Province", code: "13" },
    ],
    BH: [
      { name: "Capital Governorate", code: "13" },
      { name: "Muharraq Governorate", code: "15" },
      { name: "Northern Governorate", code: "17" },
      { name: "Southern Governorate", code: "14" },
    ],
    KM: [
      { name: "Grande Comore (Ngazidja)", code: "G" },
      { name: "Anjouan (Ndzuwani)", code: "A" },
      { name: "Mohéli (Mwali)", code: "M" },
    ],
    DJ: [
      { name: "Djibouti (Djibouti Region)", code: "DJ" },
      { name: "Ali Sabieh (Ali Sabieh Region)", code: "AS" },
      { name: "Dikhil (Dikhil Region)", code: "DI" },
      { name: "Obock (Obock Region)", code: "OB" },
      { name: "Arta (Arta Region)", code: "AR" },
    ],
    EG: [
      { name: "Cairo Governorate", code: "C" },
      { name: "Alexandria Governorate", code: "BH" },
      { name: "Giza Governorate", code: "G" },
      { name: "Dakahlia Governorate", code: "DK" },
      { name: "Gharbia Governorate", code: "GH" },
    ],
    IQ: [
      { name: "Baghdad Governorate", code: "BG" },
      { name: "Basra Governorate", code: "BA" },
      { name: "Mosul Governorate", code: "MU" },
      { name: "Sulaymaniyah Governorate", code: "SU" },
      { name: "Erbil Governorate", code: "AR" },
    ],
    JO: [
      { name: "Amman Governorate", code: "AM" },
      { name: "Irbid Governorate", code: "IR" },
      { name: "Zarqa Governorate", code: "ZA" },
      { name: "Balqa Governorate", code: "BA" },
      { name: "Mafraq Governorate", code: "MA" },
    ],
    KW: [
      { name: "Capital Governorate", code: "KU" },
      { name: "Hawalli Governorate", code: "HA" },
      { name: "Farwaniya Governorate", code: "FA" },
      { name: "Ahmadi Governorate", code: "AH" },
      { name: "Jahra Governorate", code: "JA" },
    ],
    LB: [
      { name: "Beirut Governorate", code: "Beyrouth" },
      { name: "Mount Lebanon Governorate", code: "JL" },
      { name: "North Governorate", code: "AS" },
      { name: "South Governorate", code: "JA" },
      { name: "Nabatieh Governorate", code: "NA" },
    ],
    LY: [
      { name: "Tripoli District", code: "TB" },
      { name: "Benghazi District", code: "BA" },
      { name: "Misrata District", code: "MJ" },
      { name: "Sabha District", code: "SB" },
      { name: "Bayda District", code: "BJ" },
    ],
    MR: [
      { name: "Nouakchott District", code: "NKC" },
      { name: "Trarza Region", code: "10" },
      { name: "Hodh Ech Chargui Region", code: "01" },
      { name: "Guidimaka Region", code: "04" },
      { name: "Gorgol Region", code: "03" },
    ],
    MA: [
      { name: "Casablanca-Settat Region", code: "6" },
      { name: "Rabat-Salé-Kénitra Region", code: "5" },
      { name: "Marrakech-Safi Region", code: "7" },
      { name: "Fès-Meknès Region", code: "3" },
      { name: "Tanger-Tétouan-Al Hoceïma Region", code: "1" },
    ],
    OM: [
      { name: "Muscat Governorate", code: "MA" },
      { name: "Dhofar Governorate", code: "ZU" },
      { name: "Al Batinah North Governorate", code: "BJ" },
      { name: "Al Batinah South Governorate", code: "BS" },
      { name: "Ash Sharqiyah North Governorate", code: "SJ" },
    ],
    PS: [
      { name: "Gaza Governorate", code: "GZA" },
      { name: "Hebron Governorate", code: "HB" },
      { name: "Jenin Governorate", code: "JN" },
      { name: "Jerusalem Governorate", code: "JEM" },
      { name: "Nablus Governorate", code: "NB" },
    ],
    QA: [
      { name: "Ad Dawhah Municipality", code: "DA" },
      { name: "Al Wakrah Municipality", code: "WA" },
      { name: "Al Khor Municipality", code: "KH" },
      { name: "Madinat ash Shamal Municipality", code: "MS" },
      { name: "Al Rayyan Municipality", code: "RA" },
    ],
    SA: [
      { name: "Riyadh Province", code: "01" },
      { name: "Makkah Province", code: "02" },
      { name: "Madinah Province", code: "03" },
      { name: "Eastern Province", code: "04" },
      { name: "Asir Province", code: "14" },
    ],
    SO: [
      { name: "Banaadir", code: "SO-BN" },
      { name: "Lower Shebelle", code: "SO-LW" },
      { name: "Middle Shebelle", code: "SO-MI" },
      { name: "Hiraan", code: "SO-HI" },
      { name: "Mudug", code: "SO-MU" },
    ],
    SD: [
      { name: "Khartoum State", code: "KH" },
      { name: "North Darfur", code: "DN" },
      { name: "South Darfur", code: "DS" },
      { name: "Kassala", code: "KA" },
      { name: "Blue Nile", code: "NB" },
    ],
    SY: [
      { name: "Damascus Governorate", code: "DI" },
      { name: "Aleppo Governorate", code: "HL" },
      { name: "Homs Governorate", code: "HM" },
      { name: "Hama Governorate", code: "HA" },
      { name: "Latakia Governorate", code: "LA" },
    ],
    TN: [
      { name: "Tunis Governorate", code: "11" },
      { name: "Sfax Governorate", code: "61" },
      { name: "Sousse Governorate", code: "51" },
      { name: "Nabeul Governorate", code: "21" },
      { name: "Ariana Governorate", code: "12" },
    ],
    AE: [
      { name: "Abu Dhabi Emirate", code: "AZ" },
      { name: "Dubai Emirate", code: "DU" },
      { name: "Sharjah Emirate", code: "SH" },
      { name: "Ajman Emirate", code: "AJ" },
      { name: "Fujairah Emirate", code: "FU" },
    ],
    YE: [
      { name: "Sana'a Governorate", code: "SA" },
      { name: "Aden Governorate", code: "AD" },
      { name: "Taiz Governorate", code: "TA" },
      { name: "Al Hudaydah Governorate", code: "HU" },
      { name: "Ibb Governorate", code: "IB" },
    ],
  };
 let counter=0;
let city = [];
let cityNames = [];
function fillIntialValuesOfLebanon() {
  getPrayerTimes("LB",regions.LB[0].code,regions.LB[0].name);
  getPrayerTimes("LB",regions.LB[1].code,regions.LB[1].name);
  getPrayerTimes("LB",regions.LB[2].code,regions.LB[2].name);
  getPrayerTimes("LB",regions.LB[3].code,regions.LB[3].name);
  getPrayerTimes("LB",regions.LB[4].code,regions.LB[4].name);

}
fillIntialValuesOfLebanon();
document
  .getElementById("countrySelect")
  .addEventListener("change", function () {
    document.getElementById("tabledata").innerHTML = ``;
    let i=0;
    let country = document.getElementById("countrySelect").value;
    switch (country) {
      case "DZ":
        city = [];
    
        cityNames = [];
        for (i; i < regions.DZ.length; i++) {
          city.push(regions.DZ[i].code);
          cityNames.push(regions.DZ[i].name);
        }
        filltable(country, city, cityNames, i);

        // code block to be executed if expression matches value1
        break;
      case "BH":
        city = [];
        cityNames = [];
        for (i; i < regions.BH.length; i++) {
          city.push(`${regions.BH[i].code}`);
          cityNames.push(regions.BH[i].name);
        }
        filltable(country, city,cityNames,i);
        // code block to be executed if expression matches value1
        break;
      case "KM":
        city = [];
    
        cityNames = [];
        for (i; i < regions.KM.length; i++) {
          city.push(regions.KM[i].code);
          cityNames.push(regions.KM[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "DJ":
        city = [];
    
        cityNames = [];
        for (i; i < regions.DJ.length; i++) {
          city.push(regions.DJ[i].code);
          cityNames.push(regions.DJ[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      // code block to be executed if expression matches value1
      case "EG":
        city = [];
    
        cityNames = [];
        for (i; i < regions.EG.length; i++) {
          city.push(regions.EG[i].code);
          cityNames.push(regions.EG[i].name);
        }
        filltable(country, city, cityNames, i);
        break;
      case "IQ":
        city = [];
    
        cityNames = [];
        for (i; i < regions.IQ.length; i++) {
          city.push(regions.IQ[i].code);
          cityNames.push(regions.IQ[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "JO":
        city = [];
    
        cityNames = [];
        for (i; i < regions.JO.length; i++) {
          city.push(regions.JO[i].code);
          cityNames.push(regions.JO[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "KW":
        city = [];
    
        cityNames = [];
        for (i; i < regions.KW.length; i++) {
          city.push(regions.KW[i].code);
          cityNames.push(regions.KW[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "LB":
        city = [];
    
        cityNames = [];
        for (i; i < regions.LB.length; i++) {
          city.push(regions.LB[i].code);
          cityNames.push(regions.LB[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "LY":
        city = [];
    
        cityNames = [];
        for (i; i < regions.LY.length; i++) {
          city.push(regions.LY[i].code);
          cityNames.push(regions.LY[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "MR":
        city = [];
    
        cityNames = [];
        for (i; i < regions.MR.length; i++) {
          city.push(regions.MR[i].code);
          cityNames.push(regions.MR[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "MA":
        city = [];
    
        cityNames = [];
        for (i; i < regions.MA.length; i++) {
          city.push(regions.MA[i].code);
          cityNames.push(regions.MA[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "OM":
        city = [];
    
        cityNames = [];
        for (i; i < regions.OM.length; i++) {
          city.push(regions.OM[i].code);
          cityNames.push(regions.OM[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "PS":
        city = [];
    
        cityNames = [];
        for (i; i < regions.PS.length; i++) {
          city.push(regions.PS[i].code);
          cityNames.push(regions.PS[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "QA":
        city = [];
    
        cityNames = [];
        for (i; i < regions.QA.length; i++) {
          city.push(regions.QA[i].code);
          cityNames.push(regions.QA[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "SA":
        city = [];
    
        cityNames = [];
        for (i; i < regions.SA.length; i++) {
          city.push(regions.SA[i].code);
          cityNames.push(regions.SA[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "SO":
        city = [];
    
        cityNames = [];
        for (i; i < regions.SO.length; i++) {
          city.push(regions.SO[i].code);
          cityNames.push(regions.SO[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "SD":
        city = [];
    
        cityNames = [];
        for (i; i < regions.SD.length; i++) {
          city.push(regions.SD[i].code);
          cityNames.push(regions.SD[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "SY":
        city = [];
    
        cityNames = [];
        for (i; i < regions.SY.length; i++) {
          city.push(regions.SY[i].code);
          cityNames.push(regions.SY[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "TN":
        city = [];
    
        cityNames = [];
        for (i; i < regions.TN.length; i++) {
          city.push(regions.TN[i].code);
          cityNames.push(regions.TN[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "AE":
        city = [];
    
        cityNames = [];
        for (i; i < regions.AE.length; i++) {
          city.push(regions.AE[i].code);
          cityNames.push(regions.AE[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      case "YE":
        city = [];
    
        cityNames = [];
        for (i; i < regions.YE.length; i++) {
          city.push(regions.YE[i].code);
          cityNames.push(regions.YE[i].name);
        }
        filltable(country, city, cityNames, i);
        // code block to be executed if expression matches value1
        break;
      // additonal cases as needed
      default:
        alert("error");
    }
  });



function filltable(country, city, cityNames, i) {
  for (let m = 0; m < i; m++) {
    getPrayerTimes(country, city[m], cityNames[m]);
  }
}

// function handleCountryChange() {
//   document.getElementById("tabledata").innerHTML = ``;
//   let country = document.getElementById("countrySelect").value;
//   switch (country) {
//     case "DZ":
//       let i = 0;
//       city = [];
//       cityNames = [];
//       for (i; i < regions.DZ.length; i++) {
//         city.push(regions.DZ[i].code);
//         cityNames.push(regions.DZ[i].name);
//       }
//       filltable(country, city, cityNames, i);

//       // code block to be executed if expression matches value1
//       break;
//     case "BH":
//       city = [];
//       for (var i = 0; i < regions.DZ.length; i++) {
//         city.push(`${regions.DZ[i].code}`);
//       }
//       filltable(country, city);
//       // code block to be executed if expression matches value1
//       break;
//     case "KM":
//       // code block to be executed if expression matches value1
//       break;
//     case "DJ":
//       // code block to be executed if expression matches value1
//       break;
//     // code block to be executed if expression matches value1
//     case "EG":
//       break;
//     case "IQ":
//       // code block to be executed if expression matches value1
//       break;
//     case "JO":
//       // code block to be executed if expression matches value1
//       break;
//     case "KW":
//       // code block to be executed if expression matches value1
//       break;
//     case "LB":
//       // code block to be executed if expression matches value1
//       break;
//     case "LY":
//       // code block to be executed if expression matches value1
//       break;
//     case "MR":
//       // code block to be executed if expression matches value1
//       break;
//     case "MA":
//       // code block to be executed if expression matches value1
//       break;
//     case "OM":
//       // code block to be executed if expression matches value1
//       break;
//     case "PS":
//       // code block to be executed if expression matches value1
//       break;
//     case "QA":
//       // code block to be executed if expression matches value1
//       break;
//     case "SA":
//       // code block to be executed if expression matches value1
//       break;
//     case "SO":
//       // code block to be executed if expression matches value1
//       break;
//     case "SD":
//       // code block to be executed if expression matches value1
//       break;
//     case "SY":
//       // code block to be executed if expression matches value1
//       break;
//     case "TN":
//       // code block to be executed if expression matches value1
//       break;
//     case "AE":
//       // code block to be executed if expression matches value1
//       break;
//     case "YE":
//       // code block to be executed if expression matches value1
//       break;
//     // additonal cases as needed
//     default:
//       alert("error");
//   }
// }
function getPrayerTimes(country, city, cityName) {
   
  axios
    .get(
      `http://api.aladhan.com/v1/timingsByCity?country=${country}&city=${city}&method=3`
    )
    .then((response) => {
        
      let timing = response.data.data.timings;
      let date = response.data.data.date;
      let x=parseDate(date.gregorian.date)
      let y=parseDate(date.hijri.date)
      let weekdayH=`${date.hijri.month.number} شهر ${date.hijri.month.ar}`;
      let weekdayM=`${date.gregorian.month.number} شهر ${date.gregorian.month.en}`;
      let cuurentday=date.hijri.weekday.ar;
      fillTimess(counter,x,y,weekdayH,weekdayM,cuurentday)
      counter++;
    
      //[DD,MM,YY]
       
      let meladeDate = date.readable;

    //   document.getElementById("meladdate").innerHTML = gregorianDate[0];
      let fajrtime = timing.Fajr;
      let dhuhrtime = timing.Dhuhr;
      let asrtime = timing.Asr;
      let maghribtime = timing.Maghrib;
      let imsak = timing.Imsak;
      let sunsettime = timing.Sunset;
      fillTime(
        fajrtime,
        dhuhrtime,
        asrtime,
        maghribtime,
        sunsettime,
        imsak,
        meladeDate,
        city,
        cityName
      );

      // Return the axios promise for chaining
    });
}
function parseDate(dateString) {
    const [day, month, year] = dateString.split('-').map(Number);
    return [day, month, year];
}
 function fillTimess(counter,x,y,weekdayH,weekdayM,cuurentday){
    if(counter===0){
         document.getElementById("meladdate").innerHTML=x[0]
         document.getElementById("hegredatee").innerHTML=y[0]
         document.getElementById("weekdayH").innerHTML=weekdayH
         document.getElementById("melededateM").innerHTML=weekdayM
         document.getElementById("currentday").innerHTML=`<h2>${cuurentday}</h2>`
    }else{
        
    }
 }
function fillTime(
  fajrtime,
  dhuhrtime,
  asrtime,
  maghribtime,
  sunsettime,
  imsak,
  meladeDate,
  city,
  cityName
) {
  let elements = document.getElementsByClassName("tabledata");
  let content = `  <tr>
      <th  scope="row">${cityName}</th>
      <td>${fajrtime}</td>
      <td>${dhuhrtime}</td>
      <td>${asrtime}</td>
      <td>${maghribtime}</td>
      <td>${sunsettime}</td>
      <td>@${imsak}</td>
    </tr>`;
  document.getElementById("tabledata").innerHTML += content;
  // for (element of elements) {
  //   timecheck=checkAMorPM(times[i]);
  //   let content = `<h1>${names[i]}</h1>
  //       <h3 class="time">${timecheck}</h3>`;
  //   i++;
  //   element.innerHTML = content;
  // }
}
/*

let city = ["Beyrouth", "Ash Shimāl", "Al Janūb", "Béqaa", "Mont-Liban"];
function fillIntialValuesOfLebanon() {
  getPrayerTimes(city[0]);
  getPrayerTimes(city[1]);
  getPrayerTimes(city[2]);
  getPrayerTimes(city[3]);
  getPrayerTimes(city[4]);
}
fillIntialValuesOfLebanon();

function handleCountryChange() {
  document.getElementById("tabledata").innerHTML = ``;
  let country = document.getElementById("countrySelect").value;

  getPrayerTimes(country,);
}

function getPrayerTimes(city) {
  axios
    .get(
      `http://api.aladhan.com/v1/timingsByCity?country=LB&city=${city}&method=0`
    )
    .then((response) => {
      let timing = response.data.data.timings;
      let date = response.data.data.date;
      let meladeDate = date.readable;
      document.getElementById("higridate").innerHTML = meladeDate;
      let fajrtime = timing.Fajr;
      let dhuhrtime = timing.Dhuhr;
      let asrtime = timing.Asr;
      let maghribtime = timing.Maghrib;
      let imsak = timing.Imsak;
      let sunsettime = timing.Sunset;
      fillTime(
        fajrtime,
        dhuhrtime,
        asrtime,
        maghribtime,
        sunsettime,
        imsak,
        meladeDate,
        city
      );

      // Return the axios promise for chaining
    });
}

function fillTime(
  fajrtime,
  dhuhrtime,
  asrtime,
  maghribtime,
  sunsettime,
  imsak,
  meladeDate,
  city
) {
  let elements = document.getElementsByClassName("tabledata");
  let content = `  <tr>
    <th  scope="row">${city}</th>
    <td>${fajrtime}</td>
    <td>${dhuhrtime}</td>
    <td>${asrtime}</td>
    <td>${maghribtime}</td>
    <td>${sunsettime}</td>
    <td>@${imsak}</td>
  </tr>`;
  document.getElementById("tabledata").innerHTML += content;
  // for (element of elements) {
  //   timecheck=checkAMorPM(times[i]);
  //   let content = `<h1>${names[i]}</h1>
  //       <h3 class="time">${timecheck}</h3>`;
  //   i++;
  //   element.innerHTML = content;
  // }
}
*/
/* 
beirut:
timings": {
            "Fajr": "04:16",
            "Sunrise": "05:30",
            "Dhuhr": "11:41",
            "Asr": "15:12",
            "Sunset": "17:53",
            "Maghrib": "18:09",
            "Isha": "18:58",
            "Imsak": "04:06",
            "Midnight": "23:42",
            "Firstthird": "21:46",
            "Lastthird": "01:38"
        },
        tripoli
         "timings": {
            "Fajr": "05:48",
            "Sunrise": "07:01",
            "Dhuhr": "13:13",
            "Asr": "16:43",
            "Sunset": "19:24",
            "Maghrib": "19:39",
            "Isha": "20:28",
            "Imsak": "05:38",
            "Midnight": "01:13",
            "Firstthird": "23:17",
            "Lastthird": "03:09"
        },
        "timings": {
            "Fajr": "04:16",
            "Sunrise": "05:30",
            "Dhuhr": "11:41",
            "Asr": "15:12",
            "Sunset": "17:53",
            "Maghrib": "18:09",
            "Isha": "18:58",
            "Imsak": "04:06",
            "Midnight": "23:42",
            "Firstthird": "21:46",
            "Lastthird": "01:38"
        },
*/
