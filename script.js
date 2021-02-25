document.write("<h1>Welcome to the JSON Game Show!</h1>");
document.write("<h2>Today on our game show we have 3 contestants.</h2>");
document.write("<h3>Here are some fun facts about them:</h3>");

var people = [
    {
        "name": {
            "first": "Layla",
            "last": "Niska",
        },
        "picture": "https://randomuser.me/api/portraits/women/45.jpg"
    }
]

var conA = people[0];
var conB = people[1];


document.write("<hr>"); // horizontal line


/********** CONTESTANT A **********/

document.write(conA.name.first + " " + conA.name.last); // Layla Niska
document.write("<br>");

document.write("<img src=" + conA.picture + ">"); // https://randomuser.me/api/portraits/women/45.jpg
document.write("<br>");

// document.write("From: " + conA.location.city + ", " + conA.location.state); // From: Brooklyn, NY
document.write("<br>");

// document.write("Enjoys eating " + conA.favorites.food + " and drinking " + conA.favorites.drink + "."); // Enjoys eating sushi and drinking lemonade.
document.write("<br>");

// document.write("Email " + conA.name.pronoun + " at " + conA.contact.email); // Email her at laylan1234@gmail.com
document.write("<br>");


document.write("<hr>"); // horizontal line


/********** CONTESTANT B **********/

// document.write(conB.name.first + " (aka " + conB.name.nicknames[1] + ") " + conB.name.last); // Robert (aka Robbie) Hernandez
document.write("<br>");

// document.write("<img src=" + conB.picture + ">"); // https://randomuser.me/api/portraits/men/35.jpg
document.write("<br>");

// document.write("From: " + conB.location.city + ", " + conB.location.state); // From: San Antonio, CA
document.write("<br>");

// document.write("Favorite color is " + conB.favorites.color + "."); // Favorite color is green.
document.write("<br>");

// document.write("Call " + conB.name.pronoun + " at " + conB.contact.phone); // Call him at 123-456-7890
document.write("<br>");


document.write("<hr>"); // horizontal line


/********** CONTESTANT C **********/






