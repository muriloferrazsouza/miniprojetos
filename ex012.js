var agora = new Date() //Pega a data e horário do seu computador
var hora = agora.getHours() //Filtra para pegar o valor apenas da HORA
var hora2 = agora.getTime()

console.log(agora)

if(hora < 5){
    console.log(`Agora são ${hora} horas da madrugada!`)
}else if(hora < 12){
    console.log(`Agora são ${hora} horas da manhã!`)
}else if (hora < 18){
    console.log(`Agora são ${hora} horas da tarde!`)
}else{
    console.log(`Agora são ${hora} horas da noite!`)
}