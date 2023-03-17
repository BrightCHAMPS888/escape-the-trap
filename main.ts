input.onButtonPressed(Button.A, function () {
    ax += 1
    led.plot(ax, 4)
    basic.pause(500)
    if (ax > 3) {
        ax = -1
    }
    if (ax == x) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.No)
        basic.pause(1000)
    }
})
let y = 0
let x = 0
let ax = 0
ax = -1
basic.forever(function () {
    x = -1
    y = -1
    while (x != 4) {
        x += 1
        led.plot(x, 0)
        basic.pause(200)
        led.plot(x, 1)
        basic.pause(200)
        led.plot(x, 2)
        basic.pause(200)
        led.plot(x, 3)
        basic.pause(200)
        led.plot(x, 4)
        basic.pause(200)
        basic.clearScreen()
    }
})
