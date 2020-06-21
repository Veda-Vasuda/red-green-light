input.onButtonPressed(Button.A, function () {
    Greenlight = Greenlight
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    Redlight = Redlight
    basic.showIcon(IconNames.No)
})
let Redlight = 0
let Greenlight = 0
radio.setGroup(1)
let State = 0
Greenlight = 1
Redlight = 2
basic.forever(function () {
    radio.sendNumber(State)
})
