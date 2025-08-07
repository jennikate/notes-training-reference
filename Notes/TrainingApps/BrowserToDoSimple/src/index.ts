interface Todo {
    text: string;
    completed: boolean;
}

const form = document.querySelector("form") as HTMLFormElement;
const input = document.getElementById("todoInput") as HTMLInputElement; // override the default which is generic HTMLElement so we can do actions on the input
const list = document.getElementById("todolist") as HTMLUListElement;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null) return [];
    return JSON.parse(todosJSON);
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

function createTodo(todo: Todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", function() {
        todo.completed = checkbox.checked;
        saveTodos();
    })

    newLI.append(checkbox);
    newLI.append(todo.text);

    list?.append(newLI);
}

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false,
    }

    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();

    input.value = "";
}

form.addEventListener("submit", handleSubmit)

