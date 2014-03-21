//alert("JavaScript works!");

/*
  Dustin S. Riley
  SDI 1403
  Project 3
 */


// D E C L A R E   V A R I A B L E S
var fName = "First"; lName = "Last"; hours = 0; ready = true; routine = ""; motoArray = ["Get some", "One more Rep", "Don't stop now"];



// P R O M P T I N G  user if they're ready, then evaluate inputs based on response
ready = confirm("Are you ready to get your blood pumping?");

if (ready === true) {
    // Prompt only if they're ready
    fName = prompt("What is your First name?" , "First");
    lName = prompt("What is your Last name?" , "Last");
    hours = prompt("How many hours until you have to be somewhere?");
    isReady(ready);
    calculateHours(hours);
    
} else {
    // Sorry to see you go!
    console.log("Sorry to hear that, come back when you are!");
    isReady(ready);
} // END IF ELSE


// S T R I N G
function motivation(){
    //Local Variables
    var name = fName;
        for(var i = 0; i < motoArray.length; i++){
            motoArray[i] = motoArray[i] + ", " + name + "!!";
        }// END FOR LOOP
    
    return motoArray;
} // END   m o t i v a t i o n ()

// E V A L U A T E  boolean
function isReady(ready) {
    
    if (ready === true) {
        if (fName.length > 3) {
            //Compliment
            console.log("With a big strong name like " + fName + ", I know you'll move mountains!")  // I didn't use an escape character because I use
                                                                                                     // double quote for strings. If best practice to use escape anyways, please advise
        } else {
            // Use last name, joke
            console.log("How about we just go with your last name as I'm sure it's more masculine.");
        } // end embed else
    } else {  
        console.log("There is no day like today, and there is no time like the present, I suggest you rethink your motivation!");
    } // END ELSE
} // END   i s R e a d y ()


/*
// P R O C E D U R E
function currentTime() {
    
    var today = getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    time += h + ":" + m;
    console.log(h);
    console.log(m);
    
} // END    c u r r e n t T i m e ()
*/

// M A T H function to determine which workouts we have time for. It comes in the form of the while loop comparing original hours to time passed hours
function calculateHours(hours){
    var h = parseInt(hours);
    hours = parseInt(hours);
    
    var i = 0; x = 0; // index variable
    
    while (hours >= h && h != 0) {
        //Cycle through this code until you have a workout that fits within the time frame.
        console.log("Since you have " + h + " hours left, do the following: " + jsonWorkout.workouts[i].cardio + " for cardio. Then " + jsonWorkout.workouts[i].bulk + " for bulk.");
        //Printing motivation out
        console.log(motivation(motoArray[x]));
        i++;
        h--;
        console.log('************************');
    } // END While

    // Returning the amount of time user originally had
    return hours;

} // END    c a l c u l a t e H o u r s ()











//   Q U A L I T Y   A S S U R A N C E
// console.log(currentTime(time));
// console.log(calculateHours(hours));
// console.log(motivation());
// console.log(motoArray[1]);
// console.log(motoArray[0]);
// console.log(motoArray[2]);