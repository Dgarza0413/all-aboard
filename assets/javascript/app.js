// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCU2YU9R4rNoIGmqxjyELBxMFGRe0SEp1E",
    authDomain: "all-aboard-54dff.firebaseapp.com",
    databaseURL: "https://all-aboard-54dff.firebaseio.com",
    projectId: "all-aboard-54dff",
    storageBucket: "all-aboard-54dff.appspot.com",
    messagingSenderId: "381573422068",
    appId: "1:381573422068:web:1fda06f81dcc1d07"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//variables
var database = firebase.database();

var trainName = ""
var destination = ""
var firstTime = ""
var frequency = ""

// we need to read a static snapshot of the contents at a given path
database.ref().on("value", function (snapshot) {
    console.log(snapshot)

    trainName = snapshot.val().trainName;
    destination = snapshot.val().destination;
    firstTime = snapshot.val().fristTime;
    frequency = snapshot.val().frequency;

    // var frequencyMoment = moment(frequency)
    // var firstTimeMoment = moment(firstTime)


    // for testing purposes
    // console.log(trainName)
    // console.log(destination)
    // console.log(firstTime)
    // console.log(frequency)
    // console.log("firstTime moment produces: " + firstTimeMoment)
    // console.log("frequency moment produces: " + frequencyMoment)

    $("#train-name-header").text(trainName)
    $("#destination-header").text(destination)
    $("#firstTime-header").text(firstTime)
    $("#frequency-header").text(frequency)

}, function (errorObject) {
    console.log("the read failed: " + errorObject.code);
});

// submit values placed within the modal
$("#submit-click").on("click", function () {
    trainName = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    firstTime = $("#first-time").val().trim();
    frequency = $("#frequency").val().trim();

    $("#train-name-header").text(trainName)
    $("#destination-header").text(destination)
    $("#first-time-header").text(firstTime)
    $("#frequency-header").text(frequency)


    // var frequencyMoment = moment(frequency)
    // var firstTimeMoment = moment(firstTime)

    // console.log("firstTime moment produces: " + firstTimeMoment)
    // console.log("frequency moment produces: " + frequencyMoment)

    // interact with the firebase and push data into variables
    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTime: firstTime,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })

    // testing purposes
    // console.log(trainName)
    // console.log(destination)
    // console.log(firstTime)
    // console.log(frequency)

});

// database changes using child_added
database.ref().on("child_added", function (snapshot) {
    var sv = snapshot.val();

    // we have to create all of the divs and elements within this area
    // to populate in our app
    var trainIcon = $("<i>")
    var newTrainName = $("<div>").text(sv.trainName)
    var newDestination = $("<div>").text(sv.destination)
    var newFirstTime = $("<div>").text(sv.firstTime)
    var newFrequency = $("<div>").text(sv.frequency)
    var newTrainInfo = $("<div>")
    var newContainer = $("<div>")
    var newContent = $("<div>")
    var timeArrival = $("<div>")
    var minTillArrival = $("<div>")
    // .text(displayNextTrain)

    //empty containers
    newTrainInfo.addClass("train-info")
    newContainer.addClass("container arrow")
    newContent.addClass("content")
    trainIcon.addClass("fas fa-train fa-2x")

    //database containers
    newTrainName.addClass("train-name-data")
    newDestination.addClass("destination-data")
    newFirstTime.addClass("first-time-data")
    newFrequency.addClass("frequency-data")
    timeArrival.addClass("time-arrival")

    //testing purposes
    // console.log(sv.trainName)
    // console.log(sv.destination)
    // console.log(sv.firstTime)
    // console.log(sv.frequency)


    //painstaking way of converting time to remindertime till arrival
    var frequencyMoment = sv.frequency
    var firstTimeMoment = sv.firstTime
    var timeConverted = moment(firstTimeMoment, "HH:mm").subtract(1, "years")
    var currentTime = moment();
    var diffTime = moment().diff(moment(timeConverted), "minutes");
    var freqRemainder = diffTime % frequencyMoment;
    var minNextTrain = frequencyMoment - freqRemainder;
    var ltNextTrain = moment().add(minNextTrain, "minutes")
    var displayNextTrain = moment(ltNextTrain).format("LT")


    // testing purposes
    // console.log("firstTime moment produces: " + firstTimeMoment)
    // console.log("frequency moment produces: " + frequencyMoment)
    // console.log("time converted: " + timeConverted)
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    // console.log("difference in time: " + diffTime)
    // console.log(freqRemainder)
    // console.log("minutes till train: " + minNextTrain)
    // // console.log("arrival time: " + moment(ltNextTrain).format("LT"))
    // console.log("arrival time: " + displayNextTrain)


    // Html to reflect
    $(".timeline").append(newContainer)
    newContainer.append(newContent)

    newContent.append(newTrainInfo)
    // newContent.append(trainIcon)

    newTrainName.prepend("<p>Train Name:</p>")
    newTrainInfo.html(newTrainName)
    newTrainInfo.prepend(trainIcon)

    newDestination.prepend("<p>Destination:</p>")
    newTrainInfo.append(newDestination)

    newFirstTime.prepend("<p>First Time:</p>")
    newTrainInfo.append(newFirstTime)

    newFrequency.prepend("<p>Frequency:</p>")
    newTrainInfo.append(newFrequency)

    timeArrival.prepend("<p>Time arrival</p>")
    timeArrival.append(displayNextTrain)
    newTrainInfo.append(timeArrival)

    minTillArrival.prepend("<p>Minutes Till Arrival")
    minTillArrival.append(minNextTrain)
    newTrainInfo.append(minTillArrival)
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

$("#add-trip").on("click", function () {
    $("#close-click").show()
    $("#train-form").show()
    console.log("A popup form happens")
})

$("#close-click").on("click", function () {
    console.log("a form closes")
    $("#train-form").hide()
})



//consider what a train schedule must have
//first we must save all train schedules that works like a todo list
//seems like i will have to incorporate an object of arrays to accurate couple information together


//use an if statement to prevent the submit form from submitting
