def on_overlap_tile(sprite, location):
    if True:
        mySprite.set_position(29, 115)
        pause(200)
scene.on_overlap_tile(SpriteKind.player, sprites.builtin.field0, on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    if True:
        mySprite.set_position(229, 115)
        pause(200)
scene.on_overlap_tile(SpriteKind.player, sprites.builtin.field1, on_overlap_tile2)

mySprite: Sprite = None
scene.set_background_color(10)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
mySprite = sprites.create(img("""
        . . . . . f f f f f f . . . . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . . f 7 2 e 7 7 2 e 7 f . . . 
            . . . f 7 7 7 5 6 7 7 7 f . . . 
            . . . f 7 7 5 6 5 6 7 7 f . . . 
            . . . . f f 6 6 6 6 f f . . . . 
            . . . . . f f 6 6 f f . . . . . 
            . . . . f b b 7 7 b b f . . . . 
            . . . . f b b b b b b f . . . . 
            . . . . f b b b b b b f . . . . 
            . . . . f 7 b b b b 7 f . . . . 
            . . . . . f c c c c f . . . . . 
            . . . . . f c f f c f . . . . . 
            . . . . . f c f f c f . . . . . 
            . . . . . f a f f a f . . . . .
    """),
    SpriteKind.player)
controller.move_sprite(mySprite, 100, 100)
scene.camera_follow_sprite(mySprite)