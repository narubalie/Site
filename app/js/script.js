
var nav = document.getElementById("navigation");

// Прелоадер

window.onload = function () {
  var preloader = document.getElementById("preloader");
  window.setTimeout(function () {
    preloader.classList.add('loaded_hiding');
    preloader.classList.add('loaded');
    preloader.classList.remove('loaded_hiding');
  }, 3300 );
}

// Открытие и закрытие модалки

var card = document.getElementById('runes').getElementsByClassName("card")[0];
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementsByClassName("modal")[0];

card.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Блокируем
}

span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// --------------------------------------------------------DASHBOARD TABS

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabinner, tablinks;

  // Get all elements with class="tabinner" and hide them
  tabinner = document.getElementsByClassName("tab-inner");
  for (i = 0; i < tabinner.length; i++) {
      tabinner[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("sidenav-links");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  // document.getElementById(tabName).style.overflow = "auto"
  evt.currentTarget.className += " active";
}

function newOrder() {

  var table = document.getElementById("table__orders");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(1);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);

  // Append a text node to the cell
  // var newText = Math.floor(Math.random() * 100) + 1;
  // cell1.appendChild(newText);

  // Add some text to the new cells:
  // cell1.innerHTML = "NEW CELL2";
  cell2.innerHTML = "NEW CELL2";
  cell3.innerHTML = "NEW CELL1";
  cell4.innerHTML = "NEW CELL2";
  cell5.innerHTML = "NEW CELL1";
  cell6.innerHTML = "NEW CELL2";
  cell7.innerHTML = "NEW CELL1";
  cell8.innerHTML = "NEW CELL2";
}

function deleteOrder() {
  document.getElementById("table__orders").deleteRow(1);
}