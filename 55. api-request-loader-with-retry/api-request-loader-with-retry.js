

let maxRetries = 3

function fetchData() {
    document.getElementById("loader").style.display = "block"
    document.getElementById("result").innerHTML = ""
    retryFetch(1)
}
function retryFetch(attempt) {
    fetch("https://jsonplaceholder.typicode.com/posts/1")

        .then(res => {
            if (!res.ok) {
                throw new Error("Fail")
            }
            return res.json()
        })
        .then(data => {
            document.getElementById("loader").style.display = "none"
            document.getElementById("result").innerHTML =
                "Title: " + data.title
        })
        .catch(() => {
            if (attempt < maxRetries) {
                document.getElementById("result").innerHTML =
                    "Retrying request... Attempt " + attempt
                setTimeout(() => {
                    retryFetch(attempt + 1)
                }, 1000)
            }
            else {
                document.getElementById("loader").style.display = "none"
                document.getElementById("result").innerHTML =
                    "Error: Failed after 3 attempts"
            }
        })
}