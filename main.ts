input.onPinPressed(TouchPin.P0, function () {
    timer = 0
    basic.showLeds(`
        # . . # .
        . # # . #
        . . . . .
        . # # # .
        . . . . .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D D D D E D A D ", input.temperature()), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    timer = 0
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- C D F D A D C5 ", input.lightLevel()), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    timer = 0
    basic.showIcon(IconNames.Sad)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 C5 C5 B B B A A ", 120), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    timer = 0
    basic.showIcon(IconNames.Happy)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F F F F E A E C5 ", 120), music.PlaybackMode.UntilDone)
})
let timer = 0
basic.showLeds(`
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
