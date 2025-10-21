input.onButtonPressed(Button.A, function () {
    if (music.volume() > 100) {
        music.setVolume(music.volume() + 10)
        basic.showString("Hello!")
    }
})
function random_music () {
    music2 = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
    ]._pickRandom()
    if (music2 == 0) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.LoopingInBackground)
    } else if (music2 == 1) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.LoopingInBackground)
    } else if (music2 == 2) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.LoopingInBackground)
    } else if (music2 == 3) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.LoopingInBackground)
    } else if (music2 == 4) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.LoopingInBackground)
    } else if (music2 == 5) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.LoopingInBackground)
    } else if (music2 == 6) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.LoopingInBackground)
    } else if (music2 == 7) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.LoopingInBackground)
    } else if (music2 == 8) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.LoopingInBackground)
    } else {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.LoopingInBackground)
    }
}
input.onButtonPressed(Button.AB, function () {
    random_music()
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(music.volume() - 10)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.stopAllSounds()
})
let speed = 0
let distance = 0
let music2 = 0
basic.showString("Hello!")
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . . . . .
    # # # # #
    `)
music.setVolume(50)
loops.everyInterval(1000, function () {
    distance = SuperBitV2_Digital.Ultrasonic(SuperBitV2_Digital.mwDigitalNum.P10P9)
    while (distance < 10) {
        music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 76, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        SuperBitV2.Servo2(SuperBitV2.enServo.S1, 177)
        basic.pause(1000)
        SuperBitV2.Servo2(SuperBitV2.enServo.S1, 30)
        break;
    }
})
basic.forever(function () {
    if (SuperBitV2_Analog.Potentiometer(SuperBitV2_Analog.mwAnalogNum.AP4P6) / 4 < 150) {
        speed = SuperBitV2_Analog.Potentiometer(SuperBitV2_Analog.mwAnalogNum.AP4P6) / 4
    } else {
        speed = 150
    }
})
basic.forever(function () {
    if (SuperBitV2_Analog.Rocker(SuperBitV2_Analog.mwAnalogNum2.AP1P2, SuperBitV2_Analog.enRocker.Up)) {
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M1, speed)
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M3, speed)
        SuperBitV2.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBitV2.RGB_Program().show()
    } else if (SuperBitV2_Analog.Rocker(SuperBitV2_Analog.mwAnalogNum2.AP1P2, SuperBitV2_Analog.enRocker.Down)) {
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M1, speed * -1)
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M3, speed * -1)
        SuperBitV2.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        SuperBitV2.RGB_Program().show()
    } else if (SuperBitV2_Analog.Rocker(SuperBitV2_Analog.mwAnalogNum2.AP1P2, SuperBitV2_Analog.enRocker.Left)) {
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M1, speed * -1)
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M3, speed)
        SuperBitV2.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        SuperBitV2.RGB_Program().show()
    } else if (SuperBitV2_Analog.Rocker(SuperBitV2_Analog.mwAnalogNum2.AP1P2, SuperBitV2_Analog.enRocker.Right)) {
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M1, speed)
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M3, speed * -1)
        SuperBitV2.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
        SuperBitV2.RGB_Program().show()
    } else {
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M1, 0)
        SuperBitV2.MotorRun(SuperBitV2.enMotors.M3, 0)
        SuperBitV2.RGB_Program().showColor(neopixel.colors(NeoPixelColors.White))
        SuperBitV2.RGB_Program().show()
    }
})
