
export const dom = {
    inboxButton : document.getElementById('inbox'),
    todayButton : document.getElementById('today'),
    thisWeekButton : document.getElementById('thisweek'),
    
    addProject : document.getElementById('addproject'),
    board : document.getElementById('board'),
    screen : document.querySelector('.screen'),
    addTaskButton : document.getElementById('addtask'),
    addTaskInput : document.querySelector('.add-task-input'),
    addButton : document.getElementById('add'),
    cancelButton : document.getElementById('cancel'),
    tasks : document.getElementById('tasks'),
    inputText : document.getElementById('input-task')
    }

export function createTask(){
        const newTask = document.createElement('div');
        const newTaskInput = document.createElement('input');
        newTaskInput.type = 'checkbox';
        const newTaskText = document.createElement('p');
        newTaskText.textContent = dom.inputText.value;

        newTask.appendChild(newTaskInput);
        newTask.appendChild(newTaskText);

        dom.tasks.appendChild(newTask);
    }
    