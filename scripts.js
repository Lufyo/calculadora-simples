// Constantes individuais dos botões
const btnSoma = document.getElementById('soma'),
btnSub = document.getElementById('sub'),
btnDiv = document.getElementById('div'),
btnMult = document.getElementById('mult');

// Atribuindo função de clique para somar dois números
btnSoma.onclick = function somar(){
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  let resultado = num1 + num2;

  if(!num1 || !num2){  // Conferindo se os campos estão em branco
    document.getElementById('resultado').innerText = "Campos obrigatórios!"
  }else{
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
  }
}

// Atribuindo função de clique para subtrair dois números
btnSub.onclick = function subtrair(){
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  let resultado = num1 - num2;

  if(!num1 || !num2){ // Conferindo se os campos estão em branco
    document.getElementById('resultado').innerText = "Campos obrigatórios!"
  }else{
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
  }
}

// Atribuindo função de clique para dividir dois números
btnDiv.onclick = function dividir(){
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  let resultado = num1 / num2;

  if(!num1 || !num2){  // Conferindo se os campos estão em branco
    document.getElementById('resultado').innerText = "Campos obrigatórios!"
  }else{
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
  }
}
  
// Atribuindo função de clique para multiplicar dois números
btnMult.onclick = function multiplicar(){
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  let resultado = num1 * num2;

  if(!num1 || !num2){  // Conferindo se os campos estão em branco
    document.getElementById('resultado').innerText = "Campos obrigatórios!"
  }else{
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
  }
}
