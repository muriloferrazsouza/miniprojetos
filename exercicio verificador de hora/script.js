function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = hora < 10? `0${hora}`: hora
    var min = data.getMinutes()
    var min = min < 10? `0${min}`: min
    var sec = data.getSeconds()
    var sec = sec < 10? `0${sec}`: sec

    msg.innerHTML = `${hora}:${min}:${sec}`

    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#fed39a'
    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE! 
        img.src = 'fototarde.png'
        document.body.style.background = '#ff6e00'
    }else{
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#1f2834'
        document.body.style.color = 'white'
        document.querySelector('div#msg').style.color = 'black'
    }
}

setInterval(carregar, 1000); 
carregar();
