/* ARRAY: Stores all four class objects */
let classes = [
    {
        name: "Math",
        grade: 90,
        teacher: "Math Teacher",

        // OBJECT METHOD: Returns information about this class
        showDetails: function() {
            return "Your current grade in " + this.name +
                   " is " + this.grade + "%.";
        }
    },

    {
        name: "Digital Media",
        grade: 97,
        teacher: "Digital Media Teacher",

        showDetails: function() {
            return "Your current grade in " + this.name +
                   " is " + this.grade + "%.";
        }
    },

    {
        name: "Art",
        grade: 86,
        teacher: "Art Teacher",

        showDetails: function() {
            return "Your current grade in " + this.name +
                   " is " + this.grade + "%.";
        }
    },

    {
        name: "Psych",
        grade: 94,
        teacher: "Psych Teacher",

        showDetails: function() {
            return "Your current grade in " + this.name +
                   " is " + this.grade + "%.";
        }
    }
];
 
/* FUNCTION: Displays all classes on the webpage */
function displayClasses() {
    let container = document.getElementById("classContainer");

    // Clear the cards before displaying them again
    container.innerHTML = "";

    // ARRAY METHOD: forEach() visits every class
    classes.forEach(function(classInfo) {

// Create a new HTML card
        let card = document.createElement("div");
        card.className = "class-card";

        // Call the OBJECT METHOD
        let details = classInfo.showDetails();

        // Display the information
        card.innerHTML = `
            <h3>${classInfo.name}</h3>
            <p class="grade">${classInfo.grade}%</p>
            <p><strong>Teacher:</strong> ${classInfo.teacher}</p>
            <p>${details}</p>
        `;

        container.appendChild(card);
    });

    // Update the number of classes
    document.getElementById("classCount").textContent = classes.length;
}
/* FUNCTION: Calculates the overall average */
function calculateAverage() {

    // ARRAY METHOD: reduce() adds all the grades together
    let total = classes.reduce(function(sum, classInfo) {
        return sum + classInfo.grade;
    }, 0);

    // Divide the total by the number of classes
    let average = total / classes.length;

    // Display the average
    document.getElementById("average").textContent =
        average.toFixed(1) + "%";

    document.getElementById("message").textContent =
        "Your overall average has been calculated!";
}


/* FUNCTION: Sorts classes alphabetically */
function sortClasses() {

    // ARRAY METHOD: sort() arranges classes by name
    classes.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    // Display the newly sorted array
    displayClasses();

    document.getElementById("message").textContent =
        "Your classes are now sorted alphabetically!";
}


/* BUTTON EVENTS: Connect buttons to functions */
document.getElementById("averageButton").addEventListener(
    "click", calculateAverage
);

document.getElementById("sortButton").addEventListener(
    "click", sortClasses
);


/* Display the classes when the page loads */
displayClasses();
