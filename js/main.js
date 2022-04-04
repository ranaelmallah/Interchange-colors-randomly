                 //  first method by rgb
let button = document.getElementById("btn")
button.onclick=function(){
    document.body.style.backgroundColor=
    'rgb('+Math.round(Math.random()*225)+
    ','+Math.round(Math.random()*225)+
    ','+Math.round(Math.random()*225)+ ')' ;
}


                 // second method by hexa
// let button= document.getElementById("btn")
// button.onclick=function(){
//     let code = "0123456789ABCDEF";
//     let color="#"
//     for(let i=0;i<6;i++){
//         color+=code[Math.floor(Math.random()*16)];
//         }
//         document.body.style.backgroundColor=color;
// }