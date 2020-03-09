let myString = "";


let submitButton = document.getElementById("submit-button");
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");

let myPoem = document.getElementById("my-poem");


// submitButton.addEventListener('click', printName);

submitButton.addEventListener('click', function(){
  
  console.log(firstName.value);
  console.log(lastName.value);

  myString+=firstName.value + " ";

  console.log(myString);

  myPoem.innerHTML = myString;


  
});







