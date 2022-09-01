
let btn = document.getElementById('nik');
bttns = document.querySelectorAll('button');
let screenValue = '';
for (item of bttns) {

   
    item.addEventListener('click', (e) => {
        console.log('Button text is ', screenValue);
        
        buttonText = e.target.innerText;
       
       
        if (buttonText == 'C') {
            screenValue = "";
            btn.value = screenValue;
        }
        else if (buttonText == '=') {
            btn.value = eval(screenValue);
           //console.log('Your ans is',btn.value)
           // alert('Your output is ready')
        }
        else {
            screenValue += buttonText;
            btn.value = screenValue;
        }
        


    })

  }


        /*
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else */ 

