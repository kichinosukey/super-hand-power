input.onButtonPressed(Button.A, function () {
	
})
namespace HandPower {

//% blockId=device_receiver
//% block="receiver %receivedNumber %pause %speed"
export function receiver(receivedNumber: number, pause: number = 500, speed: number = 130): void
{
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
        basic.pause(pause)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
        basic.pause(pause)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
        basic.pause(pause)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
        basic.pause(pause)
        maqueen.motorStop(maqueen.Motors.All)
        }
    }

//% blockId=device_sender
//% block="sender %sendNumber"
export function sender(sendNumber: number): void
{
    if (input.isGesture(Gesture.TiltRight)) {
        sendNumber = 1
    }  
    if (input.buttonIsPressed(Button.A)) {
        sendNumber = 2
    }  
    if (input.buttonIsPressed(Button.B)) {
        sendNumber = 3
    }  
    if (input.buttonIsPressed(Button.AB)) {
        sendNumber = 4
    }
    basic.showNumber(sendNumber)
    radio.sendNumber(sendNumber)
    }
}
