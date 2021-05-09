

let button = document.getElementById('button');
let toDoContainer = document.getElementById('toDoContainer');
let input = document.getElementById('inputField');
let count=0;
let pending=document.getElementById('pending');
let val="";
var par= document.createElement('p');
par.classList.add('paragraph-styling');

let date = document.getElementById('left');

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
date.innerText ="Today : "+ today ;


input.addEventListener("keyup", function(event) { 
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("button").click();
    }
  });

button.addEventListener('click',function(){
    
    var para= document.createElement('p');
    para.classList.add('paragraph-styling')
    para.innerText= input.value;
    if(input.value!=""){
        count=count+1;
    }
    toDoContainer.appendChild(para);
    input.value= "";
    par.innerText="You have "+count +" pending tasks";

    para.addEventListener('click',function(){
        if(para.style.textDecoration=='line-through'){
            para.style.textDecoration='none';
            count=count+1;
            par.innerText="You have "+count +" pending tasks";
        }
        else{
            para.style.textDecoration='line-through';
            count=count-1;
            if(count<0){
                count=0;
            }
            par.innerText="You have "+count +" pending tasks";
        }
        
    })


    para.addEventListener('dblclick', function(){
        toDoContainer.removeChild(para);
        count=count-1;
        if(count<0){
            count=0;
        }
        par.innerText="You have "+count +" pending tasks";
    })
    


    pending.appendChild(par);
    
})
