const countValue=document.querySelector('#counter');
const increment = function(){
    // get value from UI
    let value=parseInt(countValue.textContent);
    //Update the value
    value=value+1;
    if(value>0){
        counter.style.color='green';
    }
    if(value===0){
        counter.style.color='black';
    }
    //Set the value onto UI
    countValue.textContent=value;
}

const decrement= function(){
 
    // get value from UI
    let value=parseInt(countValue.textContent);
    //Update the value
    value=value-1;
    if(value<0){
        counter.style.color='red';
    }
        
    //Set the value onto UI
    countValue.textContent=value;

}