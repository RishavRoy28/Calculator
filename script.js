let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let sciButtons = document.querySelector('.sci-buttons');
let string = "";
let isSciVisible = false;
let memory = 0; // For memory functions
let arr = Array.from(buttons);

sciButtons.style.display = 'none'; // Hide the scientific buttons by default

arr.forEach(button => {
    button.addEventListener('click', (e) => {
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
            isSciVisible = !isSciVisible;
            sciButtons.style.display = isSciVisible ? 'grid' : 'none';
            document.querySelector('.grid-container').classList.toggle('compact-grid');
        } else if(e.target.innerHTML == 'sin'){
            string = Math.sin(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'cos'){
            string = Math.cos(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'tan'){
            string = Math.tan(eval(string)).toString();
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
