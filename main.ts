namespace SpriteKind {
    export const SelectableCharacter = SpriteKind.create()
    export const Background = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (showCharacterScreen) {
        thePlayer = sprites.readDataSprite(currently_selected_character, "player")
        thePlayer.setFlag(SpriteFlag.Invisible, false)
        tiles.placeOnRandomTile(thePlayer, sprites.builtin.forestTiles0)
        scene.cameraFollowSprite(thePlayer)
        for (let value of sprites.allOfKind(SpriteKind.SelectableCharacter)) {
            value.destroy()
        }
        for (let value of sprites.allOfKind(SpriteKind.Background)) {
            value.destroy()
        }
        for (let value of sprites.allOfKind(SpriteKind.Text)) {
            value.destroy()
        }
        controller.moveSprite(thePlayer, 100, 0)
        showCharacterScreen = false
    } else {
        thePlayer.vy = -100
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (showCharacterScreen) {
        current_character_index = (current_character_index + (ourCharacters.length - 1)) % ourCharacters.length
    }
})
function show_character_picker () {
    scene.centerCameraAt(80, 60)
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        value.ay = gravity
        value.setFlag(SpriteFlag.Invisible, true)
    }
    showCharacterScreen = true
    karakter1 = sprites.create(assets.image`karakter1`, SpriteKind.SelectableCharacter)
    karakter1.z = 101
    karakter1.setPosition(32, 67)
    sprites.setDataSprite(karakter1, "player", karakter1_liten)
    textSprite = textsprite.create("Velg din karakter:", 9, 10)
    textSprite.z = 101
    textSprite.setPosition(80, 29)
    karakter2 = sprites.create(assets.image`karakter2`, SpriteKind.SelectableCharacter)
    karakter2.z = 101
    karakter2.setPosition(73, 67)
    sprites.setDataSprite(karakter2, "player", karakter2)
    karakter3 = sprites.create(assets.image`myImage`, SpriteKind.SelectableCharacter)
    karakter3.z = 101
    karakter3.setPosition(126, 67)
    sprites.setDataSprite(karakter3, "player", karakter3)
    ourCharacters = [karakter1, karakter2, karakter3]
    current_character_index = 1
    character_selector_box = sprites.create(img`
        ffffffffffffffffffffffffffffffffffff
        f2222222222222222222222222222222222f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2222222222222222222222222222222222f
        ffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Background)
    character_selector_box.z = 101
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (showCharacterScreen) {
        current_character_index = (current_character_index + 1) % ourCharacters.length
    }
})
spriteutils.createRenderable(100, function (screen2) {
    if (showCharacterScreen) {
        screen2.fill(1)
        currently_selected_character = ourCharacters[current_character_index]
        character_selector_box.setPosition(currently_selected_character.x, currently_selected_character.y)
    }
})
let character_selector_box: Sprite = null
let textSprite: TextSprite = null
let karakter1: Sprite = null
let ourCharacters: Sprite[] = []
let current_character_index = 0
let currently_selected_character: Sprite = null
let thePlayer: Sprite = null
let showCharacterScreen = false
let karakter3: Sprite = null
let karakter2: Sprite = null
let karakter1_liten: Sprite = null
let gravity = 0
game.splash("Welcome To Food Smashers!")
tiles.setCurrentTilemap(tilemap`level1`)
gravity = 500
karakter1_liten = sprites.create(assets.image`karakter1_small`, SpriteKind.Player)
karakter2 = sprites.create(assets.image`karakter2`, SpriteKind.Player)
karakter3 = sprites.create(assets.image`myImage`, SpriteKind.Player)
scene.setBackgroundColor(8)
scene.setBackgroundImage(assets.image`background`)
show_character_picker()
