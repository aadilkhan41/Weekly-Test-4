let range_obj = document.querySelector("section input");
range_obj.addEventListener("input",(event)=>{
    let range_val = range_obj.value;
    document.querySelector(".duration").innerText = range_val+"s";
});

let button_obj = document.querySelector("form button");
button_obj.addEventListener("click",(event)=>{
    let loc1 = document.querySelector(".loc1").value;
    let loc2 = document.querySelector(".loc2").value;
    let msgType = document.querySelector(".msg-type").value;
    let msg = document.querySelector(".msg").value;
    let duration = document.querySelector("section input").value*1000;

    if(msgType == 'success') msg = '✓ '+msg;
    else if(msgType == 'error') msg = '! '+msg;
    else if(msgType == 'warning') msg = '⚠ '+msg;
    else if(msgType == 'info') msg = 'ⓘ '+msg;

    let div_obj = document.querySelector("."+loc2+"-"+loc1);

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${msgType}`;
    const span = document.createElement('span');
    span.textContent = msg;
    const closeButton = document.createElement('button');
    closeButton.className = 'close';
    closeButton.type = 'button';
    closeButton.title = 'Close';
    closeButton.textContent = '✕';

    closeButton.addEventListener('click', () => {
        clearInterval(autoRemove);
        messageDiv.remove();
    });

    messageDiv.appendChild(span);
    messageDiv.appendChild(closeButton);
    div_obj.append(messageDiv);

    const autoRemove = setInterval(() => {
        messageDiv.remove();
        clearInterval(autoRemove);
    }, duration);
});

