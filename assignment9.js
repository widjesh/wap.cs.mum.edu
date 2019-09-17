$(function() {
  $("#submit").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let street = $("#street").val();
    let state = $("#state").val();
    let zip = $("#zip").val();
    let seats = $("#seat").val();
    let taxi = $("input[type = radio]").is(":checked");
    let extra = $("input[type=checkbox]").is(":checked");

    if (name === "") {
      $("#error").append(
        $("<p>", { class: "errorMsg", text: "Name field is required" })
      );
    }

    if (street === "") {
      $("#error").append(
        $("<p>", { class: "errorMsg", text: "Street field is required" })
      );
    }

    if (zip === "") {
      $("#error").append(
        $("<p>", { class: "errorMsg", text: "Zip field is required" })
      );
    } else {
      if (zip.length !== 5) {
        $("#error").append(
          $("<p>", { class: "errorMsg", text: "Zip field must be 5 digits" })
        );
      }
    }

    if (seats === "") {
      $("#error").append(
        $("<p>", { class: "errorMsg", text: "Seat field is required" })
      );
      
    } else {
      let seatNumber = parseInt(seats);
      if (isNaN(seatNumber)) {
        $("#error").append(
          $("<p>", { class: "errorMsg", text: "Only Number is allowed" })
        );
      } else if (seatNumber > 200) {
        $("#error").append(
          $("<p>", {
            class: "errorMsg",
            text: "You cannot book more than 200 seats"
          })
        );
      }
    }
    if (!taxi) {
      $("#error").append(
        $("<p>", { class: "errorMsg", text: "You must select taxi type" })
      );
    }

    if (!extra) {
      $("#error").append(
        $("<p>", { class: "errorMsg", text: "You must select extra type" })
      );
    }
  });
});
