const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');
const steps = document.getElementById('step-count');

let currentActive = 1;

next.addEventListener('click',()=>{
   currentActive++;
   if(currentActive>circle.length){
       currentActive = circle.length;
   }

   update();
});
prev.addEventListener('click',()=>{
    currentActive--;
    if(currentActive<1){
        currentActive = 1;
    }
    update();
 });

function update(){
    steps.innerText = currentActive;
    circle.forEach((eachCircle,index)=>{
        if(index<currentActive){
            eachCircle.classList.add('active');
        }
        else{
            eachCircle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
     progress.style.width = ((actives.length - 1) / (circle.length - 1)) * 100  + '%';
     if(currentActive === 1){
         prev.disabled = true;
     }
     else{
         prev.disabled = false;
     }
     if(actives.length === 4){
        next.disabled = true;
    }
    else{
        next.disabled = false;
    }

}