document.querySelector('[data-role="developers-authorisation-form"]').submit(function(e) {
  e.preventDefault();

  document.querySelector('#authResult').value = "Basic " +
    window.btoa(
      document.getElementById("username").value +
      ":" +
      document.getElementById("password").value
    )
})
