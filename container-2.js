const onButton=document.querySelector(".on");
const offButton = document.querySelector(".off");
const image=document.getElementById("bulb");
onButton.addEventListener('click',()=>image.src="./on.png");
offButton.addEventListener('click', () => image.src="./off.png");