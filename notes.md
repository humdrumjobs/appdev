# Midterm Review notes

### The link element in HTML establishes a connection between an HTML document and an external resource
### the div tag groups HTML elements together and applies styles to them as a unit
### 
### #title (ID Selector):
### This targets an element with the specific id attribute of "title".
### IDs should be unique within a page, meaning there should only be one element with the ID title.
### Syntax example:
### #title {
###   font-size: 24px;
###   color: blue;
### }
### .grid (Class Selector):
### 
### This targets all elements with the class attribute of "grid".
### Multiple elements can share the same class, so this style will apply to all elements with the grid class.
### Syntax example:
### .grid {
###   display: grid;
###   gap: 10px;
### }
### 
# Padding/margin

Padding is the space inside an element, between the element’s content and its border.
It increases the size of the element without affecting the space between it and other elements.
Padding can be applied on all sides (padding), or individually (padding-top, padding-right, padding-bottom, padding-left).
Example:
.box {
  padding: 20px;
}
Margin:

Margin is the space outside an element, between the element's border and the surrounding elements.
It pushes elements away from each other, affecting the space between elements.
Like padding, margins can be applied on all sides or individually.
Example:
.box {
  margin: 20px;
}
###  Position: Padding is inside the border, while margin is outside the border.
### Space: Padding affects the element’s size (expands it), while margin affects the layout by spacing elements apart.
### Background: Padding takes on the element's background color, while margin remains transparent, showing the parent’s background (if any).
### 
### 
# flex notes 
.image-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;    /* Center vertically */
  height: 100vh;          /* Full viewport height */
}

.image-container img {
  max-width: 100%;    /* Ensures image scales */
  height: auto;       /* Maintains aspect ratio */
}
display: flex; on .image-container makes it a flex container.
justify-content: center; centers the image horizontally.
align-items: center; centers the image vertically.
max-width: 100%; ensures the image scales responsively without exceeding the container width.
This setup will display your image in the center of the screen. Adjust the container's dimensions as needed for different layouts.
### 
# arrow functions
Shorter Syntax:

Arrow functions provide a more concise syntax, often allowing you to write functions in a single line.
Example:
const add = (a, b) => a + b;
Lexical this Binding:

