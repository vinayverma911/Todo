console.log(`File added`);
showAllTasks();

document.getElementById(`addButton`).addEventListener('click', function () {

    let title = document.getElementById(`title`);
    let task = document.getElementById(`task`);

    if (title.value.length == 0) {
        window.alert(`Title can not be empty...!`);
    }
    else {
        if (task.value.length == 0) {
            window.alert(`Task can not be empty..!`);
        }
        else {
            if (localStorage.getItem(title.value) == null) {
                localStorage.setItem(title.value, task.value);
                title.value = " ";
                task.value = " ";
            }
            else {
                window.alert(`Title already exists..!`);
                title.value = " ";
            }
        }
    }
    showAllTasks();
})

function showAllTasks() {

    let len = localStorage.length;
    let title;
    let task;
    let html = ` `;
    for (let i = 0; i < len; i++) {
        title = localStorage.key(i);
        task = localStorage.getItem(title);
        html = html + `<div class="noteCard my-2 mx-2 card" style="width: 14rem;">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-title">${task}</p>
                <button class="btn btn-primary" onclick="deleteTask('${title}')">Delete</button>
            </div>
        </div>`;
    }
    document.getElementById(`storedTask`).innerHTML = html;

}

function deleteTask(str) {
    localStorage.removeItem(str);
    showAllTasks();
}

function getTask() {

    let str = document.getElementById('search').value;
    if (str.length == 0) {
        window.alert('Empty Title');
        return;
    }
    else {
        if (localStorage.getItem(str) != null) {
            window.alert(str+' : '+ localStorage.getItem(str));
        }
        else {
            window.alert(`No Task found with title: ${str}`);
        }
    }
}