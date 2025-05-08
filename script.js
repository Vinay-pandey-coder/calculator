let display = document.getElementById('display')
let buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener("click",()=>{
        let value = button.getAttribute('data-value')
        let action = button.getAttribute('data-action')

        if(action === 'AC'){
            display.value = '';
        }else if(action === 'DEL'){
            display.value = display.value.slice(0,-1);
        } else if(action === 'calculate'){
            display.value = eval(display.value);
        } else if(value){
            display.value += value
        }
    })
})