// grab each HTML DOM element we want to manipulate with JavaScript
// the text in the quotes below refers to the specific IDs I created
// in HTML for the objects I want to change.
let inputText = document.getElementById("input-text");
let button = document.getElementById("my-button");
let recentLine = document.getElementById("recent-line");
let poemDisplay = document.getElementById("poem");

// create an empty string that we'll use as a placeholder for the poem
// your user constructs
let myPoem = "";

// onlick is an Event Listener that is listening for a user's mouse to
// click on whatever element it's attached to. In this case, I'm saying:
// "when the user clicks the button, do something"
button.onclick = function() {

	// create a string variable to hold on to the text the user
	// filled out in the input field (in this case, a line of poetry).
	// ('value' is an ATTRIBUTE of an HTML <input> element. Check out
	// line 6 in the HTML to see where I've set the 'value' attribute.)
	
	// store the text value whenever button is pressed
	let poemLine = inputText.value; 

	// Displays the last line they user typed above the poem by updating
	// the inner HTML of the <p> element we created in HTML to store
	// the text the user typed in. This line will change each time new
	// text is typed in the input box.
	recentLine.innerHTML = poemLine.toUpperCase();
	
	// using the '+=' operator, we grow the myPoem string to include
	// each new line the user types. We also add a "<br>" tag (a line
	// break HTML element) to the end of the string so each new line
	// typed by the user gets its own line.
	
	// note: the below two lines are two ways of typing the same thing.
	// myPoem+=poemLine + "<br>";
	// myPoem = myPoem + poemLine + "<br>";
	
	myPoem+=poemLine + "<br>";
	
	// update the poemDisplay to show the newly changed poem
	poemDisplay.innerHTML = myPoem;
	
	// clears the input text field automatically after pressing the button
	inputText.value = "";
}

// clears the input text field automatically after selecting the text input box
inputText.onclick = function() {
	inputText.value = "";
}