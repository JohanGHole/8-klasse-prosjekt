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
    let mySprite: Sprite = null
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
