namespace HandPower {

//% blockId=device_receiver
//% block="receiver %receivedNumber %pause %speed"
export function receiver(groupNumber: number = 1, pause: number = 500, speed: number = 130): void
{
    radio.setGroup(groupNumber)
    if (radio.receiveNumber() == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
        basic.pause(pause)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (radio.receiveNumber() == 2) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
        basic.pause(pause)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (radio.receiveNumber() == 3) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
        basic.pause(pause)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (radio.receiveNumber() == 4) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
        basic.pause(pause)
        maqueen.motorStop(maqueen.Motors.All)
        }
    }

//% blockId=device_sender
//% block="sender %sendNumber"
export function sender(groupNumber: number = 1): void
{
    radio.setGroup(groupNumber)
    if (input.isGesture(Gesture.TiltRight)) {
        radio.sendNumber(1)
    } else if (input.isGesture(Gesture.TiltRight)) {
        radio.sendNumber(2)
    } else if (input.isGesture(Gesture.LogoDown)) {
        radio.sendNumber(3)
    } else if (input.isGesture(Gesture.LogoUp)) {
        radio.sendNumber(4)
        }
    }
}
