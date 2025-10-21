def on_button_pressed_a():
    if confusion == 0:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        music.set_volume(music.volume() - 10)
        basic.show_string("" + str((music.volume() / 10)))
        basic.show_leds("""
            # . # . #
            . # . # .
            # . # . #
            . . . . .
            # # # # #
            """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_sound_loud():
    confused()
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def confused():
    global motor, launch, confusion
    motor = 0
    launch = 0
    confusion = 1
    music.stop_all_sounds()
    SuperBitV2.RGB_Program().show_color(neopixel.colors(NeoPixelColors.VIOLET))
    SuperBitV2.RGB_Program().show()
    basic.show_leds("""
        # . # . #
        . # . . #
        # . # . #
        . # . . #
        # . # . #
        """)
    basic.pause(500)
    basic.show_leds("""
        # . # . #
        . # . # .
        # . # . #
        . . . . .
        # # # # #
        """)
    motor = 1
    launch = 1
    confusion = 0

def on_button_pressed_ab():
    global music2, music_2
    if confusion == 0:
        music2 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        music_2 = music2._pick_random()
        if music_2 == 0:
            music._play_default_background(music.built_in_playable_melody(Melodies.DADADADUM),
                music.PlaybackMode.LOOPING_IN_BACKGROUND)
        elif music_2 == 1:
            music._play_default_background(music.built_in_playable_melody(Melodies.ODE),
                music.PlaybackMode.LOOPING_IN_BACKGROUND)
        elif music_2 == 2:
            music._play_default_background(music.built_in_playable_melody(Melodies.PRELUDE),
                music.PlaybackMode.LOOPING_IN_BACKGROUND)
        elif music_2 == 3:
            music._play_default_background(music.built_in_playable_melody(Melodies.FUNK),
                music.PlaybackMode.LOOPING_IN_BACKGROUND)
        elif music_2 == 4:
            music._play_default_background(music.built_in_playable_melody(Melodies.BLUES),
                music.PlaybackMode.LOOPING_IN_BACKGROUND)
        elif music_2 == 5:
            music._play_default_background(music.built_in_playable_melody(Melodies.WEDDING),
                music.PlaybackMode.LOOPING_IN_BACKGROUND)
        elif music_2 == 6:
            music._play_default_background(music.built_in_playable_melody(Melodies.BIRTHDAY),
                music.PlaybackMode.LOOPING_IN_BACKGROUND)
        elif music_2 == 7:
            music._play_default_background(music.built_in_playable_melody(Melodies.NYAN),
                music.PlaybackMode.LOOPING_IN_BACKGROUND)
        else:
            music._play_default_background(music.built_in_playable_melody(Melodies.ENTERTAINER),
                music.PlaybackMode.LOOPING_IN_BACKGROUND)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    if music.volume() < 100 and confusion == 0:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        music.set_volume(music.volume() + 10)
        basic.show_string("" + str((music.volume() / 10)))
        basic.show_leds("""
            # . # . #
            . # . # .
            # . # . #
            . . . . .
            # # # # #
            """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    confused()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    music.stop_all_sounds()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

distance = 0
music_2 = 0
music2: List[number] = []
launch = 0
motor = 0
confusion = 0
input.set_sound_threshold(SoundThreshold.LOUD, 149)
basic.show_string("Hello!")
basic.show_leds("""
    # . # . #
    . # . # .
    # . # . #
    . . . . .
    # # # # #
    """)

def on_forever():
    if distance <= 1 and launch == 1:
        SuperBitV2.servo2(SuperBitV2.enServo.S1, 90)
        basic.pause(500)
        SuperBitV2.servo2(SuperBitV2.enServo.S1, 0)
basic.forever(on_forever)

def on_forever2():
    while motor == 1:
        if SuperBitV2_Analog.rocker(SuperBitV2_Analog.mwAnalogNum2.AP1P2,
            SuperBitV2_Analog.enRocker.NO_STATE):
            SuperBitV2.motor_run(SuperBitV2.enMotors.M1, 0)
            SuperBitV2.motor_run(SuperBitV2.enMotors.M3, 0)
            SuperBitV2.RGB_Program().show_color(neopixel.colors(NeoPixelColors.WHITE))
            SuperBitV2.RGB_Program().show()
        if SuperBitV2_Analog.rocker(SuperBitV2_Analog.mwAnalogNum2.AP1P2,
            SuperBitV2_Analog.enRocker.UP):
            SuperBitV2.motor_run(SuperBitV2.enMotors.M1, 255)
            SuperBitV2.motor_run(SuperBitV2.enMotors.M3, 255)
            SuperBitV2.RGB_Program().show_color(neopixel.colors(NeoPixelColors.RED))
            SuperBitV2.RGB_Program().show()
        if SuperBitV2_Analog.rocker(SuperBitV2_Analog.mwAnalogNum2.AP1P2,
            SuperBitV2_Analog.enRocker.DOWN):
            SuperBitV2.motor_run(SuperBitV2.enMotors.M1, -255)
            SuperBitV2.motor_run(SuperBitV2.enMotors.M3, -255)
            SuperBitV2.RGB_Program().show_color(neopixel.colors(NeoPixelColors.GREEN))
            SuperBitV2.RGB_Program().show()
        if SuperBitV2_Analog.rocker(SuperBitV2_Analog.mwAnalogNum2.AP1P2,
            SuperBitV2_Analog.enRocker.LEFT):
            SuperBitV2.motor_run(SuperBitV2.enMotors.M1, -255)
            SuperBitV2.motor_run(SuperBitV2.enMotors.M3, 255)
            SuperBitV2.RGB_Program().show_color(neopixel.colors(NeoPixelColors.BLUE))
            SuperBitV2.RGB_Program().show()
        if SuperBitV2_Analog.rocker(SuperBitV2_Analog.mwAnalogNum2.AP1P2,
            SuperBitV2_Analog.enRocker.RIGHT):
            SuperBitV2.motor_run(SuperBitV2.enMotors.M1, 255)
            SuperBitV2.motor_run(SuperBitV2.enMotors.M3, -255)
            SuperBitV2.RGB_Program().show_color(neopixel.colors(NeoPixelColors.PURPLE))
            SuperBitV2.RGB_Program().show()
basic.forever(on_forever2)

def on_forever3():
    global distance
    distance = SuperBitV2_Digital.ultrasonic(SuperBitV2_Digital.mwDigitalNum.P10P9)
basic.forever(on_forever3)

def on_every_interval():
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        """)
    basic.show_leds("""
        # . # . #
        . # . # .
        # . # . #
        . . . . .
        # # # # #
        """)
loops.every_interval(5000, on_every_interval)
