document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todoForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        taskList.appendChild(li);

        // Add event listeners for complete, edit, and delete buttons
        const completeBtn = li.querySelector('.complete-btn');
        const editBtn = li.querySelector('.edit-btn');
        const deleteBtn = li.querySelector('.delete-btn');
        const span = li.querySelector('span');

        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        editBtn.addEventListener('click', function() {
            const newTask = prompt('Edit task:', span.textContent);
            if (newTask !== null && newTask.trim() !== '') {
                span.textContent = newTask.trim();
            }
        });

        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
    }
});
