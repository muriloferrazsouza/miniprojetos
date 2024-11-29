function calcular(){
    var dataHoje = new Date()

    var ano = dataHoje.getFullYear()

    var mes = dataHoje.getMonth()+1
    var mes = mes < 10? `0${mes}`: mes

    var dia = dataHoje.getDate()
    var dia = dia < 10? `0${dia}`: dia

    var formData = document.querySelector('input#txtdata')
    var userData = formData.value
    var [userAno, userMes, userDia] = userData.split('-') //o split serve para divir a string em três variáveis, organizadas em arrays
    var idade = ano - Number(userAno)

    var result = document.querySelector('div#result')

    if(userAno == 0 || userAno > ano){
        window.alert('[ERRO] Por favor, verifique o ano informado e tente novamente')
        window.location.reload(true) //força a página a recarregar

    }else{

        if(userMes == mes && userDia == dia){      
            window.alert(`FELIZ ${idade} ANOS, MEUS PARABÉNS!!!`)
            window.open("https://www.youtube.com/watch?v=WQzWFU_IKR4"); //abre link em outra aba
        } 

        var userGen = document.getElementsByName('txtgen')//Radio (botões) funcionam como sequência numérica, começando em zero e indo até o número de botões adicionados
        var genero = ''
        var img = document.createElement('img') //criando espaço para imagem dinamicamente
        img.setAttribute('id', 'foto') // setamos uma ID de nome 'foto' para nossa imagem
    
        if(userMes > mes){
            idade = idade - 1
            if(idade == -1){
                window.alert('[ERRO] Por favor, verifique o mês informado e tente novamente')
                window.location.reload(true)
            }
        }

        if (userGen[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 3){
                img.setAttribute('src', 'bebe-menino.png') //src é a tag para o nome da imagem
            }else if(idade >= 3 && idade < 18){
                img.setAttribute('src', 'crianca-menino.png')
            }else if(idade > 18 && idade < 65){
                img.setAttribute('src', 'adulto-homem.png')
            }else{
                img.setAttribute('src', 'idoso-homem.png')
            }   
        } else{
            genero = 'Mulher'

            if(idade >= 0 && idade < 3){
                img.setAttribute('src', 'bebe-menina.png')
            }else if(idade >= 3 && idade < 18){
                img.setAttribute('src', 'crianca-menina.png')
            }else if(idade > 18 && idade < 65){
                img.setAttribute('src', 'adulto-mulher.png')
            }else{
                img.setAttribute('src', 'idoso-mulher.png')
            }
        }

        result.innerHTML = `Detectamos ${genero} de ${idade} anos </br></br>`
        result.appendChild(img) //aqui estamos adicionando um elemento (appendChild) à div 'result'
    }

    /*window.alert(userData)
    window.alert(userAno)
    window.alert(userMes)
    window.alert(userDia)
    window.alert(mes)
    window.alert(dia)*/
}