let form= document.querySelector('.form')
let input= document.querySelector('#text')
form.addEventListener('submit',chase)

 let licontain = document.querySelector('.listcon')

let listone= document.querySelector('.firstli')
function chase(e){
    e.preventDefault()
    let inputval = input.value
//    listone.innerHTML=inputval
licontain.innerHTML+= `<li class='list'>${inputval}</li>`
let listcon=document.querySelectorAll('.list')
listcon.forEach(
    function(list){

    


    list.addEventListener('click',function(){
    list.style.textDecoration='line-through'})

list.addEventListener('dblclick',function(){
    list.remove()})





})}
