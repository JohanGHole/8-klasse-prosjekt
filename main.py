@namespace
class SpriteKind:
    SelectableCharacter = SpriteKind.create()
    Background = SpriteKind.create()

def on_a_pressed():
    global thePlayer, showCharacterScreen
    if showCharacterScreen:
        thePlayer = sprites.read_data_sprite(currently_selected_character, "player")
        thePlayer.set_flag(SpriteFlag.INVISIBLE, False)
        tiles.place_on_random_tile(thePlayer, sprites.builtin.forest_tiles0)
        scene.camera_follow_sprite(thePlayer)
        for value in sprites.all_of_kind(SpriteKind.SelectableCharacter):
            value.destroy()
        for value2 in sprites.all_of_kind(SpriteKind.Background):
            value2.destroy()
        for value3 in sprites.all_of_kind(SpriteKind.text):
            value3.destroy()
        controller.move_sprite(thePlayer, 100, 0)
        showCharacterScreen = False
    else:
        thePlayer.vy = -100
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    global current_character_index
    if showCharacterScreen:
        current_character_index = (current_character_index + (len(ourCharacters) - 1)) % len(ourCharacters)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def show_character_picker():
    global showCharacterScreen, karakter1, textSprite, karakter2, karakter3, ourCharacters, current_character_index, character_selector_box
    scene.center_camera_at(80, 60)
    for value4 in sprites.all_of_kind(SpriteKind.player):
        value4.ay = gravity
        value4.set_flag(SpriteFlag.INVISIBLE, True)
    showCharacterScreen = True
    karakter1 = sprites.create(assets.image("""
            karakter1
        """),
        SpriteKind.SelectableCharacter)
    karakter1.z = 101
    karakter1.set_position(32, 67)
    sprites.set_data_sprite(karakter1, "player", karakter1_liten)
    textSprite = textsprite.create("Velg din karakter:", 9, 10)
    textSprite.z = 101
    textSprite.set_position(80, 29)
    karakter2 = sprites.create(assets.image("""
            karakter2
        """),
        SpriteKind.SelectableCharacter)
    karakter2.z = 101
    karakter2.set_position(73, 67)
    sprites.set_data_sprite(karakter2, "player", karakter2)
    karakter3 = sprites.create(assets.image("""
            myImage
        """),
        SpriteKind.SelectableCharacter)
    karakter3.z = 101
    karakter3.set_position(126, 67)
    sprites.set_data_sprite(karakter3, "player", karakter3)
    ourCharacters = [karakter1, karakter2, karakter3]
    current_character_index = 1
    character_selector_box = sprites.create(img("""
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
        """),
        SpriteKind.Background)
    character_selector_box.z = 101

def on_right_pressed():
    global current_character_index
    if showCharacterScreen:
        current_character_index = (current_character_index + 1) % len(ourCharacters)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_create_renderable(screen2):
    global currently_selected_character
    if showCharacterScreen:
        screen2.fill(1)
        currently_selected_character = ourCharacters[current_character_index]
        character_selector_box.set_position(currently_selected_character.x,
            currently_selected_character.y)
spriteutils.create_renderable(100, on_create_renderable)

character_selector_box: Sprite = None
textSprite: TextSprite = None
karakter1: Sprite = None
ourCharacters: List[Sprite] = []
current_character_index = 0
currently_selected_character: Sprite = None
thePlayer: Sprite = None
showCharacterScreen = False
karakter3: Sprite = None
karakter2: Sprite = None
karakter1_liten: Sprite = None
gravity = 0
game.splash("Welcome To Food Smashers!")
tiles.set_current_tilemap(tilemap("""
    level1
"""))
gravity = 500
karakter1_liten = sprites.create(assets.image("""
    karakter1_small
"""), SpriteKind.player)
karakter2 = sprites.create(assets.image("""
    karakter2
"""), SpriteKind.player)
karakter3 = sprites.create(assets.image("""
    myImage
"""), SpriteKind.player)
scene.set_background_color(8)
scene.set_background_image(assets.image("""
    background
"""))
show_character_picker()
music.play(music.create_song(assets.song("""
        intro sang
    """)),
    music.PlaybackMode.UNTIL_DONE)