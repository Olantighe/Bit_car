radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        BitCar.move(35, 35)
    } else if (receivedNumber == 2) {
        BitCar.move(-50, -50)
    } else if (receivedNumber == 4) {
        BitCar.move(20, 0)
    } else if (receivedNumber == 3) {
        BitCar.move(0, 20)
    } else if (receivedNumber == 5) {
        BitCar.move(0, 0)
    }
})
let m1 = 60
let m2 = 60
basic.forever(function () {
    radio.setGroup(187)
    if (input.temperature() < 16) {
        basic.showNumber(input.temperature())
    } else if (input.temperature() > 17) {
        basic.showNumber(input.temperature())
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        if (BitCar.grove_ultrasonic(GrovePin.P12, DistanceUnit.cm) > 10) {
            BitCar.move(0, 0)
        }
    }
})
