//evento de add tarefa
function addTask(){
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle){
        //clonar template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true); //cria um clone do Node

        //add títitulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover classes densncessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //add tarefa na lista
        const list = document.querySelector("#tasks-list");
        list.appendChild(newTask);

        //adcionar evento de remover
        const removeBtn = newTask.querySelector("#remove-btn").addEventListener("click", function(e){
            removeTask(this);     
        });

        //adicionar evento de completar tarefa
        const doneBtn =newTask.querySelector("#done-btn").addEventListener("click", function(e){
            doneTask(this);
        });

        //limpar texto da tarefa Pai 
        document.querySelector("#task-title").value ="";
    }
}

//criando função de remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
    console.log(task);
}

//criando a função de completar tarefa
function doneTask(task){
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done");


}

//evento ao cliclar no botão de add tarefa
var addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    e.preventDefault(); //
    addTask(); //função que cria tarefas novas

});

//evento de remover tarefa
//evento de completar tarefa