// declared variables for dates and times with moment.js and DOM
var rightNow = moment().format("MMMM Do, YYYY");
var momentNow = moment();
var currentTime = moment().format("h:mm:ss a");
var date = document.getElementById('currentDay');
var nineAm = document.getElementById("#9am");
var tenAm = document.getElementById("#10am");
var elevenAm = document.getElementById("#11am");
var twelvePm = document.getElementById("#12pm");
var onePm = document.getElementById("#13pm");
var twoPm = document.getElementById("#14pm");
var threePm = document.getElementById("#15pm");
var fourPm = document.getElementById("#16pm");
var fivePm = document.getElementById("#17pm");
var sixPm = document.getElementById("#18pm");
var sevenPm = document.getElementById("#19pm");
var eightPm
// users input saved into local storage and location of boxes
var userInput
var hourSpan
// array of hours
var TimeofDay = [ nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm];
// sets current day at the top of the page 
function changedate(){
   date.innerHTML = rightNow
 }
 changedate();
 // is suppose to pull data from local storage but it wont and i dont understand why i've tried so many ways to localStorage.getItem but it just wont
 function initPage() {
   moment.set
  console.log("Current Hour " + currentTime);
 var events9 = JSON.parse(localStorage.getItem('09:00 am')) || "";
 $(nineAm).val(events9);
 var events10 = JSON.parse(localStorage.getItem('10:00 am')) || "";
 $(tenAm).val(events10);
 var events11 = JSON.parse(localStorage.getItem('11:00 am')) || "";
 $(elevenAm).val(events11);

 var events12 = JSON.parse(localStorage.getItem('12:00 pm')) || "";
 $(twelvePm).val(events12);

 var events13 = JSON.parse(localStorage.getItem('01:00 pm')) || "";
 $(onePm).val(events13);

 var events14 = JSON.parse(localStorage.getItem('02:00 pm')) || "";
 $(twoPm).val(events14);

 var events15 = JSON.parse(localStorage.getItem('03:00 pm')) || "";
 $(threePm).val(events15);

 var events16 = JSON.parse(localStorage.getItem('04:00 pm')) || "";
 $(fourPm).val(events16);

 var events17 = JSON.parse(localStorage.getItem('05:00 pm')) || "";
 $(fivePm).val(events17);

 var events18 = JSON.parse(localStorage.getItem('06:00 pm')) || "";
 $(sixPm).val(events18);

 var events19 = JSON.parse(localStorage.getItem('07:00 pm')) || "";
 $(sevenPm).val(events19);
 var events20 = JSON.parse(localStorage.getItem('08:00 pm')) || "";
 $(eightPm).val(events20);
 }
 // function which sets the hours to your computers time and then color codes boxes based on that time
 var startScheduler = function () {
  currentTime = moment().format("hh:mm:ss");
var nineAm = moment().hour(9);
var tenAm = moment().hour(10);
var elevenAm = moment().hour(11);
var twelvePm = moment().hour(12);
var onePm = moment().hour(13);
var twoPm = moment().hour(14);
var threePm = moment().hour(15);
var fourPm = moment().hour(16);
var fivePm = moment().hour(17);
var sixPm = moment().hour(18);
if (moment().isBetween(nineAm, tenAm)){
  $("#9am").addClass("present");
}
else if (moment().isAfter(tenAm)){
  $("9am").addClass("past");
}
else {
  $("9am").addClass("future")
}
if (moment().isBetween(tenAm, elevenAm)) {
  $("#10am").addClass("present");
}
else if (moment().isAfter(elevenAm)) {
  $("#10am").addClass("past");
}
else {
  $("#10am").addClass("future");
}

if (moment().isBetween(elevenAm, twelvePm)) {
  $("#11am").addClass("present");
}
else if (moment().isAfter(twelvePm)) {
  $("#11am").addClass("past");
}
else {
  $("#11am").addClass("future");
}

if (moment().isBetween(twelvePm, onePm)) {
  $("#12pm").addClass("present");
}
else if (moment().isAfter(onePm)) {
  $("#12pm").addClass("past");
}
else {
  $("#12pm").addClass("future");
}

if (moment().isBetween(onePm, twoPm)) {
  $("#13pm").addClass("present");
}
else if (moment().isAfter(twoPm)) {
  $("#13pm").addClass("past");
}
else {
  $("#13pm").addClass("future");
}

if (moment().isBetween(twoPm, threePm)) {
  $("#14pm").addClass("present");
}
else if (moment().isAfter(threePm)) {
  $("#14pm").addClass("past");
}
else {
  $("#14pm").addClass("future");
}

if (moment().isBetween(threePm, fourPm)) {
  $("#15pm").addClass("present");
}
else if (moment().isAfter(fourPm)) {
  $("#15pm").addClass("past");
}
else {
  $("#15pm").addClass("future");
}

if (moment().isBetween(fourPm, fivePm)) {
  $("#16pm").addClass("present");
}
else if (moment().isAfter(fivePm)) {
  $("#16pm").addClass("past");
}
else {
  $("#16pm").addClass("future");
}

if (moment().isBetween(fivePm, sixPm)) {
  $("#17pm").addClass("present");
}
else if (moment().isAfter(sixPm)) {
  $("#17pm").addClass("past");
}
else {
  $("#17pm").addClass("future");
}

if (moment().isBetween(sixPm, sevenPm)) {
  $("#18pm").addClass("present");
}
else if (moment().isAfter(sevenPm)) {
  $("#18pm").addClass("past");
}
else {
  $("#18pm").addClass("future");
}
if (moment().isBetween(sevenPm, eightPm)) {
  $("#19pm").addClass("present");
}
else if (moment().isAfter(sevenPm)) {
  $("#19pm").addClass("past");
}
else {
  $("#19pm").addClass("future");
}
}
// runs functions and enables the save button to save the users inputs into local storage
// users inputs will save in local storage but will not get pulled from there i used the correct key names i dont know.
var runpage = (function(){
  initPage();
  startScheduler();

$(".saveBtn").on("click", function(){
  userInput = $(this).siblings(".form-control").val();
  console.log(userInput);
  hourSpan = $(this).siblings(".input-group-prepend").text();
  console.log(hourSpan);
  localStorage.setItem(hourSpan, JSON.stringify(userInput));
})
});
runpage();