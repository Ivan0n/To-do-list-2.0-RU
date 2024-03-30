const btn = document.querySelector('.gui')
const inpt = document.querySelector('.mes')


function click(){
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'niger');
    newDiv.innerHTML = `<h2>${inpt.value}</h2>`;
    document.body.appendChild(newDiv)
}
btn.addEventListener('click', click)