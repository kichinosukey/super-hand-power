radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 130)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 130)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 130)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 130)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 130)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 130)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.forever(function () {
    radio.setGroup(1)
})
