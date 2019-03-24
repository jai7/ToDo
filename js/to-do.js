var getTasks = document.querySelector('ol');
var taskToBeAdded = document.getElementById('txtTask');
var spans = document.getElementsByTagName('span');

function addTask(){
    var taskText = taskToBeAdded.value;
    if(taskText.length > 0){
        var li = document.createElement("li");
        var spanElement = document.createElement("span");
        var icon = document.createElement("i");
        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        getTasks.appendChild(li).append(spanElement,taskText);
        removeSelectedTask();
        clearTextBox();
    }
    else
    window.alert("enter something to get started..");

}

function clearTextBox(){
    taskToBeAdded.value = "";
}

function saveList(){

}

function removeSelectedTask(){
    for(let span of spans){
        span.addEventListener ("click",function (){
          span.parentElement.remove();
          event.stopPropagation();
        });
      }
    }

function clearAll(){
    while(getTasks.firstChild)
    getTasks.removeChild(getTasks.firstChild);
}