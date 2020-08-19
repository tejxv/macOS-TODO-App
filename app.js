// curtain animation on load
window.onload = function () {
  var bg = document.getElementById("bg");
  bg.style.height = "100vh";
};

// sidepane
function openTab(evt, tabName) {
  var i, tabcontent, tabs;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabs = document.getElementsByClassName("tabs");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// container focused => add bg
function focused() {
  var container = document.getElementById("container");
  var sidepane = document.getElementById("sidepane");

  container.classList.add("focusedContainer");
  sidepane.classList.add("focusedSidepane");
}
// append ul to li

taskNo = 1;

function appendList() {
  ++taskNo;

  var ul = document.getElementById("taskItems");
  var li = document.createElement("li");
  var taskValue = document.getElementById("taskInput").value;

  if (taskValue) {
    console.log(taskValue);

    li.innerHTML =
      `<input type='checkbox' id='task${taskNo}'><label for='task${taskNo}'>` +
      taskValue +
      "</label>";

    ul.appendChild(li);
    document.getElementById("taskInput").value = "";

    // changing button text upon adding
    document.getElementById("addBtn").innerText = "Added!";
  } else {
    console.log("no value");
    document.getElementById("addBtn").innerText = "no task!";
    document.getElementById("addBtn").style.cursor = "no-drop";
  }
}

// revert back from added to add

var clicked = document.getElementById("taskInput");
clicked.addEventListener("click", function () {
  document.getElementById("addBtn").innerText = "Add";
  document.getElementById("addBtn").style.cursor = null;
});

/*
<li>
    <input type="checkbox" id="task2"> <label for="task2">add to localStorage</label>
</li>
*/
