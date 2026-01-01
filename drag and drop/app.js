let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let selected = null;

for(const list of lists) {
    list.addEventListener("dragstart", (e) => {
        selected = e.target;
    })
}

leftBox.addEventListener("dragover", (e) => {
    e.preventDefault();
})

rightBox.addEventListener("dragover", (e) => {
    e.preventDefault();
})

leftBox.addEventListener("drop", (e) => {
    leftBox.appendChild(selected);
    selected = null;
})

rightBox.addEventListener("drop", (e) => {
    rightBox.appendChild(selected)
    selected = null;
})