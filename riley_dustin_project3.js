//alert("JavaScript works!");

/*
  Dustin S. Riley
  SDI 1403
  Project 3
 */

/*
 * Pseudo
 * ----------
 * This program will prompt the user if they're ready to workout, this is the beginning of "motivation" and it becomes my boolean value. Once that is complete, I will proceed to get
 * information through prompts and confirms. These include the time, name, how long they have until they have to be somewhere (instead of just limiting this to work hours).
 *
 * My JSON data will be in a seperate .js file this file will have some workouts in them. These will be pulled out and then used
 *  "indoorWorkouts" :[{
 *      "Jumping Jacks" : 40,
 *      "Push Ups" : 100,
 *      "Leg Lifts" : 50
 *  }]
 *
 *  "gymWorkouts" :[{
 *      "Pull Ups" : 40,
 *      "Curls" : 40,
 *      "Bench Press" : 50
 *  }]
 *
 * Math:
 * My Math will be the math of how many hours they have to work out until they have to be somewhere.
 *
 * Array:
 * 
 * My array method will be indexOf() as I search the array for a certain piece of information
 * 
 */


// D E C L A R E   V A R I A B L E S
var fName = "First"; lName = "Last"; hours = 0; ready = true; time = 0; routine = "";



// P R O M P T I N G  user for inputs and storing them
ready = confirm("Are you ready to get your blood pumping?");
fName = prompt("What is your First name?" , "First");
lName = prompt("What is your Last name?" , "Last");
hours = prompt("How many hours until you have to be somewhere?");


// E V A L U A T E  confirm prompt.
function isReady(ready) {
    // Local Variable
    var r = ready;
    
    if (ready === true) {
    //Runs this code if the user is ready!
    // This calls all of the main methods.
    
    
    } else {
    
    console.log("Sorry to hear, come back when you are!");
    
    } // END ELSE
}

// P R O C E D U R E
function currentTime() {
    
    var today = getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    time += h + ":" + m;
    console.log(h);
    console.log(m);
    
} // END    c u r r e n t T i m e ()

// QA
console.log(currentTime(time));



// M A T H function to
function calculateHours(hours){
    var h = parseInt(hours);
    hours = parseInt(hours);
    
    while (hours >= h && h != 0) {
        //Cycle through this code until you have a workout that fits within the time frame.
        
        
        
    } // END While

    // Returning the amount of time user originally had
    return hours;

} // END    c a l c u l a t e H o u r s ()
