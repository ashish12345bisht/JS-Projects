const counter=document.querySelectorAll(".counter");
counter.forEach((counter)=>{
    counter.innerHTML=0;
    const updateCounter=()=>{
        const targetCount=+counter.getAttribute("data-target");
        const increment=Number(counter.innerHTML);
        const incr=targetCount/100;
        if(increment<targetCount){
            counter.innerHTML=Math.round(increment+incr);
            setTimeout(updateCounter,10);
        }
    }
    updateCounter();
})