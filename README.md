# all-aboard
This new exciting top-of-the line application tracks the scheduling of trains, ticket costs, departures and frequencies of trains that we need to chance. 

bonus features include:
  -update and removal buttons for each train

# Synopsis
We use jquery, moment.js, and firebase to populate data into storage using firebase and pulling data into a time scheduler using moment js that are add, munipulate, and change date formats and units of time using jquery for the logic

# concept review/questions
We are continuing the use of jquery and its selectors advantage vs vanilla js while implementing not only dom manipulations but saving them within a database such as firebase and using its advantages of storage.

1. what role does a cookie play when saving user data?
  * cookies act as messages with snippets of infomation from areas of a web page the client interacts with

2. What is the difference between local and session storage
  * local storage is saved to the clients computer hard drive and session storage saves only to the browser and erases after the browser is closed.

3. What does event.preventDefault() do when executed?
  * this is a jquery method that default actions will not be triggered when acted on. For example click submissions may work when enter is pressed where preventDefault can prevent this

# about index.html
Our index.html file is designed only as a husk to house all of our information that firebase is going to populate. we create a modal for entering the information and we create what a card is going to look like.

# about app.js
We use firebase, javascript and jquery to collect, distribute and store information that pertains to the all aboard application.

We use also use moment js as a cdn for converting and storing time values that can be manipulated and saved onto our database

some key code snippets in regard to firebase is using `var firebaseConfig = {};` and `firebase.initializeApp(firebaseConfig)` to link to the google firebase while we listen for a change in values that requires
`database.ref().on("value", function (snapshot) {}` and pushing data using `database.ref().push({})`. Furthermore we listen for child added information (for populating) using `database.ref().on("child_added", function (snapshot) {}`

### what else can we add? and How?
removing time schedules using key can be utilized to the app. updating the time schedules is another feature to be implemented. last edit on 7/6/2019


