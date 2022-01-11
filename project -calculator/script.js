let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e) =>{  // jb bhi koi click kre aapke button pr 
        buttonText = e.target.innerText; // e.target - button jis pr click hua h or innertext - jo button ke andar likha hua h 
        console.log('Button text is ',buttonText);
        if(buttonText == "X"){
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue; // star aa jayega screen pr
        }
        else if(buttonText == "C"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == "="){
            screen.value = eval(screenValue); // screenvalue ko evaluate karega 
        }
        else if(buttonText == "<-"){
            backspace = screen.value;
            restNum = backspace.slice(0,-1);
            screenValue = restNum;
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue
        }
    })
}