console.log('in js');

$(document).ready(clickHandlers);

function clickHandlers(){
    $('#submitButton').on('click', getTasks);
    $('#editButton').on('click', editCategory);
    $(document).on('click', '.checkButton', taskComplete);
    $(document).on('click', '.deleteButton', deleteTask);
    renderTasks();
};

function addTask(){
};

function editCategory(){

};

function taskComplete(){

};

function deleteTask(){

};

function getTasks(){
    console.log('you clicked me!');
    $.ajax({
        method: 'GET',
        url: '/tasks'
    }).then((taskRes) => {
        console.log(taskRes);
        renderTasks(taskRes);
    }).catch((error) => {
        console.log('Error in GET', error);
    });
}


function renderTasks(response){
    console.log(response);
};