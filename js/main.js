  var link = document.querySelector(".find-hotel-button");

  var popup = document.querySelector(".find-hotel-form");
  var close = document.querySelector(".find-hotel-button");

  var form = document.querySelector("form");
  var arrival = document.querySelector("[name=arrival]");
  var departure = document.querySelector("[name=departure]");

  popup.classList.add("find-hotel-show");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("find-hotel-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value) {
      evt.preventDefault();
      popup.classList.add("find-hotel-error");
    }
  });
