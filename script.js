let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let sciCalc = document.getElementById('sciCalc');
let string = "";
let isRadians = true;
let memory = 0; // For memory functions
let arr = Array.from(buttons);

sciCalc.style.display = 'none'; // Hide the scientific calculator by default

arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
            input.value = string;
        } else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        } else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        } else if(e.target.classList.contains('toggleSci')){
            sciCalc.style.display = sciCalc.style.display === 'none' ? 'block' : 'none';
        } else if(e.target.innerHTML == 'sin'){
            string = Math.sin(isRadians ? eval(string) : eval(string) * (Math.PI / 180)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'cos'){
            string = Math.cos(isRadians ? eval(string) : eval(string) * (Math.PI / 180)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'tan'){
            string = Math.tan(isRadians ? eval(string) : eval(string) * (Math.PI / 180)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'sinh'){
            string = Math.sinh(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'cosh'){
            string = Math.cosh(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'tanh'){
            string = Math.tanh(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'asin'){
            string = Math.asin(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'acos'){
            string = Math.acos(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'atan'){
            string = Math.atan(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'ln'){
            string = Math.log(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'log'){
            string = Math.log10(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'x^y'){
            string += '**';
        } else if(e.target.innerHTML == '√'){
            string = Math.sqrt(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'π'){
            string += Math.PI;
            input.value = string;
        } else if(e.target.innerHTML == 'e'){
            string += Math.E;
            input.value = string;
        } else if(e.target.innerHTML == 'φ'){
            string += (1 + Math.sqrt(5)) / 2;
            input.value = string;
        } else if(e.target.innerHTML == '(' || e.target.innerHTML == ')'){
            string += e.target.innerHTML;
            input.value = string;
        } else if(e.target.innerHTML == 'M+'){
            memory += eval(input.value || "0");
        } else if(e.target.innerHTML == 'M-'){
            memory -= eval(input.value || "0");
        } else if(e.target.innerHTML == 'MR'){
            string = memory.toString();
            input.value = string;
        } else if(e.target.innerHTML == 'MC'){
            memory = 0;
        } else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
