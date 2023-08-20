def on_button_pressed_b():
    global timer
    timer = 0
    basic.show_leds("""
        . # . # .
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        """)
    music.play(music.builtin_playable_sound_effect(soundExpression.yawn),
        music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global timer
    timer = 0
    basic.show_icon(IconNames.SAD)
    music.play(music.builtin_playable_sound_effect(soundExpression.sad),
        music.PlaybackMode.UNTIL_DONE)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    global timer
    timer = 0
    basic.show_icon(IconNames.HAPPY)
    music.play(music.builtin_playable_sound_effect(soundExpression.happy),
        music.PlaybackMode.UNTIL_DONE)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

timer = 0
basic.show_leds("""
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    """)
music.play(music.builtin_playable_sound_effect(soundExpression.hello),
    music.PlaybackMode.UNTIL_DONE)