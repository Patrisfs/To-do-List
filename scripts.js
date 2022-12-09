//evento de add tarefa
function addTask(){
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle){
        //clonar template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);

        //add títitulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover classes densncessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //add tarefa na lista
        const list = document.querySelector("#tasks-list");
        list.appendChild(newTask);

        //limpar texto da tarefa
        document.querySelector("#task-title").value ="";
    }
}






//evento ao cliclar no botão de add tarefa
var addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    addTask();

});

//evento de remover tarefa
//evento de completar tarefa