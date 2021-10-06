var data;
var rawFile = new XMLHttpRequest();
rawFile.overrideMimeType("application/json");
rawFile.open("GET", "data.json", true);
rawFile.onreadystatechange = function () {
  if (rawFile.readyState === 4 && rawFile.status == "200") {
    data = JSON.parse(rawFile.responseText);
    assignData("weekly");
  }
};
rawFile.send(null);

var ul = document.getElementById("timeframes");

function assignData(timeframe) {
  document.getElementById("workHours").innerHTML = data[0].timeframes[timeframe].current;
  document.getElementById("workPrev").innerHTML = data[0].timeframes[timeframe].previous;

  document.getElementById("playHours").innerHTML = data[1].timeframes[timeframe].current;
  document.getElementById("playPrev").innerHTML = data[1].timeframes[timeframe].previous;

  document.getElementById("studyHours").innerHTML = data[2].timeframes[timeframe].current;
  document.getElementById("studyPrev").innerHTML = data[2].timeframes[timeframe].previous;

  document.getElementById("exerciseHours").innerHTML = data[3].timeframes[timeframe].current;
  document.getElementById("exercisePrev").innerHTML = data[3].timeframes[timeframe].previous;

  document.getElementById("socialHours").innerHTML = data[4].timeframes[timeframe].current;
  document.getElementById("socialPrev").innerHTML = data[4].timeframes[timeframe].previous;

  document.getElementById("selfCareHours").innerHTML = data[5].timeframes[timeframe].current;
  document.getElementById("selfCarePrev").innerHTML = data[5].timeframes[timeframe].previous;
}

ul.addEventListener("click", function (element) {
  if (element.target && element.target.matches("li a")) {
    if (document.querySelector("#timeframes a.active") !== null) {
      document.querySelector("#timeframes a.active").classList.remove("active");
      var time;
      var timeframe = element.target.id;
      switch (timeframe) {
        case "daily":
          time = "Day";
          break;
        case "weekly":
          time = "Week";
          break;
        case "monthly":
          time = "Month";
          break;
      }
      assignData(timeframe);

      Array.from(document.getElementsByClassName("time")).map(function (e) {
        e.innerHTML = time;
      });
    }
    element.target.className = "active";
  }
});