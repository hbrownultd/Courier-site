document.querySelector("form").addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your delivery request has been received.");

this.reset();

});
