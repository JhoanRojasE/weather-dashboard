const apiKey = "2d766fc0630c60dec177b391207e3e91";

let chart;

$(document).ready(function () {
  getUserLocation();

  $("#searchBtn").click(searchCity);

  $("#cityInput").keypress(function (e) {
    if (e.which === 13) {
      searchCity();
    }
  });

  $("#cityInput").on("input", function () {
    let value = $(this).val();

    if (value.length < 2) {
      $("#suggestions").empty();
      return;
    }

    $.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`,
    )

      .done(function (data) {
        let html = "";

        data.forEach((city) => {
          html += `<div class="suggestion">${city.name}, ${city.country}</div>`;
        });

        $("#suggestions").html(html);
      });

      if(!$(e.target).closest(".search-container").length){
        $("#suggestions").empty();
      }
  });

  $(document).on("click", ".suggestion", function () {
    $("#cityInput").val($(this).text());

    $("#suggestions").empty();

    searchCity();
  });
});

function searchCity() {
  let city = $("#cityInput").val().split(",")[0];

  $("#suggestions").empty();

  if (!city) {
    showToast("Porfavor ingrese una ciudad");

    return;
  }

  loadWeather(city);
}

function loadWeather(city) {
  showLoader(true);

  $.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${apiKey}`,
  )

    .done(function (data) {
      $("#cityTitle").text(data.name);

      renderWeather(data);
    })

    .fail(function(){

      resetWeatherUI();

      $("#weatherData").html(`
        <div class="placeholder">
          <span class="material-symbols-outlined icon-large">error</span>
          <p>Ciudad no encontrada</p>
        </div>
      `);

      showToast("No se pudo encontrar la ciudad");

    })

    .always(function () {
      showLoader(false);
    });

  loadForecast(city);
}


function resetWeatherUI(){

  $("#cityTitle").text("");

  $("#weatherData").html(`
    <div class="placeholder">
      <span class="material-symbols-outlined icon-large">cloud</span>
      <p>Introduce una ciudad para ver el clima</p>
    </div>
  `);

  if(chart){
    chart.destroy();
    chart = null;
  }

}


function renderWeather(data) {
  $("#weatherData").html(`

    <div class="weather-grid">

        <div class="weather-card">

            <span class="material-symbols-outlined">
                device_thermostat
            </span>

            <span>Temperatura</span>

            <h3>${data.main.temp} °C</h3>

        </div>

        <div class="weather-card">

            <span class="material-symbols-outlined">
                water_drops
            </span>

            <span>Humedad</span>

            <h3>${data.main.humidity}%</h3>

        </div>

        <div class="weather-card">

            <span class="material-symbols-outlined">
                cloud
            </span>

            <span>Condición</span>

            <h3>${data.weather[0].description}</h3>

        </div>

    </div>

  `);
}

function loadForecast(city) {
  $.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`,
  )

    .done(function (data) {
      let temps = [];
      let labels = [];

      data.list.slice(0, 8).forEach((item) => {
        temps.push(item.main.temp);

        labels.push(item.dt_txt.split(" ")[1].slice(0, 5));
      });

      renderChart(labels, temps);
    });
}

function renderChart(labels, data) {
  if (chart) {
    chart.destroy();
  }

  const ctx = document.getElementById("forecastChart");

  chart = new Chart(ctx, {
    type: "line",

    data: {
      labels: labels,
      datasets: [
        {
          label: "Temperatura °C",
          data: data,
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59,130,246,0.2)",
          tension: 0.4,
        },
      ],
    },

    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

function showToast(msg) {
  $("#toast").text(msg).fadeIn();

  setTimeout(() => {
    $("#toast").fadeOut();
  }, 3000);
}

function showLoader(show) {
  if (show) {
    $("#loader").css("display", "flex");
  } else {
    $("#loader").hide();
  }
}

function getUserLocation() {
  if (!navigator.geolocation) {
    return;
  }

  navigator.geolocation.getCurrentPosition((pos) => {
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;

    $.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
    )

      .done(function (data) {
        $("#currentLocation").text(data.name);

        $("#currentTemp").text(`${data.main.temp} °C`);
      });
  });
}
