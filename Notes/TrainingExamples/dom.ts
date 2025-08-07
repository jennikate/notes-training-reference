// TS only operator: null none assertion operator -> !
// add that at the end to tell TS that we are sure this will never be null
// it's riskier though, what if it's not found?
const btn = document.getElementById("btn")!;

btn.addEventListener("click", function() {
    alert("CLICKED")
});

// Other approach, optional chain to check exists before using
const btnNull = document.getElementById("btn");

btnNull?.addEventListener("click", function() {
    alert("CLICKED")
});


// ================
// type assertions

const btnNull2 = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("todoInput") as HTMLInputElement; // override the default which is generic HTMLElement so we can do actions on the input
// alternate syntax: (<HTMLInputElement>document.getElementById("todoInput")) --> this doesn't work with jsx

btnNull2.addEventListener("click", function() {
    console.log(input.value);
    input.value = "";
});

// =======================
// events

const form = document.querySelector("form") as HTMLFormElement;

// If you have an inline anonymous function
// TS is smart enough here to work out the 'e' is within the form 
// and therefore a submit event
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("SUBMITTED");
})

// If you move your function out to a named function
// then TS doesn't know that e is an event, or what type of event
// you can do e: Event, but e: SubmitEvent is more accurate
function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log("SUBMITTED");
}

form.addEventListener("submit", handleSubmit)

