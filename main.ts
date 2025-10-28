enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (music.volume() < 200) {
        music.setVolume(music.volume() + 20)
        basic.showString("" + (music.volume() / 20))
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . . . . .
            # # # # #
            `)
    } else {
        basic.showString("Max")
    }
})
function random_music () {
    music2 = randint(0, 9)
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
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (music.volume() > 60) {
        music.setVolume(music.volume() - 20)
        basic.showString("" + (music.volume() / 20))
    } else {
        basic.showString("Min")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (sound == 1) {
        music.setBuiltInSpeakerEnabled(true)
        sound = 0
    } else {
        music.setBuiltInSpeakerEnabled(false)
        sound = 1
    }
})
let distance = 0
let speed = 0
let sound = 0
let music2 = 0
music.setVolume(100)
input.setSoundThreshold(SoundThreshold.Quiet, 50)
basic.showString("Hello!")
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . . . . .
    # # # # #
    `)
basic.forever(function () {
    if (SuperBitV2_Digital.PIR(SuperBitV2_Digital.mwDigitalNum.P4P6, SuperBitV2_Digital.enPIR.OPIR)) {
        music.setBuiltInSpeakerEnabled(false)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . . . . .
            . # # # .
            `)
    } else {
        music.setBuiltInSpeakerEnabled(true)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . . . . .
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (SuperBitV2_Analog.Potentiometer(SuperBitV2_Analog.mwAnalogNum.AP4P6) / 4 < 150) {
        speed = SuperBitV2_Analog.Potentiometer(SuperBitV2_Analog.mwAnalogNum.AP4P6) / 3.5
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
basic.forever(function () {
    let near_person = 0
    distance = SuperBitV2_Digital.Ultrasonic(SuperBitV2_Digital.mwDigitalNum.P10P9)
    while (near_person == 0 && distance < 10) {
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 1707, 347, 255, 0, 309, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        SuperBitV2.Servo2(SuperBitV2.enServo.S1, 177)
        basic.pause(1000)
        SuperBitV2.Servo2(SuperBitV2.enServo.S1, 30)
        break;
    }
})
