const tempLoad=()=>{
    let temp=document.getElementById("temp");
    setTimeout(()=>{
        temp.innerHTML = "&#xf2ca";
        temp.style.color="yellow";
    },1000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color = "orange";
    }, 2000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
        temp.style.color = "red";
    }, 3000);
}
setInterval(tempLoad,4000);