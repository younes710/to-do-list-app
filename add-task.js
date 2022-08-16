document.querySelector('.add-submit').addEventListener('click',
    function () {
        const task = {};
        task.title = document.querySelector('.add-task').value;
        task.date = document.querySelector('.add-date').value;
        task.time = document.querySelector('.time-select').value;
        let taskType = document.getElementsByName('btn');
        for (let i of taskType) {
            if (i.checked) {
                task.type = i.value;
            }
        }
        task.description = document.querySelector('textarea').value;
        console.log(task);
        let array = JSON.parse(localStorage.getItem('task')) || []
        array.push(task)
        localStorage.setItem('task', JSON.stringify(array))
    })