Arrow functions don’t have their own this context. Instead, they inherit this from the surrounding scope where they’re defined.
This makes them useful in scenarios like callbacks or methods where this should refer to the parent object.
Example:
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` refers to the `Person` instance
  }, 1000);
}
No arguments Object:

Arrow functions don’t have their own arguments object, which holds all the arguments passed to the function.
If you need arguments in an arrow function, you can use rest parameters (...args) instead.
Example:
const logArguments = (...args) => console.log(args);
Non-constructible:

Arrow functions can’t be used as constructors, so they can’t be called with new. They lack a prototype property as a result.
Example Comparison
Traditional function:

function greet(name) {
  return `Hello, ${name}`;
}
Arrow function:

const greet = (name) => `Hello, ${name}`;
### 
# mapping

const people = [
  { firstName: 'Alice', lastName: 'Johnson', birthYear: 1990 },
  { firstName: 'Bob', lastName: 'Smith', birthYear: 1985 },
  { firstName: 'Charlie', lastName: 'Brown', birthYear: 2000 }
];

// Get the current year
const currentYear = new Date().getFullYear();

// Use map to create an array of objects with full name and age
const peopleInfo = people.map(person => {
  const fullName = `${person.firstName} ${person.lastName}`;
  const age = currentYear - person.birthYear;
  return { fullName, age };
});

console.log(peopleInfo);

Output
[
  { fullName: 'Alice Johnson', age: 34 },
  { fullName: 'Bob Smith', age: 39 },
  { fullName: 'Charlie Brown', age: 24 }
]
### 

# GetElementById

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Listener Example</title>
</head>
<body>
  <div id="textBox" style="width: 200px; height: 100px; background-color: lightgray;">
    Click the button to change my color!
  </div>
  <button id="colorButton">Change Color</button>

  <script src="script.js"></script>
</body>
</html>
JavaScript (script.js)
// Get elements by their IDs
const textBox = document.getElementById('textBox');
const colorButton = document.getElementById('colorButton');

// Add an event listener to the button for a 'click' event
colorButton.addEventListener('click', () => {
  // Generate a random color
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

  // Change the background color of the text box
  textBox.style.backgroundColor = randomColor;
});

We use getElementById to get references to the textBox and colorButton elements in the DOM.
addEventListener:

We add an event listener to colorButton that listens for the click event.
When the button is clicked, the callback function generates a random hex color and applies it to the background color of textBox.
Random Color Generation:

Math.random()*16777215 generates a random number, and toString(16) converts it to a hex string.
The generated color is then set as the new background color of textBox.
Each time the button is clicked, textBox will change to a random color!
### 
### 
### 
### 
HTML/CSS/JavaScript Questions
In the following code, what does the link element do?

The <link> element links external resources, typically used to link CSS files.
Example: <link rel="stylesheet" href="styles.css">
In the following code, what does a div tag do?

The <div> tag is a container for grouping and styling content. It doesn’t affect the content’s appearance by default but is useful for layout and structure.
What is the difference between the #title and .grid selector?

#title selects an element with the ID title (IDs should be unique).
.grid selects elements with the class grid (multiple elements can have the same class).
Example:
#title { color: blue; }
.grid { display: grid; }
What is the difference between padding and margin?

Padding: Space inside an element’s border.
Margin: Space outside an element’s border.
Example:
.box {
  padding: 10px;
  margin: 15px;
}
Given this HTML and this CSS, how will the images be displayed using flex?

The display: flex property will align images as flex items, allowing for control over alignment, direction, and spacing.
What does the following padding CSS do?

This defines the inner space around an element’s content.
Example:
.box {
  padding: 20px;
}
What does the following code using arrow syntax function declaration do?

Arrow functions provide a shorter syntax and inherit this from their surrounding scope.
Example:
const add = (a, b) => a + b;
What does the following code using map with an array output?

map() creates a new array by transforming each element in an existing array.
Example:
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // [2, 4, 6]
What does the following code output using getElementByID and addEventListener?

This code triggers a function when an element is clicked.
Example:
const button = document.getElementById("myButton");
button.addEventListener("click", () => console.log("Button clicked!"));
What does the following line of JavaScript do using a # selector?

This likely refers to selecting an element by ID (like document.querySelector('#id')).
HTML/CSS Questions
Which of the following are true about the DOM?

The DOM represents the structure of a webpage, allowing JavaScript to manipulate HTML elements. DOM is responsible for the motion and visual aspects one often sees on a website.It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page. A web page is a document that can be either displayed in the browser window or as the HTML source.

The HTML span element has a default CSS display property value of:

inline.
How would you use CSS to change all the div elements to have a background color of red?

Example:
div {
  background-color: red;
}
How would you display an image with a hyperlink in HTML?

Example:
<a href="https://example.com"><img src="image.jpg" alt="Example"></a>
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

Content → Padding → Border → Margin.
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?

Example:
#trouble {
  color: green;
}
What will the following code output when executed using a for loop and console.log?

Example:
for (let i = 0; i < 3; i++) {
  console.log(i); // Output: 0, 1, 2
}
How would you use JavaScript to select an element with the ID “byu” and change its text color to green?

Example:
document.getElementById("byu").style.color = "green";
What is the opening HTML tag for a paragraph, ordered list, unordered list, second-level heading, first-level heading, third-level heading?

<p>, <ol>, <ul>, <h2>, <h1>, <h3>
How do you declare the document type to be HTML?

<!DOCTYPE html>
JavaScript Syntax Questions
What is valid JavaScript syntax for if, else, for, while, switch statements?

Examples:
if (condition) { ... }
else { ... }
for (let i = 0; i < 5; i++) { ... }
while (condition) { ... }
switch (value) { case 1: ...; break; }
What is the correct syntax for creating a JavaScript object?

Example:
const obj = { name: "John", age: 30 };
Is it possible to add new properties to JavaScript objects?

Yes. Example:
obj.newProp = "newValue";
If you want to include JavaScript on an HTML page, which tag do you use?

<script>
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

Example:
document.getElementById("animal").textContent = "crow";
Which of the following correctly describes JSON?

JSON (JavaScript Object Notation) is a lightweight data-interchange format, often used for APIs.
Console Commands
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?

chmod: Change file permissions
pwd: Print working directory
cd: Change directory
ls: List directory contents
vim / nano: Text editors
mkdir: Create a directory
mv: Move or rename files
rm: Remove files
man: Display manual
ssh: Remote access
ps: Display running processes
wget: Download files
sudo: Execute commands with superuser privileges
Which of the following console commands creates a remote shell session?

ssh
Which of the following is true when the -la parameter is specified for the ls console command?

Lists all files, including hidden ones, in long format.
Networking Questions
Which of the following is true for the domain name banana.fruit.bozo.click:

Top-level domain: .click
Subdomain: banana.fruit
Root domain: bozo.click
Is a web certificate necessary to use HTTPS?

Yes, HTTPS requires a valid SSL/TLS certificate.
Can a DNS A record point to an IP address or another A record?

Yes, a DNS A record points to an IP address.
Port 443, 80, 22 is reserved for which protocol?

Port 443: HTTPS, Port 80: HTTP, Port 22: SSH
Promises in JavaScript
What will the following code using Promises output when executed?


A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. 
Think of it like this: You order something online, and you receive an order confirmation. The confirmation is not the actual product, but it's a promise that the product will be delivered in the future. You can then decide what to do once the product arrives (success) or if it doesn't (failure).
  
  States:
A Promise can be in one of three states:
Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure.
Methods:
then(): Used to handle the successful completion of the promise. It takes two functions as arguments: one for the fulfilled state and one for the rejected state (optional).
catch(): Used to handle the rejected state of the promise.
finally(): Used to perform cleanup actions, regardless of whether the promise was fulfilled or rejected.
