let range_obj = document.querySelector("section input");
range_obj.addEventListener("change",(event)=>{
    let range_val = range_obj.value;
    document.querySelector(".duration").innerText = range_val+"s";
});