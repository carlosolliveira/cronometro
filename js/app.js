var he = document.getElementById("h")
var me = document.getElementById("m")
var se = document.getElementById("s")

var h = 0
var s = 0
var m = 0

var loop
var paused = false
// var started = false

var cont = () => {
    s += 1
    if(s == 60){
        console.log('entrou M')
        s = 0
        m += 1
        console.log(m)
        se.innerText = `0${s}`
        if(m == 60){
            h += 1
            m = 0
            if(h > 9){
                he.innerText = h
                me.innerText = '00'
            }
            else{
                he.innerText = `0${h}`
                me.innerText = '00'
            }
        }
        else{
            if(m > 9){
                me.innerText = m
            }else{
                me.innerText = `0${m}`
            }
        }
    }
    else{
        if(s > 9){
            se.innerText = s
        }
        else{
            se.innerText = `0${s}`
        }
    }
}

var start = () => {
    // started = !started
    loop = setInterval(
        cont, 1000
    )
    document.getElementById("start").disabled = true
    document.getElementById("start").style.cursor = "not-allowed"
    document.getElementById("start").style.background = "#44475aa9"
    document.getElementById("start").style.opacity = "0.5"
    
}

var pause = () => {
    paused = !paused
    if(paused){
        clearInterval(loop)
        document.getElementById("pause").innerText = "Continuar"
    }else{
        document.getElementById("pause").innerText = "Pausar"
        start()
        // if(started){
        // }
    }
}

var reset = () => {
    clearInterval(loop)
    h, m, s = Number(0)
    he.innerText = "00"
    me.innerText = "00"
    se.innerText = "00"
    document.getElementById("start").disabled = false
    document.getElementById("start").style.cursor = "auto"
    document.getElementById("start").style.background = "#44475a"
    document.getElementById("start").style.opacity = "1"
    // started = false
}