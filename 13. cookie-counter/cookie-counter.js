function getCookie(name) {

    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(name + "=") == 0) {
            return c.substring(name.length + 1);
        }
    }
    return 0;
}


function setCookie(name, value) {
    document.cookie = name + "=" + value + ";path=/";
}


let count = getCookie("VisitsCounter");

if (count == 0) {
    count = 1;
    setCookie("VisitsCounter", count);
}


document.getElementById("visitForm").addEventListener("submit", function (e) {
    e.preventDefault();
    count++;
    setCookie("VisitsCounter", count);
    alert("Visits: " + count);
});
