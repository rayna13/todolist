document.getElementById('addTask').addEventListener('click', function () {
    document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('modalCancel').addEventListener('click', function () {
    document.getElementById('modal').classList.add('hidden');
});


document.getElementById('menu').addEventListener('click', function () {
    document.getElementById('catContent').classList.toggle('hidden');
});

document.getElementById('submit').addEventListener('click', function () {
    document.getElementById('modal').classList.add('hidden');
    Task.addTask();
});


document.getElementById('catBtn').addEventListener('click', function () {
    Task.displayTask();
});

const btns = document.getElementsByClassName('catBtn');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        Task.displayTask(btns[i].textContent)
    });    
}


Task.displayTask();