function showDateTime(){
    const now = new Date();
    const finalDateTime = now.toLocaleString()
    document.getElementById('resultDiv').innerHTML=finalDateTime
}