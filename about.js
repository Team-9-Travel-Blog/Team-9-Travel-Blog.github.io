window.addEventListener("DOMContentLoaded", function() {
  
  
  
  var detailsForm = document.getElementById("details-form");
  var submitButton = document.getElementById("submit-button");
  var thanksMessage = document.getElementById("thanks-message");

  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    detailsForm.style.opacity = "0";
    thanksMessage.style.opacity = "1";
    thanksMessage.style.paddingTop = "160px";
    setTimeout(function() {
      detailsForm.reset();
      thanksMessage.style.opacity = "0";
      thanksMessage.style.paddingTop = "200px";
      detailsForm.style.opacity = "1";
    }, 3000);
  });
  
  
  
});