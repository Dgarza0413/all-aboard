# all-aboard

This new exciting top-of-the line application tracks the scheduling of trains, ticket costs, departures and frequencies of trains that we need to chance. 

bonus features include:
  -update and removal buttons for each train

# technologies used
We use firebase, javascript and jquery to collect, distribute and store information that pertains to the all aboard application.
We use also use moment js as a cdn for converting and storing time values that can be manipulated and saved onto our database

some key code snippets in regard to firebase

var firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

listening for a change in value
database.ref().on("value", function (snapshot) {}

For pushing data
database.ref().push({})

listening for child added information (for populating)
database.ref().on("child_added", function (snapshot) {}
