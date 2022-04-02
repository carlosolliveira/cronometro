var he = document.getElementById("h")
var me = document.getElementById("m")
var se = document.getElementById("s")

var h = 9
var m = 59
var s = 50
let loop
let i
var cont = () => {
    s += 1
    if(s == 60){
        console.log('entrou M')
        s = 0
        m += 1
        console.log(m)
        if(m >= 61){
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
        console.log(s.length)
        if(s > 9){
            console.log(s.length)
            se.innerText = s
        }
        else{
            se.innerText = `0${s}`
            console.log(s)
        }
    }
}

var start = () => {
    loop = setInterval(
        cont, 1000
    )
}