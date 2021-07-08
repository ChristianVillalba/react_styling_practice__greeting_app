//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// Get the hours
const hr = new Date().getHours();
// let can be updated but not re-declared https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
let greeting;
// We will inject "greetig as our Heading"
// Empyt string that we will declare later on depending of ...(if statement)
const myStyle = {
  color: ""
};

if (hr < 12) {
  greeting = "Have a good Morning";
  // injects our heading
  myStyle.color = "red";
  // declares gives a value to color: ""
} else if (hr < 18) {
  greeting = "Have a good Evening!";
  myStyle.color = "green";
} else {
  greeting = "Have a good Night!";
  myStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={myStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
