let indexA = 0
let boolean = 0
let a = randint(3, 5)
let arrows = [
ArrowNames.North,
ArrowNames.East,
ArrowNames.South,
ArrowNames.West
]
let izazovi = [
"stociraj najboljeg druga",
"b",
"c",
"d",
"e",
"f",
"g",
"a",
"h"
]
let istine = [
"ko ti je simpatija",
"pokazi poruke",
"ko ti je najdraza profesorica",
"aida vs nina",
"",
"f",
"g",
"h"
]
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && boolean) {
        basic.showString("" + (istine._pickRandom()))
        boolean = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        a = randint(5, 15)
        for (let index = 0; index <= a; index++) {
            if (indexA >= 4) {
                indexA = 0
            }
            basic.showArrow(arrows[indexA])
            indexA += 1
        }
        boolean = 1
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B) && boolean) {
        basic.showString("" + (izazovi._pickRandom()))
        boolean = 0
    }
})
