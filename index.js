do{

alert("Seja bem vindo ao calculo de IMC!")
Peso = parseFloat(prompt("Digite o seu peso: "))
Altura = parseFloat(prompt("Digite o sua altura: "))

IMC = Peso/Altura 

if (IMC< 18.5) {
  alert("Você está abaixo do peso")
}

else if (IMC > 18.5 && IMC < 24.9){
  alert("Você está com o peso ideal")
}
else if (IMC > 25 && IMC < 29.9){
  alert("Você está com sobrepeso")
}
else if (IMC > 30 && IMC < 34.9){
  alert("Você está com Obesidade Grau 1")
}
else if (IMC > 35 && IMC < 39.9){
  alert("Você está com Obesidade Grau 2")
}
else {
  alert("Você está com Obesidade Grau 3")
}

condicao = prompt("Deseja realizar uma nova comparação (sim/nao)?")
console.log("")
 
} while (condicao == 'sim')

console.log("Fim de programa!")


