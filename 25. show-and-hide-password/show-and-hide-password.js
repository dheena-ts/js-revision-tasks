function pass(){
    const input = document.getElementById('userInput')
    if(input.type === "password"){
        input.type = "text";
    }else{
        input.type="password"
    }
}