const eventBus = {

    events: {},

    subscribe: function (event, callback) {

        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(callback)
    },
    publish: function (event, data) {
        if (this.events[event]) {
            this.events[event].forEach(cb => cb(data))
        }
    }
}
eventBus.subscribe("userLogin", function (data) {

    document.getElementById("log").innerHTML = "Welcome " + data.name

})


eventBus.subscribe("userLogin", function (data) {
    console.log("User logged:", data.name)
})


function login() {
    eventBus.publish("userLogin", 
        {
             name: "John" 

        })
}