//Variables
const modal = document.querySelector(".modal");
const trigger = document.querySelectorAll(".expand");
const close = document.querySelector(".modal__close");

const modal2 = document.querySelector('.modalDetails')
const trigger2 = document.querySelectorAll(".more");
const close2 = document.querySelector(".modalDetails__close");


//Calls
function callModal(element) {
  element.classList.toggle("show");
}

function windowOnClick(event) {
    if (event.target === modal) {
        callModal(modal);
    }
    if (event.target === modal2) {
        callModal(modal2);
    }
}


for (var i = 0; i < trigger.length; i++) {
  trigger[i].addEventListener("click", function(event) {
    event.preventDefault();
    callModal(modal);
  });
}

for (var i = 0; i < trigger2.length; i++) {
  trigger2[i].addEventListener("click", function(event) {
    event.preventDefault();
    callModal(modal2);
  });
}

close.addEventListener("click", function() {
  callModal(modal);
});

close2.addEventListener("click", function() {
  callModal(modal2);
});

window.addEventListener("click", windowOnClick);
