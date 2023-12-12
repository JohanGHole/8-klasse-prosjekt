namespace SpriteKind {
    export const SelectableCharacter = SpriteKind.create()
}
function show_character_picker () {
    scene.centerCameraAt(80, 60)
    showCharacterScreen = true
    potet = sprites.create(assets.image`Potet`, SpriteKind.SelectableCharacter)
    potet.setPosition(32, 67)
}
let potet: Sprite = null
let showCharacterScreen = false
scene.setBackgroundColor(15)
game.splash("Welcome To Food Smashers!")
show_character_picker()
forever(function () {
    animation.runImageAnimation(
    potet,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `],
    500,
    false
    )
})
