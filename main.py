@namespace
class SpriteKind:
    SelectableCharacter = SpriteKind.create()
def show_character_picker():
    global showCharacterScreen, potet
    scene.center_camera_at(80, 60)
    showCharacterScreen = True
    potet = sprites.create(assets.image("""
            Potet
        """),
        SpriteKind.SelectableCharacter)
    potet.set_position(32, 67)
potet: Sprite = None
showCharacterScreen = False
scene.set_background_color(15)
game.splash("Welcome To Food Smashers!")
show_character_picker()

def on_forever():
    mySprite: Sprite = None
    animation.run_image_animation(mySprite,
        [img("""
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
        """)],
        500,
        False)
forever(on_forever)
