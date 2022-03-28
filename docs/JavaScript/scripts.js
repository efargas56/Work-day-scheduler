// declared variables
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
var nineAm = moment().hour(9);
var tenAm = moment().hour(10);
var elevenAm = moment().hour(11);
var twelvePm = moment().hour(12);
var twoPm = moment().hour(13);
var threePm = moment().hour(14);
var fourPm = moment().hour(15);
var fivePm = moment().hour(16);
var sixPm = moment().hour(17);
var sevenPm = moment().hour(18);
var eightPm = moment().hour(19);

var userInput
var hourSpan
var TimeofDay = [ nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm];
//$.each(TimeofDay, function () {
 // events = [events9, events10, events11, events12, events13, events14, events15, events16, events17]
 //});
// sets current day at the top of the page 
function changedate(){
   date.innerHTML = rightNow
 }
 changedate();
 function initPage() {
  console.log("Current Hour " + currentTime);
 var events9 = JSON.parse(localStorage.getItem('nineAm')) || "";
 $(nineAm).val(events9);
 var events10 = JSON.parse(localStorage.getItem('tenAm')) || "";
 $(tenAm).val(events10);
 var events11 = JSON.parse(localStorage.getItem('elevenAm')) || "";
 $(elevenAm).val(events11);

 var events12 = JSON.parse(localStorage.getItem('twelvePm')) || "";
 $(twelvePm).val(events12);

 var events13 = JSON.parse(localStorage.getItem('onePm')) || "";
 $(onePm).val(events13);

 var events14 = JSON.parse(localStorage.getItem('twoPm')) || "";
 $(twoPm).val(events14);

 var events15 = JSON.parse(localStorage.getItem('threePm')) || "";
 $(threePm).val(events15);

 var events16 = JSON.parse(localStorage.getItem('fourPm')) || "";
 $(fourPm).val(events16);

 var events17 = JSON.parse(localStorage.getItem('fivePm')) || "";
 $(fivePm).val(events17);

 var events18 = JSON.parse(localStorage.getItem('sixPm')) || "";
 $(sixPm).val(events18);

 var events19 = JSON.parse(localStorage.getItem('sevenPm')) || "";
 $(sevenPm).val(events19);
 var events20 = JSON.parse(localStorage.getItem('eightPm')) || "";
 $(eightPm).val(events20);
 }
 var startScheduler = function () {
  currentTime = moment().format("hh:mm:ss");
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