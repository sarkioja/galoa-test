const div = document.querySelector('.schedule__byHour');
const title = document.querySelector('.schedule__selected-hour');
const hours = document.querySelectorAll('.schedule__hour');
const setHour = document.querySelectorAll('.schedule__period');
const currentHour = new Date().getHours();

highlightCurrentHour();

function highlightCurrentHour() {
  for (let i = 0; i < hours.length; i++) {
    let stringHour = hours[i].innerHTML[0] += hours[i].innerHTML[1];
    let color = window.getComputedStyle(hours[i]).getPropertyValue('background-color');

    if (stringHour == currentHour) {
        hours[i].classList.add("currentHour");
        hours[i].style.color = color;
        getHourSchedule(hours[i], stringHour, color);
    }
  selectedHourSchedule(hours[i], stringHour, color);
  }
}

function selectedHourSchedule(hour, stringHour, color) {
  hour.addEventListener("click", function() {
    getHourSchedule(hour, stringHour, color)
  })
}

function getHourSchedule(hour, stringHour, color) {
  div.style.backgroundColor = color;
  title.innerHTML = stringHour + 'h';

  for (var x = 0; x < setHour.length; x++) {
    setHour[x].innerHTML = stringHour;
  }
}
