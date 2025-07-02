//Comando SWITCH = Funciona como o IF, porém para valores FIXOS! LEMBRAR!!!!! Sempre colocar o comando BRAKE após cada case
var agora = new Date()
var diaSem = agora.getDay() //Pega o valor do dia da semana, porém em valor numérico
/*
    Domingo = 0
    Segunda = 1
    Terça = 2
    Quarta = 3
    Quinta = 4
    Sexta = 5 
    Sábado = 6
*/

console.log(diaSem)

switch(diaSem){ //Função para testar valores FIXOS, para intervalos, usar o IF
    case 0:
        console.log('Domingo')
        break //Sempre colocar o BRAKE dentro de cada CASE
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('ERRO! Dia inválido!')
        break
}