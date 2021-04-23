const todo = document.getElementById('todo'); 
const doing = document.getElementById('doing'); 
const done = document.getElementById('done'); 
const superdone = document.getElementById('superdone'); 

new Sortable(todo, {
  group: 'shared',
	animation: 200,
	chosenClass: "selected",
  filter: ".card-menu-button",
	dragClass: "drag",
  ghostClass: "ghost"
});

new Sortable(doing, {
  group: 'shared',
  animation: 200,
  chosenClass: "selected",
  filter: ".card-menu-button",
  dragClass: "drag",
  ghostClass: "ghost"
});

new Sortable(done, {
  group: 'shared',
  animation: 200,
  chosenClass: "selected",
  filter: ".card-menu-button",
  dragClass: "drag",
  ghostClass: "ghost"
});

new Sortable(superdone, {
  group: 'shared',
  animation: 200,
  chosenClass: "selected",
  filter: ".card-menu-button",
  dragClass: "drag",
  ghostClass: "ghost"
});


function openNav() {
  document.getElementById("sidebar").style.left = "0px";
  document.getElementById("main").style.margin = "0px 0px 0px 220px";
  document.getElementById("main").style.width = "calc(100% - 260px)";
  document.getElementById("boardbar").style.margin = "0px 0px 0px 220px";
  document.getElementById("boardbar").style.width = "calc(100% - 300px)";
  document.getElementById("sidebarcollapsed").style.left = "-50px";
}

function closeNav() {
  document.getElementById("sidebar").style.left = "-220px";
  document.getElementById("main").style.margin = "0px 0px 0px 50px";
  document.getElementById("main").style.width = "calc(100% - 90px)";
  document.getElementById("boardbar").style.margin = "0px 0px 0px 50px";
  document.getElementById("boardbar").style.width = "calc(100% - 130px)";
  document.getElementById("sidebarcollapsed").style.left = "0px";
}