
function appendTodisplay(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById.apply("display").value = '';
}

function calculation()
{
    try{
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    }
    catch(e){
        alert="Invalid!!!!"
    }
}
