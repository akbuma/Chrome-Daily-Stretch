class Countdown {
    constructor(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
        this.totalSeconds = (60 * minutes) + seconds;
    }

    getMinutes() {
        return Math.floor(this.totalSeconds / 60);
    }

    getSeconds() {
        return this.totalSeconds - (this.getMinutes() * 60);
    }

    subtractTime() {
        this.totalSeconds -= 1;
    }
}