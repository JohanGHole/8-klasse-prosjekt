namespace SpriteKind {
    export const SelectableCharacter = SpriteKind.create()
}
let showCharacterScreen = false
let and: Sprite = null
let textSprite: TextSprite = null
let ourCharacters: Sprite[] = []
let current_character_index = 0
function show_character_picker () {
    scene.centerCameraAt(80, 60)
    showCharacterScreen = true
    and = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.SelectableCharacter)
    and.z = 101
    and.setPosition(32, 67)
    textSprite = textsprite.create("Velg din karakter:")
    textSprite.z = 101
    and.setPosition(80, 29)
    ourCharacters = [and]
    current_character_index = 1
}
