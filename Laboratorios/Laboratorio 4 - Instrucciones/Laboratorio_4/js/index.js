/* Helper functions */
function markTodoListElements(check_value) {
    const list_of_todos = document.getElementsByName('todo');
    for(let i = 0; i < list_of_todos.length; ++i) {
        list_of_todos[i].checked = check_value;
    }  
}

/* Add event listener to the buttons */
const post_todo_button = document.getElementById('post-todo-button');
const clear_todo_button = document.getElementById('clear_button');
const mark_todo_button = document.getElementById('mark_button');
const delete_button = document.getElementById('delete_button');
let todo_list = document.getElementById('todo_list');

post_todo_button.addEventListener('click', (e) => {
    e.preventDefault();
    const new_todo = document.getElementById('todo_container');
    todo_list.innerHTML 
        += '<input type = "checkbox" name="todo" /> ' + new_todo.value + '<br>';
    todo_container.value = '';
});

clear_todo_button.addEventListener('click', (e) => {
    e.preventDefault();
    markTodoListElements(false);
});

mark_todo_button.addEventListener('click', (e) => {
    e.preventDefault();
    markTodoListElements(true);
});

delete_button.addEventListener('click', (e) => {
    todo_list.innerHTML = '';
});