music.play(music.create_song(hex("""
        00780004080200
    """)),
    music.PlaybackMode.UNTIL_DONE)
mySprite = sprites.create(assets.image("""
    Smil
"""), SpriteKind.player)

