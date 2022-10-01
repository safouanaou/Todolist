import {createTask, dom} from './DOM';

export function addTask(){
    dom.addTaskButton.addEventListener('click', ()=>{
        dom.addTaskInput.style.zIndex = '0'
    })
}

export function addTaskToScreen(){
    dom.addButton.addEventListener('click', ()=>{
        createTask();
        dom.inputText.value = '';
        dom.addTaskInput.style.zIndex = '-1';

    })
}

