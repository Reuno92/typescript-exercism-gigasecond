export default class Gigasecond {

    constructor(private start: Date) {
        this.date()
    }

    private date(): Date {
        return new Date(this.start.getTime() + Math.pow(10, 9))
    }
}

test = new Gigasecond(Date.now)