const calculateTemp=()=>{
    const temp=document.getElementById("temperature").value;
    const tempSelected=document.getElementById("temp_diff");
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;
    let result;
    console.log(temp);
    if(valueTemp == 'cel'){
        result=Math.round((temp-32)/1.8);
    }
    else{
        result=Math.round((temp*1.8)+32);
    }
    console.log(result);
    document.getElementById("resultContainer").innerHTML=result;
};