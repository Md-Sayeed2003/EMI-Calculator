let amount = document.querySelector("#amount");
let interest = document.querySelector("#interest");
let duration = document.querySelector("#duration");
let button = document.querySelector("#calculate");
let output = document.getElementById("output");

button.addEventListener("click",function(){

    const p = amount.value;
    const r = interest.value/1200;
    const t = duration.value;
    if(p=='' || p==NaN || r=='' || r==NaN || t==NaN||t==''){
        alert("enter the details");
    }

    const emiValue = (p * r * (1+r)**t)/((1+r)**t-1);

    output.innerText=emiValue.toFixed(2);





})
 