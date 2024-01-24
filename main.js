


//////////////////// Title ////////////////////
let cont1 = document.createElement("div")
cont1.classList.add("container1")
document.body.appendChild(cont1)
cont1.querySelector(".container1")

let p = document.createElement("p")
p.innerText = "Vanilla Javascript Todo List"
cont1.appendChild(p)



//////////////////// input section ////////////////////
let cont2 = document.createElement("div")
cont2.classList.add("container2")
document.body.appendChild(cont2)
cont2.querySelector(".container2")

///// input /////
let newTask = document.createElement("div")
newTask.type = "text"
newTask.classList.add("newTask")
cont2.appendChild(newTask)
newTask = document.querySelector(".newTask")
//input
let input = document.createElement("input")
input.type = "text"
newTask.appendChild(input)
//btn add
let btnAdd = document.createElement("div")
btnAdd.classList.add("btnAdd")
btnAdd.innerText = "+"
newTask.appendChild(btnAdd)
btnAdd = document.querySelector(".btnAdd")

///// selection div /////
let divSelect = document.createElement("div")
divSelect.classList.add("divSelect")
cont2.appendChild(divSelect)
divSelect = document.querySelector(".divSelect")
//select
let selection = document.createElement("select")
selection.classList.add("selection")
divSelect.appendChild(selection)
selection = document.querySelector(".selection")
//options
for (let i = 0; i < 3; i++) {
    let opt = document.createElement("option")
    selection.appendChild(opt)
}
let opt = document.querySelectorAll(".selection option")
opt[0].value = "to do"
opt[0].innerText = "to do"
opt[1].value = "done"
opt[1].innerText = "done"



//////////////////// list ////////////////////
let cont3 = document.createElement("div")
cont3.classList.add("container3")
document.body.appendChild(cont3)
cont3.querySelector(".container3")


//////////////////// add task ////////////////////
btnAdd.addEventListener("mouseover",() => {
    btnAdd.style.backgroundColor = "red"
    btnAdd.addEventListener("mouseout", () => {
        btnAdd.style.backgroundColor = "blue"
    })
})
btnAdd.addEventListener("click", () => {
    if (newTask.value != "") {
        let task = document.createElement("div")
        task.classList.add("task")
        cont3.appendChild(task)
        task = document.querySelector(".task:last-child")
    
        //text
        let p = document.createElement("p")
        p.innerText = newTask.querySelector("input").value
        task.appendChild(p)
    
        //checkbox done
        let done = document.createElement("div")
        done.classList.add("done")
        task.appendChild(done)
        done = task.querySelector(".done:last-child")
        //checkbox
        let check = document.createElement("div")
        check.classList.add("check")
        done.appendChild(check)
    
        //btn delete
        let del = document.createElement("div")
        del.classList.add("del")
        task.appendChild(del)
        del = document.querySelectorAll(".del")
        del = del[del.length-1]
        //fa-trash
        let trash = document.createElement("i")
        trash.classList.add("fa-solid", "fa-trash-can")
        del.appendChild(trash)
    }
})


//////////////////// checkbox event ////////////////////
function checkTask(e) {
    p = e.target.parentElement.previousElementSibling
    if (e.target.className == "check") {
        p.style.textDecoration = "line-through"
        e.target.classList.toggle(".checked")
    } else if (e.target.className == "check .checked") {
        p.style.textDecoration = "none"
        e.target.classList.toggle(".checked")
    }
}
cont3.addEventListener("click", checkTask)

//////////////////// trashcan event ////////////////////
function delTask(e) {
    if (e.target.className == "fa-solid fa-trash-can") {
        wholeDiv = e.target.parentElement.parentElement
        wholeDiv.remove()
    }
}
cont3.addEventListener("click", delTask)