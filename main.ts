radio.onReceivedNumber(function (receivedNumber) {
    Dice = receivedNumber
    basic.showNumber(Dice)
})
let Dice = 0
radio.setGroup(42)
let colorbit_51bit = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.setBrightness(16)
colorbit_51bit.clear()
basic.forever(function () {
	
})
