import './style.css';
function component(){
    const element = document.createElement("div");
    element.textContent="hello"
    element.classList.add("hello");
    return element;
}
console.log("dsafadsfa");
document.body.appendChild(component());