var prev=document.querySelector('.preloader')
window.addEventListener('load',function(){
  prev.classList.add('hide')
})

var text=document.querySelector('.men')
var strtext=text.textContent
var tex=strtext.split("")
text.textContent=""

for(i=0;i<tex.length;i++){
    text.innerHTML+="<span>"+ tex[i] +"</span>"
}
let char=0
let timer=setInterval(tick,50)
function tick(){
    var spa=document.querySelectorAll('span')[char]
    spa.classList.add('fade')
    char++
    if(char===tex.length){
        complete()
        return
    }
}
function complete(){
    clearInterval(timer)
    timer=null
}
//sidebar
function opennav(){
    document.getElementById('sideopen').style.width="250px"
}

function closenav(){
    document.getElementById('sideopen').style.width="0"
}

window.addEventListener("scroll",function(){
    var sc=document.querySelector("navbar")
    sc.classList.toggle("sticky",window.screenY >0)
   
})
 
var scrolbtn=document.querySelector('.scrollbtn')
scrolbtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})
//inc and dec buttons
var incre=document.querySelector('.prin')
var decre=document.querySelector('.pridec')
var output=document.querySelector('.szx')
var output2=document.querySelector('.sxz')
let couin=0
incre.addEventListener('click',()=>{
   
  var xc=  couin++
  var cx=xc*25
    output.innerHTML=xc
    output2.innerHTML=cx



})
decre.addEventListener('click',()=>{
   var dezx=couin--
   var dezy=dezx*25
    output.innerHTML=dezx
    output2.innerHTML=dezy
})
var burgbtn=document.querySelector('.burginc')
var burgbtn1=document.querySelector('.burgdec')
var burgit=document.querySelector('.burz')
var burgpri=document.querySelector('.burx')

let burgcoun=0
burgbtn.addEventListener('click',()=>{
    var burgin=burgcoun++
    burgit.innerHTML=burgin
    var burgprice=burgin*40
    burgpri.innerHTML=burgprice
})
burgbtn1.addEventListener('click',()=>{
    var burgde=burgcoun--
    burgit.innerHTML=burgde
    var burgdepri=burgde*40
    burgpri.innerHTML=burgdepri
})

var spabtn=document.querySelector('.spainc')
var spabtn1=document.querySelector('.spadec')
var spait=document.querySelector('.xxx')
var spaprice=document.querySelector('.zzz')

let spagcount=0
spabtn.addEventListener('click',()=>{
    var spapricein=spagcount++
    spait.innerHTML=spapricein
    var spatotpri=spapricein*30
    spaprice.innerHTML=spatotpri
})
spabtn1.addEventListener('click',()=>{
    var spapricedec=spagcount--
    spait.innerHTML=spapricedec
    var spatotprice1=spapricedec*30
    spaprice.innerHTML=spatotprice1
})

var sbtn=document.querySelector('.souin')
var sbtn1=document.querySelector('.soudec')
var souait=document.querySelector('.souit')
var soupric=document.querySelector('.soutot')

let sp=0
sbtn.addEventListener('click',()=>{
    var soupricing=sp++
    souait.innerHTML=soupricing
    var soutotpricing=soupricing*60
    soupric.innerHTML=soutotpricing
})

sbtn1.addEventListener('click',()=>{
    var soupricing1=sp--
    souait.innerHTML=soupricing1
    var soutotpricing1=soupricing1*60
    soupric.innerHTML=soutotpricing1
})



// model
var modalzbt=document.querySelector('.addmode')
var modalzbtz=document.querySelector('.addmode1')

var modalz=document.querySelector('.clmode')
var modalzz=document.querySelector('.modals')
var modalx=document.querySelector('.clmode1')
var modalxx=document.querySelector('.modals1')

//burger
var modalburg=document.querySelector('.cart')
var modalburgz=document.querySelector('.clmode2')
var modalburgs=document.querySelector('.modals2')

var burg=document.createElement('img')
burg.src="burger.png"
modalburg.addEventListener('click',()=>{
    modalburgz.classList.add('clactive2')
    modalburgs.appendChild(burg)
})
var closeburg=document.querySelector('.closemode2')
closeburg.addEventListener('click',()=>{
    modalburgz.classList.remove('clactive2')
})
//spagetti
var modalspag=document.querySelector('.clmode3')
var modalspagz=document.querySelector('.modals3')
var modalspagbtn=document.querySelector('.spa')

var spag=document.createElement('img')
spag.src="spagetti.png"
modalspagbtn.addEventListener('click',()=>{
    modalspag.classList.add('clactive3')
    modalspagz.appendChild(spag)
})
var spagclose=document.querySelector('.closemode3')
spagclose.addEventListener('click',()=>{
    modalspag.classList.remove('clactive3')
})


var nor=document.createElement('img')
nor.src="pizza1.jpg"
var sou=document.createElement('img')
sou.src="cocktail.jpg"

modalzbt.addEventListener('click',()=>{
modalz.classList.add('clactive')
modalzz.appendChild(nor)
})
var closemode=document.querySelector('.closemod')
closemode.addEventListener('click',()=>{
    modalz.classList.remove('clactive')
})

modalzbtz.addEventListener('click',()=>{
modalx.classList.add('clactive1')
modalxx.appendChild(sou)
})
var closemode1=document.querySelector('.closemode1')
closemode1.addEventListener('click',()=>{
    modalx.classList.remove('clactive1')
})

//sigin
var signbtn=document.querySelector('.sign')
var signclbtn=document.querySelector('.closesignin')
var signing=document.querySelector('.signinn')
var signin=document.querySelector('.signinmon')
signbtn.addEventListener('click',()=>{
    signing.classList.add('addsign')
})
signclbtn.addEventListener('click',()=>{
    signing.classList.remove('addsign')
})



//visualeffects
function vis(){
    var visual=document.querySelector('.foot')
    var screen=visual.getBoundingClientRect().top
    var sct=window.innerHeight
    if(screen < sct){
        visual.classList.add('foo')
    }
}
window.addEventListener('scroll',vis)

