var inputField = document.getElementById("inputlang");
console.log(inputField);
inputField.addEventListener("keyup", function(e) {
  e.preventDefault();

fetch("/search")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    data = data.toLowerCase();
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
});
