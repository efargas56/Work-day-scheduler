var rightNow = moment().format("MMMM Do, YYYY");
var date = document.getElementById('currentDay')
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
var TimeofDay = [ nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm];
 function changedate(){
   date.innerHTML = rightNow
 }
 changedate();
 var events9 = JSON.parse(localStorage.getItem('nineAm')) || "";
 var events10 = JSON.parse(localStorage.getItem('tenAm')) || "";
 var events11 = JSON.parse(localStorage.getItem('elevenAm')) || "";
 var events12 = JSON.parse(localStorage.getItem('twelvePm')) || "";
 var events13 = JSON.parse(localStorage.getItem('onePm')) || "";
 var events14 = JSON.parse(localStorage.getItem('twoPm')) || "";
 var events15 = JSON.parse(localStorage.getItem('threePm')) || "";
 var events16 = JSON.parse(localStorage.getItem('fourPm')) || "";
 var events17 = JSON.parse(localStorage.getItem('fivePm')) || "";
 var events17 = JSON.parse(localStorage.getItem('sixPm')) || "";
 var events17 = JSON.parse(localStorage.getItem('sevenPm')) || "";
 
 $.each(TimeofDay, function () {
  events = [events9, events10, events11, events12, events13, events14, events15, events16, events17]
 });
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
 }
startScheduler();