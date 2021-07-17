namespace HandPower {

//% blockId=device_receiver
//% block="receiver %receivedNumber %pause %speed"
export function receiver(receivedNumber: number, pause: number = 500, speed: number = 130): void
{
    if (receivedNumber == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
        basic.pause(pause)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
        basic.pause(pause)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
        basic.pause(pause)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
        basic.pause(pause)
        maqueen.motorStop(maqueen.Motors.All)
        }
    }

//% blockId=device_sender
//% block="sender %sendNumber"
export function sender(sendNumber: number = 1): void
{
    radio.setGroup(1)
    if (input.isGesture(Gesture.TiltRight)) {
        radio.sendNumber(0)
    } else if (input.isGesture(Gesture.TiltRight)) {
        radio.sendNumber(1)
    } else if (input.isGesture(Gesture.LogoDown)) {
        radio.sendNumber(2)
    } else if (input.isGesture(Gesture.LogoUp)) {
        radio.sendNumber(3)
        }
    }
}