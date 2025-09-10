
const maxNumber = () => {

    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    let num3 = parseInt(document.getElementById('number3').value);

    if (num1 > num2 && num1 > num3){
        document.getElementById('result').innerHTML = `Maior: ${num1}` ;
    }
    else if (num2 > num1 && num2 > num3){
        document.getElementById('result').innerHTML = `Maior: ${num2}`;
    }
    else if (num3 > num1 && num3 > num2){
        document.getElementById('result').innerHTML = `Maior: ${num3}`;
    }
    else {
        document.getElementById('result').innerHTML = 'Não existe um único número maior!'
    }

    let media = (num1 + num2 + num3 ) / 3;

    document.getElementById('media').innerHTML = `Média: ${media}`;

}