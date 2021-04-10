const draggableElements = document.querySelector('.draggable');
const droppableElements = document.querySelector(".droppable");


draggableElements.forEach(element => {
    element.addEventListener("dragstart", dragStart);
});

droppableElements.forEach(element => {
    element.addEventListener("dragenter", dragEnter);
    element.addEventListener("dragover", dragOver);
    // element.addEventListener("dragleave", dragLeave);
     element.addEventListener("drop",drop)
});

function dragStart(event){
    event.dataTransfer.setData("text", event.target.color);
}

function dragEnter(event){
    event.target.classList.add("droppable-hover");
}


function dragOver(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    const draggableElementData = event.dataTransfer.getData("text");
    const droppableElementsData = event.target.getAttributr("data-draggable-id");
    if(draggableElementsData === droppableElementsData){
        event.target.classList.add("dropped");
        const draggableElement = document.getElementById(draggableElementsData);
        event.target.style.backgroundColor = draggableElement.style.color;
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("draggable","false");
        event.target.insertAdjacentHTML("afterbegin", `<i cl
        "fas fa-${draggableElementData}"</i>`);
    }
}