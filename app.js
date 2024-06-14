let array = [
    {name: "Tomás"}, 
    {name: "Dante"}, 
    {name: "Camila"}, 
    {name: "Sharon"}, 
    {name: "Jaunse"}, 
    {name: "Franco"}
]

let div = document.querySelector('#notes');
let input = document.querySelector('input');

let showNotes = (element, text) => {
    let newList;
    let newArray = filter(text)

    if(newArray.length > 0 || text.length > 0){
        newList = newArray;
    } else {
        newList = array;
    }
    restart(element);
    newList.forEach((item) => {
        let note = document.createElement('p');
        note.textContent = item.name;
        note.className = "rounded p-1 m-2 shadow border-2"
        element.appendChild(note);
    })
}

let restart = (x) => {
    x.innerHTML = "";
}

let filter = (x) => {
    if (x === undefined){

    } else {
        let arrayNew = array.filter((item) => item.name.includes(x))
        return arrayNew;
    }
} 

input.addEventListener('input', function(){
    let textValue = input.value;
    showNotes(div, textValue)
});

showNotes(div, "");
input.focus()

