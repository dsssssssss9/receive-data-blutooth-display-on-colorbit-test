radio.onReceivedNumber(function (receivedNumber) {
    Dice = receivedNumber
    if (Dice == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (Dice == 2) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (Dice == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
    } else if (Dice == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (Dice == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (Dice == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let Dice = 0
radio.setGroup(42)
let colorbit_51bit = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.setBrightness(16)
colorbit_51bit.show()
colorbit_51bit.showColorIcon(ColorIcon.Yes, colorbit.colors(BitColors.Red))
basic.pause(1000)
colorbit_51bit.clear()
led.setBrightness(0)
basic.forever(function () {
    for (let Loop1 = 0; Loop1 <= 4; Loop1++) {
        for (let Loop2 = 0; Loop2 <= 4; Loop2++) {
            if (led.point(Loop1, Loop2)) {
                colorbit_51bit.drawColorBit(Loop1, Loop2, colorbit.colors(BitColors.White))
            } else {
                colorbit_51bit.drawColorBit(Loop1, Loop2, colorbit.colors(BitColors.Black))
            }
        }
    }
})
