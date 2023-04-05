const fechaNumero = document.getElementById('fechaNumero');
const fechaTexto = document.getElementById('fechaTexto');
const fechaMes = document.getElementById('fechaMes');
const fechaAnio = document.getElementById('fechaAnio');


const listaContainer = document.getElementById('listaContainer');

const setDate = () => {
    const date = new Date();
    fechaNumero.textContent = date.toLocaleString('es', { day: 'numeric' });
    fechaTexto.textContent = date.toLocaleString('es', { weekday: 'long' });
    fechaMes.textContent = date.toLocaleString('es', { month: 'short' });
    fechaAnio.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const agregarNuevaTarea = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    listaContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const orden = () => {
    const done = [];
    const toDo = [];
    listaContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    orden().forEach(el => listaContainer.appendChild(el))
}

setDate();