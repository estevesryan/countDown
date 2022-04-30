class timer {
    constructor() {
        this.days = 2,
            this.hours = 8,
            this.minutes = 13,
            this.seconds = 37
    }
}

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
let time = new timer()

function displayClock() {
    time.days < 10 ? days.innerHTML = "0" + time.days : days.innerHTML = time.days
    time.hours < 10 ? hours.innerHTML = "0" + time.hours : hours.innerHTML = time.hours
    time.minutes < 10 ? minutes.innerHTML = "0" + time.minutes : minutes.innerHTML = time.minutes
    time.seconds < 10 ? seconds.innerHTML = "0" + seconds.seconds : seconds.innerHTML = time.seconds
}

start = setInterval(countClock, 1000)

function countClock() {
    if (time.hours == 0) {
        time.days--
            time.hours = 60
    }
    if (time.minutes == 0) {
        time.hours--
            time.minutes = 60
    }
    if (time.seconds == 0) {
        time.minutes--
            time.seconds = 60
    } else {
        time.seconds--
    }

    displayClock()
}
