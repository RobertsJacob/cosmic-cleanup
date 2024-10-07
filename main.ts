namespace SpriteKind {
    export const Boost = SpriteKind.create()
    export const Point = SpriteKind.create()
    export const Screen = SpriteKind.create()
}
function Points2 () {
    for (let index = 0; index < 30; index++) {
        myPoint1 = sprites.create(img`
            . . . . . . . . . 
            . . . c c c c . . 
            . . c 5 5 5 5 c . 
            . c 5 5 1 1 6 8 . 
            . c 5 5 5 6 6 8 . 
            . c 5 5 5 6 6 8 . 
            . c 1 5 6 6 8 . . 
            . . c c 8 8 . . . 
            . . . . . . . . . 
            `, SpriteKind.Point)
        tiles.placeOnRandomTile(myPoint1, assets.tile`myTileTurning`)
    }
}
// work on game design later
scene.onOverlapTile(SpriteKind.Player, assets.tile`myPortal1`, function (sprite, location) {
    if (true) {
        myAlien.setPosition(229, 115)
        pause(100)
    }
})
function levelThree () {
    music.stopAllSounds()
    GameLoad2 = false
    GameLoad3 = false
    scene.setBackgroundColor(13)
    tiles.setCurrentTilemap(tilemap`level3tillemap`)
    PlayerAlien()
    Points3()
    EnemyFive()
    EnemySix()
    EnemySeven()
    music.setVolume(14)
    music.play(music.createSong(hex`00fa0004080a0106001c00010a006400f401640000040000000000000000000000000000000002f00000000400011d08000c00012010001400011d18001c00012020002400011d28002c00012030003400011d38003c00012040004400011d48004c00012250005400011e58005c00012260006400011e68006c00012270007400011e78007c00012280008400011e88008c00012290009400011e98009c000122a000a4000125a800ac000122b000b400011eb800bc000122c000c400011dc800cc000120d000d400011dd800dc000120e000e400011de800ec000120f000f400011df800fc00012000010401011d08010c01012010011401012418011c01012020012401011b28012c01011d30013401012038013c01011b`), music.PlaybackMode.LoopingInBackground)
    GameLoad3 = true
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myAlien,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 f f f f f . . . . . 
        . . . . 8 5 5 5 8 8 8 f . . . . 
        . . . 8 5 5 5 5 5 8 8 8 f . . . 
        . . . 8 5 5 5 5 5 5 8 8 f . . . 
        . . . 8 5 5 5 5 5 5 8 8 f . . . 
        . . . 8 5 5 5 5 5 8 8 8 f . . . 
        . . . . 8 8 5 5 8 8 f f . . . . 
        . . . . . f f 8 8 f f . . . . . 
        . . . . e d e e e e e f . . . . 
        . . . e d d e e e e e e f . . . 
        . . . e d d e e e e e e f . . . 
        . . . f 5 6 e e e e 6 8 f . . . 
        . . . . f f 8 7 8 7 f f . . . . 
        . . . . . f 8 7 8 7 f . . . . . 
        . . . . . f f e f e f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 f f f f f . . . . . 
        . . . . 8 5 5 5 8 8 8 f . . . . 
        . . . 8 5 5 5 5 5 8 8 8 f . . . 
        . . . 8 5 5 5 5 5 5 8 8 f . . . 
        . . . 8 5 5 5 5 5 5 8 8 f . . . 
        . . . 8 5 5 5 5 5 8 8 8 f . . . 
        . . . . 8 8 5 5 8 8 f f . . . . 
        . . . . . f f 8 8 f f . . . . . 
        . . . . f d e e e f f f . . . . 
        . . . f d d e e e e f f f . . . 
        . . . f d d e e e e 6 8 f . . . 
        . . . . f 6 e e e e 6 8 f . . . 
        . . . . . f 8 7 8 7 f f . . . . 
        . . . . . f 8 7 f f . . . . . . 
        . . . . . f f e . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 f f f f f . . . . . 
        . . . . 8 5 5 5 8 8 8 f . . . . 
        . . . 8 5 5 5 5 5 8 8 8 f . . . 
        . . . 8 5 5 5 5 5 5 8 8 f . . . 
        . . . 8 5 5 5 5 5 5 8 8 f . . . 
        . . . 8 5 5 5 5 5 8 8 8 f . . . 
        . . . . 8 8 5 5 8 8 f f . . . . 
        . . . . . f f 8 8 f f . . . . . 
        . . . . f f f e e e d f . . . . 
        . . . f f f e e e e d d f . . . 
        . . . f 8 6 e e e e d d f . . . 
        . . . f 8 6 e e e e 6 f . . . . 
        . . . . f f 8 7 8 7 f . . . . . 
        . . . . . . f f 8 7 f . . . . . 
        . . . . . . . . f e f . . . . . 
        `],
    300,
    true
    )
})
function EnemyOne () {
    myEnemy1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e . . f . . . . . . 
        . . . . . e . . . . f . . . . . 
        . . . . . e e . . f f . . . . . 
        . . . . . e e e f f f . . . . . 
        . . . . . e 1 1 e e f . . . . . 
        . . . . 1 1 1 1 1 e e e . . . . 
        . . 1 f 1 1 1 1 1 e e e f e . . 
        . . f . . 1 1 e e e e . . f . . 
        . f 1 f f e e e e e e f f e f . 
        . . . f . . e e e e . . f . . . 
        . . f f . . . . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy1, sprites.dungeon.purpleInnerSouthEast)
    path1 = TilemapPath.create_path([
    tiles.getTileLocation(7, 7),
    tiles.getTileLocation(7, 6),
    tiles.getTileLocation(7, 5),
    tiles.getTileLocation(6, 5),
    tiles.getTileLocation(5, 5)
    ])
    TilemapPath.follow_path(myEnemy1, path1, 75)
}
function EnemyThree () {
    myEnemy3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e . . f . . . . . . 
        . . . . . e . . . . f . . . . . 
        . . . . . e e . . f f . . . . . 
        . . . . . e e e f f f . . . . . 
        . . . . . e 1 1 e e f . . . . . 
        . . . . 1 1 1 1 1 e e e . . . . 
        . . 1 f 1 1 1 1 1 e e e f e . . 
        . . f . . 1 1 e e e e . . f . . 
        . f 1 f f e e e e e e f f e f . 
        . . . f . . e e e e . . f . . . 
        . . f f . . . . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy3, sprites.dungeon.purpleInnerSouthEast)
    path3 = TilemapPath.create_path([tiles.getTileLocation(7, 7), tiles.getTileLocation(7, 6), tiles.getTileLocation(7, 5)])
    TilemapPath.follow_path(myEnemy3, path3, 75)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroy(TtileScreen)
    scene.setBackgroundImage(img`
        ccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccc
        ccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccc
        ccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccc
        cccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccc
        ccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccc
        cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
        cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
        ccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacc
        ccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaacaaaaacccaaaaaaaaaaaaaaaaaaaaaacccccaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacc
        caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccab1bacaaaacaaacaaaaaaaaaaaaaaaaaaaacaaaaacacaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
        caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaad1bacccacaacaacaaaaaaaaaaaaaaaaaaccad1aaccaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
        caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaad1111aad1bacccacad1eacaaccccccaaacccccaccaa11baccad1dacaaaaaccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
        caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacab111bb11ad1baaccccaaaaaccab111bacacaaaaacaaaa11baaaaaaaaaccaacaaaaab111bcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
        caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacab111baab1bd1baaaaaaaaaaacab11d11bacaaaaaaaaaaad1daaaaaaaaaaaccab1dab11d11bcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
        caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaad11bbaab1db1daaaaaaaaaaaaa11bab1baaab111bab111111baadaabaddaacab1db11bad1baccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
        caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacab11aaaaab1db1dab1111aaabbab11bab1daab11d11aaad11111111b11ad1baaab1db11aad1bacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
        caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacad1baaaaab1da11a11111dab11ab11aad1bab11baaaaaaaab1daaaaa11bb1daaad1dd1daad1baaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
        caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacad1baaaaab1bad1b11bad1bad1bb11ab11aab11aaaaaaaaaaddaaaaa11ba11baa11bd1dab1daaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
        caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacad1baaaaad1bab111daab1bab1db11111baab1daaaaaaaaaad1baaaa11dad1dab11bd11111baaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
        caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacad1baaaab1daab111baa11aab11b1111baaab1daaaaaaaaaad1baaaad1dab11bb11bb1111baaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacab1daaab11baaad11bb11baaad1b11aaaaaaa11bab11baaaab11aaaad11aab1111dab1daaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaa111b111baaaab11111daaaad1db11db111bb11111daaaaab11baaab11baad111baab11bb111bacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaa1111daaaaaaa1111baaaaab1dab11111daab111daaaacaad1baaaa11baaab1daaaab11111daacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaab11aaaaaaaaaaaaaaaaaaacaaaaaacaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaacaaaaaaaaaaab11baaaaaaaaaaaaaaaaaccccaaaaccaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaacccccccaaaaacaa11baaaaaaaacaaaaaaaaccccccccccccccccccccaaacccaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccaaacccaa11baaaaaaacccccccccccccaccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccaaacaaaaaacaa11baaaaccccccccccccccaaaaacccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaaacab1baaaab1daaaacccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacab11daad11baaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaab111111aaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaddeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaadddeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaeeeaaaaaaaaaaaaaaadddeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaeedeeaaaaaaaaaaaaaddddeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaedddeeaaaaaaaaaaadddddeaaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaeeeeeeeeaaaaaaaaaaaaaaaaaaaaadddddaaaaaaaaaaaaeeeeeeaaaaaaaaaaaadddddddaaaaaaaaaaaaaaaaeeeaaaaaaaa
        aaddddedaaaafffffffffdddeeaaaaaaaeaaaaaaaaeddeeaaaaaaaaaaaeeaeeedddedeffeaaaaaaaaaaaeffeaeffffeddeeafffeaaeeedddddeeaaaaaaaaadddddddddaaaaaaaaaaaaaaaedeeaaaaaaa
        aaeddddeaaaaf1111111fcdddeeaaaaeffeaaaaaaaedddeaaaaaaaaaaeffeeddddffff1dfaaaaaaaaaaaf1dfcf1df1fdddeef1deaeeddddddddeaaaaaaaaddddddddddddaaaaaaaaaaaaaeddeaaaaaaa
        aadddddeeaaafff11fffffffffffeaef11feefffeeeddefffffefffeeff1fedddff1ff1dfffcfffeaaaaf1dfcf1dfffefffff1dffecefffeefffeaefffeffffeefffcddddaaaaaaaaaaaaedddeaaaaaa
        aaedddddeeaafff11ff11111ff11fef1111fd111feddcf1111dff111ff111fddef11111111fff11dfaaaf1dfff1df1f11111f1111dff111ff1111ff111ff111ff111fedddaaaaaaaaaaaeedddeeeeaae
        deeddddddeaaaaf11ff1dff1ff1feeff11ff11f11fcde11f11df1fffdff1ffddcff1ff1dfd1f1fffdcaaf111111df1f11f11f11fd1f1fffff1ffff11f11f1dff1fff1fddddaaaaaaaaaaedddddddeeee
        dddddddddeaaaaf11ff1def1111fcecf11fd1fff1fcdf11ff1df1111dff1eccddef1ff1ffd1f1111deacf1dfff1df1d1ffd1f1ffd1f11fff1fffff1fff1f1dff11111fcdddaaaaaaaaeedddddddddddd
        dddddddddeaaaaf11ff1dcff111fcccf11fd1fef1fccf11ff1df1ffffff1eccddef1ff1ffd1f1ffffeccf1dfff1df1d1ffd1f1ffd1fff11f1fffff1fff1f1dff1fffffcddddaaaaaaaeddddddddddddd
        ddddddddeeaaaaf11ff1dcef11ffcccf11ff11f11fccf11ff1df1ffffff1fecddef1ff1ffd1f1ffffcccf1dfcf1df1f11f11f1ffd1ffff1ff1ffff11f11f1def1fffffccdddaaaaaaaeedddddddddddd
        ddddddddeaaaaaf11ff1dccf11fcccef111dd111ffccef1111dff111dff11fcddef1111ffd1ff111dcccf1dfcf1df1f11111f1ffd1f1111ff1111ff111ff1deff1111fccdddaaaabaaeedddddddddddd
        ddddddddeaaaaafffffffcef11fccceefffffffffccccffff1dfffffeefffecdddefffffffffffffcccafffecfffffffffd1fffefffffffeeffffeffffffffccfffffccddddaaaabbaaeeddddddddddd
        ddddddeeeaaabbaaaaccced11fcccdeaaacccccccccded1111fcccccccccccddddddccccccccccccccadddddccccccf11111fccccccccccccccccccccccccccccccccccddddaaaabbaaaeddddddddddd
        ddddddeaaaaaabaaaaaddefffeccddeeaaaaccccccddcfffffecccccccccddddddddddcccccccccccaaddddddddcccefffffcccccccccccccccccccccccccccdddccccdddddaaaabbbaaeddddddddddd
        ddddddeaaaaaabbaaaaaddcecccddddeaaabaaaaadddddeeecccccddddddddddddddddddddeaaaaaaaaddddddddddddceeccccccddddddddddddeabbbbaaaadddddddddddddaaabbbbaaeddddddddddd
        ddddddeaaaaaaabbaaaadddddddddddeaaabbaaaaaddddddccccddddddddddddddddddddddeaaaaaaaaddddddddddddddcccccddddddddddddddeebbbaaaaaddddddddddddaaaabbbbaaeedddddddddd
        dddddeeaaaaaaabbaaaaaddddddddddeaaabbaaaaaddddddddddddddddddddddddddddddddeaaaaaaadddddddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddaaabbbbbaaaeeddddddddd
        dddddeaaaaaaaabbbaaaadddddddddeeaaabbaaaaadddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddddeeaaaaaaddddddddddddaaabbbbbbaaaaeddddddddd
        ddddeeaaaaaaaabbbbaaadddddddddeaaaabbaaaaaaddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddddddddddddddddddddddddddeeeaaddddddddddddddaaabbbbbbaaaaeddddddddd
        ddddeaaaaaaaaaabbbbaaadddddddeeaaaabbaaaaaaddddddddddddddddddddddddddddddeaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaabbbbbbaaaaeddddddddd
        ddddeaaaaaaaaaabbbbbaaddddddeeaaaaabbaaaaaaddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaabbbbbbaaaaeddddddddd
        ddddeaaaaaaaaaabbbbbaadddddeeaaaaaaabbaaaaaadddddddddddddddddddddddddddddeaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaabbbbbbaaaaeddddddddd
        ddddeaaaaaaaaabbbbbbeffeddefffffaaaabbbaaaaadddddddddddddddddddddddddedddeaaaaabaaaddddddddddddddddddddddddddeffddddddddddddfffddefeddddaaaaabbbbbaaaaeddddddddd
        ddddeeaaaaaaabbbbbbbf11fddff1f1feaaabbbbaaaaaddddddddddddddddddddddefffddaaaaaabaaadddddddddddddddddddddddddef1deddddddddddef1dedf1dedddaaaaaabbbaaaaaeddddddddd
        dddddeaaaaaaeffeffeff11fffffff1fefffebbbaffffffffedefffeeffffedeffffd1ffefffeeffffefffeddddefffeffffefffedddef1defffeddffffef1dffffffffffeefffffeaaaaeeddddddddd
        dddddeeaaaaaf11ff1f1111111ff1f1ffd111fbbeff111d111fd111ff1111dfd111d111ff111ff111ff111fedcf1111ff111f111dfddef1df111dff111fff1df1d1df1111df1111deaaaaedddddddddd
        ddddddeaaaaaff1ff1f1f1dff1df1f1ff1fff1cbeff1dd1dd1f11f11d11fd1f1fffff1ff1fff1f1fff1ffffcdeffff1ff1df1fff1dcdef1d11f11d11f11ff1d1df1df1dfd1f1fd1deaaaeedddddddddd
        ddddddeeaaaaef1f11f1f1dff1df1f1ff11111ebeff1ff1fd1d1fff1d1ffd1f11ffff1ff11111f1dff11fffcddfd111ff1ff11111dedef1d1dff1d1fff1ff11dff1df1ffd1f1ff1decaadddddddddddd
        dddddddeeaaaef111d11f1dff1df1f1ffdffffeceff1ff1fd1d1fef1d1ffd1fff11ff1ff1fffff1defff11fecef1ff1ff1ff1fffffecef1d1def1d1fff1ff111ff1df1ffd1f1ff1decdddddddddddddd
        ddddddddeeaaaf11dfd1f1dff1df1f1ff1ffffcceff1ff1fd1f11f11d1ffd1ffff1ff1ff1fffff1dfffff1fecef1ff1ff1ff1fffffccef1d11f11d11f11ff1dd1f1df1ffd1f1ff1deccddddddddddddd
        dddddddddeeeef1dffd1f1dff1df1f11f1111dcceff1ff1fd1fd111ff1ffd1d1111ff11df1111d1dff1111fecef1111ff1fef1111dccef1df111dff111fff1df111df1ffd1f1111deccddddddddddddd
        dddddddddddeeefffffffffffffffffffffffccccffffffffffffffffffefffffffeffffffffffffeeffffecccfffffffffcfffffccccffffffffeefffffffffffffffffffffff1deccddddddddddddd
        ddddddddddddddddcccccccccccccccccccccccbbbbccccccccccccccccccccccccccccccccccccccccccccccaddcccccccccccccccddddcccccccccccccccccccccccccced1111fcccddddddddddddd
        dddddddddddddddddcccccccccccccccccccccbbbbbaaccccccccccccccccccccccccccccccccccccbbbcccaaaddddccccccddccccdddddddcccccccccccccccccccccccccfffffeccdddddddddddddd
        ddddddddddddddddddddddddeaaaaaaaaabbbbbbbbbaaaaadddddddddddddddddddddddeaaaaabbbbbbbbaaaaadddddddddddddddddddddddddddddddddddddddddddddddddceeccccdddddddddddddd
        ddddddddddddddddddddddddeaaaaaaaabbbbbbbbbbaaaaadddddddddddddddddddddddeaaaaabbbbbbbbaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddccccddddddddddddddd
        ddddddddddddddddddddddddeeaaaaaaabbbbbbbbbaaaaaadddddddddddddddddddddddeaaaaaabbbbbbbaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddeaaaaaaaabbbbbbbbaaaaaddddddddddddddddddddddddeeaaaaabbbbbbbaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddeeaaaaaaabbbbbbbbaaaaaddddddddddddddddddddddddeeaaaaabbbbbbbaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddeaaaaaaaaabbbaaaaaaaadddddddddddddddddddddddddeeaaaaabbbbbaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddeeaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddeeaaaaaabbaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddeaaaaaaaaaaaaaaaaadddddddddddddddddddddddddddeeaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddeffffdddddddddeaaaaaaaaaaaaaaaaaddefffddddddddddddddddddddddeeffecfffaeffeeffeddfffffefffffeddddddeeddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddf111fcddddddddeeaaaaaaaaaaaaaaadddef1feddddddddddddddddddddddff1fff1fef1fff11fdff1111fd1111dfcdddeffedddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddef1ffffffeeffffeeeffeeffefffeeffeffff1fcddeffeffeefffeefffedddef1ff111ff1ff1111ef1dffffd1fff1deddeff1feefffedddeffffffffcdffffeffeeffefffedddddddddd
        ddddddddddddf111df111dfd11dfdf11ff11f111dfd1ff1df1fcdcf1dfd1fd111ff111dfddef11f111f11ff1111ff1dffffd1fffd1fcdff111ff111feddef111d111fff111ff1fff1f111deddddddddd
        ddddddddddddff1ff1dfd1fd1ffedef1ff1f11f11fd1ff1df1fcdcf1dfd1f1dfff1fff1dcdcf11f1f1f11ff1ff1fff11dffd1fcef1fcdfff1ff1dfd1fcdef1dd1dd1ff11f11f1fff11ffd1fcdddddddd
        ddddddddddddef1ff1fff1dd1fccdcf1111f1fff1dd1ff1df1fcccf1dfd1f11dff11111deddff111fd11ffd1ff1dffff11fd1fcef1fcccff1ff1fff1fcdef1ff1fd1ff1fff1f11f1f11111fcdddddddd
        ddddddddddddef1ff1fff1dd1fcccdff111f1fef1dd1ff1df1fcccf1dfd1fff11f1fffffecdef111fd11ff111111fffff1dd1fcfd1fcccff1ff1fef1fccef1ff1fd1ff1fff1ff1f1f1fffffccddddddd
        ddddddddddddef1ff1dfd1fd1fcccdef11ff11f11fd1fd1dfffcccf1df11ffff1f11ffffccdcf11dfd11ff1fffd1f1fff1dd1fff1dfcccff1ff1dfd1fccef1ff1fd1ff11f11ff1f1f1fffffccddddddd
        ddddddddddddef1fff111dfd1fccddcf11fff111dff1111dd1fcccfd1111d1111ff1111dccdcf11def1dfd1fccf1ff1111fd1111dfeccdff11dd111ffccef1ff1fd1ffd111feff1fff1111fccddddddd
        dddddddddddddfffeffffffffeccddef11fcfffffcfffffffffccdcffffffffffefffffcccddefffcffffffcccfffffffffffffffcccddefffffffffccceffffffffffffffeceffecfffffcccddddddd
        ddddddddddddddddcccccccccccdded11fccccccccccccccccccdddddccccccccccccccccddddddccccccccccccccceeeccccccccccddddddcccccccccddddccccccccccccccccccccccccccdddddddd
        dddddddddddddddddddccccccddddefffeccccccccccccccccddddddddccccccccccccccdddddddddcccccccddddccccccccccccccdddddddddccccccdddddddccccccccccccdddddccccccddddddddd
        ddddddddddddddddddddddddddddddeecdccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
        edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
        edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
        edddddddddddddddddffffffcddddddddddddddddddddddddeffffeefffffeddfffdddeffffeeffffffeddddeeddddddddddddddddddddddddddddddedeffeddddddddddddddddddddddddddddddddde
        eddddddddddddddddef11111fcddddddddddddddddddddddef1111ff11111feef11edef1111ff111111fdddeffeddddddddddddddddddddddddddddffffd1fddddddddddddddddddddddddddddddddde
        eddddddddddddddddef1fff11ffffefffedefffeefffedddf11fffff1fffd1ffd111ef1ffff1f1dfffffcdef1dfeefffedddddfffedefffeefffffff1fffffffffefffeffeefffcdddddddddddddddde
        eddddddddddddddddef1fff11f111f1111ff111df111deddf11fffff1fffd1ff1111ff1feefff1dffffcccf111ffd111fedddfd111ff111df11111f111df1f1111df1fff1ff111feddddddddddddddde
        eddddddddddddddddef1fff11f1ffd1ffd1d1fff11fffedde111dfff1fffd1ff1ff1ff1fcccef11111deccff1fff11f11fcded1ffff11f11f11ff1df1fff1f1ffd1f1fff1f1ffd1fddddddddddddddde
        eddddddddddddddddef11111ff1ffd11111d11ff111ffcddcffd11df11111ffd1ff1ff1fccccf1dffffecccf1ffd1fff1fcdfd1feff1fff1111ff1df1fff1f1ffd1f1fff1f11111fcdddddddddddddde
        eddddddddddddddddef1ffffff1ffd1ffffff111ff111fcdcefffd1f1dfffff111111f1fccfff1dffffccccf1ffd1fef1fccfd1feff1fef1111ff1df1fff1f1ffd1f1fff1f1fffffcdddddddddddddde
        eddddddddddddddddef1fcccef1ffd1fffffff11fff11fccf1dff1df1deccfd1fffd1f1ffff1f1dfffffcccf1fff11f11fccfd1ffff11f11f11ff1df1fff1f1ffd1f1ffd1f1fffffccddddddddddddde
        eedddddddddddddddef1fcccef1fefd111dd111fd111feccfd1111ff1deccfd1ecef1ff1111ff111111fcdcf111fd111ffcccfd111df111df11ff1df11df1f1ffd1fd1111fd1111fccddddddddddddee
        eedddddddddddddddcfffcccefffcefffffffffffffffccdefffffffffcccfffcccfffffffffffffffffcddefffffffffcccdeffffeffffffffeffffffffffffeffffffffffffffccdddddddddddddee
        eeeddddddddddddddddddddddddccccccccccccccccccccdddeeeccccccccddccccccccccccccccccccccdddddcccccccccdddddcccccccccccccccccccccccccccccccccccccccccddddddddddddeee
        eeedddddddddddddddddddddddddddddccccccccccccccddddddccccccdddddddddddcccccccccccccccddddddddccccccdddddddcccccccccccccccccccccccccccccccccccccccdddddddddddddeee
        eeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeee
        eeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeee
        eeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeee
        eeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeee
        eeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeee
        `)
    pauseUntil(() => controller.A.isPressed())
    if (controller.A.isPressed() && GameLoad == false) {
        LevelOne()
    }
})
function TitleScreen () {
    if (Level == 0) {
        TtileScreen = sprites.create(img`
            ccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccc
            ccccccccaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccc
            ccccccaaaaaaaaaaaaaaeeeaaeeeaaaaaaaaaaaaaaeeeeeecaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccc
            cccccaaaaaaaaaaaaaaeebbbbbaeaaaaaaaaaaaaeeeabbbaecaeeeaaeeaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccc
            ccccaaaaaaaaaaaaaaaebbbbbbbaeaaaaeeeeaaeebbbbbbbaeeeaeeaeabbecaeeeaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccc
            cccaaaaaaaaaaaaaaaeabbbbbbbbecaaeebbaeaeabbbbabbaeebbbeeebbbeeeeaeeaaaeeaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
            cccaaaaaaaaaaaaaaaeabbaeebbbeecceabbbeeeabbeeeaeecebbbaebbbbaeebbaeaaeebbbaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
            ccaaaaaaaaaaaaaaaaebbbaeeabbecceebbbbaeeabbaeeeecceabbbbbbbbaeebbaeceebbbbbeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacc
            ccaaaaaaaaaaaaaaaeebbbeceebaeceebbbbbbaeebbbeecccceabbbbbabbeeebbaeceabbabbeecaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacc
            caaaaaaaaaaaaaaaaeabbaeceebaeceabbaebbbeeabbbeeccceabbbbbabbeeebbaeeebbaeaaecccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaeabbaeceebaecebbbeeabbeeeabbbaeeceabbbbaabbeeeabaeeabbeeeeccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaeabbaecceaeeeebbaeeabbaeeeabbbaeeeabbeeeabbeceabbeebbaecccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaeabbaecceeeeeabbeeeebbaeceeabbbaeeabbeeeabbeeeabbeebbaecceeeecaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaeabbbeccceeeeabbaeeebbbeccceebbbaeabbeceabbaeeabbeebbaeceeabaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaeebbbeeeeabbaebbbeeebbbecccceebbaeabbeceabbaeeabbeebbaeeeabbbeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaebbbaeeabbbeeabbaeabbaeeeeeeabbaeabbeeeebbaeeabbeeabbaabbbbeeccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaebbbbbbbbbeeeebbbbbbbeeeeaebbbbeeabbaeeebbaeeabbeeebbbbbbaeecccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaeabbbbbbaeecceebbbbbaeeabbbbbbeeeebbaeeebbaeeebbeeeabbbbaeecccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaaeabbeeeeecccceeeaaeeceebbbbaeecceeeeccebbaeceeeeceeeeeeeccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaaeebaeeeccccccceeeeeccceeeeeeecccceeccceeeeecceecccceeeccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            aaaaaaaaaaaaaaaaaaaaeaeeccccccccaaccccccccceeccccccccccccceeecccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaeeeccccccccaaaacccccccccccccccccaaccccccccccccccccacccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaacccccccaaaaaaaacccaaaaccccccaaaaaaaaaaccccaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeebbbbbaeaaeeeeaaaaaaaaaeeeeeeeeeeaaaeeeaaaaaaeeeaaaeecaaaaaaaaaeaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaebbbbbbbaeceaaeeaaaaaeeeeeeaaaabaeaaeebaeaaaaeeaeeaeeeeeaaaaaaeeeeeeeabeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbbbbbbbeeebbaeaaaaaeabbbbbbbbbbecaebbbecaaaebbaeeebbaeeeeeaaeabaeebbbbbaeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbaeebbbeeebbaecaaaaebbbbbbbbbbaeceebbbeecacebbbaeebbbeeabeeaebbbeebbbbbbbeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaebbbaeeabbeeebbaeccaaaeabbeeeeeeeeeceabbbaecceebbbbeebbbeebbaeaebbbeebbbabbbbecaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeebbbeceebaecebbbecccaaeabbeeeeeeeeeceabbbbecceebbbbaebbbeebbaeceabbeebbbeabbbeccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbaeceebaecebbbecccaaeebbeeeaabbaecebbabbaeeeebbbbbebbbeabbaeceabbeebbbbbbbaecccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbaeceebaecebbbecccaaaebbabbbbbbbeeebbeabbeeeebbbbbabbbeabbaeceabbeebbbbbbeeccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbaecceaeecebbbecccaacebbbbbbbbbaeeabbabbbbbbebbabbbbbbeabbaeceabbeeabbbeeecccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbaecceeeeeebbbecccaaeebbbaeeeeeeeebbbbbbbbbbabbaabbbbbeebbaecebbbeeabbaecccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaeeaaaaaaaaaaaaaaaaaaaeabbbeccceeeeebbbecccaaeebbeeeecccceebbbbbbbbaeebbaebbbbaeebbbeeabbaeeabbaeccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaddeaaaaaaaaaaaaaaaaaaaeebbbeeeeabbaebbbeeeeeaeebbeeeeeccceabbaeeebbeeebbaeabbbbeeabbeebbbeeeabbaecccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaadddeaaaaaaaaaaaaaaaaaaaaebbbaeeabbbeebbbaaaeeeeabbeeeeeeeeebbaeeeebbaeebbaeebbbbeeebbbabbbeceabbaeccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaeeeaaaaaaaaaaaaaaadddeaaaaaaaaaaaaaaaaaaaaebbbbbbbbbeeebbbbbbbbbeabbbbbbbaeeebbeecceabbeebbaeeabbbeeeabbbbbeeceebbaecccaaaaaadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaeedeeaaaaaaaaaaaaaddddeaaaaaaaaaaaaaaaaaaaaeabbbbbbaeeceabbbbbbbbeabbbbbbbaeceaaeccceabbeebbeeceabbeceebbbbaecceebbbecccaaaaddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaedddeeaaaaaaaaaaadddddeaaaaaaaaaaaaaaaaaaaadeabbeeeeecceeeeeeeeeeeeeeeeeeeeccceecccceabbeeeeecceeeeecceeeeeecccceabaecccaaaadddddddaaaaaaaaaaaaaaaaeeeaaaaaaaa
            aaddddedaaaaaaaaaaadddddeeaaaaaaaaaaaaaaaaaaddeebaeeecccccceeecceeccceeeeeeecccccccccceeaaeccecccceeecccceeeeccccceeeeccccaaadddddddddaaaaaaaaaaaaaaaedeeaaaaaaa
            aaeddddeaaaaaaaaaaaddddddeeaaaaaaaaaaaaaaaaddddeaeeccccccccccccccccccccccccccccccaccccaeeeccccccccccccccccccccccccddccccccaaddddddddddddaaaaaaaaaaaaaeddeaaaaaaa
            aadddddeeaaaaaaaaaddddddddeeaaaaaaaaaaaaaadddddeeeccccccccaaacccccccccccccccccccaaaaaaaddcccccccccddccccaaaccccccddddcccccaddddddddddddddaaaaaaaaaaaaedddeaaaaaa
            aaedddddeeaaaaaaaadddddddddeeeaaaaaaaaaaaddddddddcccccccaaaaaaacccccdddeccccccaaaaaaaaddddcccccddddddeeeeddddccddddddecccaaddddddddddddddaaaaaaaaaaaeedddeeeeaae
            deeddddddeaaaaaaaadddddddddddeaaaaaaaaaaadddddddddccccaaaaaaaaaaaddddddddeaaaaaaaaaaaadddddccddddddddddddddddddddddddeaaaaadddddddddddddddaaaaaaaaaaedddddddeeee
            dddddddddeaaaaaaaadddddddddddeaaaaaaaaaadddddddddddceeaaaaaaaaaddddddddddeaaaaaaaaaaaddddddddddddddddddddddddddddddddeaaaaadddddddddddddddaaaaaaaaeedddddddddddd
            dddddddddeaaaaaaaadddddddddddeaaaaaaaaaadddddddddddddddddddddddddddddddddeaaaaaaaaaaaddddddddddddddddddddddddddddddddeaaaaaadddddddddddddddaaaaaaaeddddddddddddd
            ddddddddeeaaaaaaaadddddddddddeeaaaaaaaaadddddddddddddddddddddddddddddddddeaaaaaaaaaaddddddddddddddddddddddddddddddddeeaaaaaadddddddddddddddaaaaaaaeedddddddddddd
            ddddddddeaaaaaaaaaddddddddddddeaaaaaaaaaddddddddddddddddddddddddddddddddddeaaaaaaaaaddddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddddaaaabaaeedddddddddddd
            ddddddddeaaaaaaaaaddddddddddddeaaaaaaaaaadddddddddddddddddddddddddddddddddeaaaaaaaaaddddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddddaaaabbaaeeddddddddddd
            ddddddeeeaaabbaaaaadddddddddddeaaaaaaaaaadddddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddeabaaaaaaddddddddddddddaaaabbaaaeddddddddddd
            ddddddeaaaaaabaaaaadddddddddddeeaaaaaaaaadddddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddeabbbaaaaddddddddddddddaaaabbbaaeddddddddddd
            ddddddeaaaaaabbaaaaadddddddddddeaaabaaaaadddddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddeabbbbaaaadddddddddddddaaabbbbaaeddddddddddd
            ddddddeaaaaaaabbaaaadddddddddddeaaabbaaaaaddddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddeebbbaaaaaddddddddddddaaaabbbbaaeedddddddddd
            dddddeeaaaaaaabbaaaaaddddddddddeaaabbaaaaaddddddddddddddddddddddddddddddddeaaaaaaadddddddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddaaabbbbbaaaeeddddddddd
            dddddeaaaaaaaabbbaaaadddddddddeeaaabbaaaaadddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddddeeaaaaaaddddddddddddaaabbbbbbaaaaeddddddddd
            ddddeeaaaaaaaabbbbaaadddddddddeaaaabbaaaaaaddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddddddddddddddddddddddddddeeeaaddddddddddddddaaabbbbbbaaaaeddddddddd
            ddddeaaaaaaaaaabbbbaaadddddddeeaaaabbbaaaaaddddddddddddddddddddddddddddddeaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaabbbbbbaaaaeddddddddd
            ddddeaaaaaaaaaabbbbbaaddddddeeaaaaabbbaaaaaddddddddddddddddddddddddddddddeaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaabbbbbbaaaaeddddddddd
            ddddeaaaaaaaaaabbbbbaadddddeeaaaaaaabbaaaaaadddddddddddddddddddddddddddddeaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaabbbbbbaaaaeddddddddd
            ddddeaaaaaaaaabbbbbbaadddddeeaaaaeeeeeaaaaaadddddddddddddddddddddddddddddeaaaaaaadddddddddddddddddddddddddceeeddddddddddddddddddddddddddaaaaabbbbbaaaaeddddddddd
            ddddeeaaaaaaabbbbbbbaadddddeaaaaeabbbbeaaaaadddddddddddddddddddddddddddddaaeaaaaaadddddddaaeddddddddddddddeabeddddddddddddddddddddddddddaaaaaabbbaaaaaeddddddddd
            dddddeaaaaaaabbbbbbaaadddddeaaaaeabeebbeeeeeeeeedeeeeeeeeeeddceeeeeeeeeeebaeeeeeeeeeeeedebaeeeeeedddceeeeeeabeeeeeeeedeeedddddddddddddddaaaaaaaaaaaaaeeddddddddd
            dddddeeaaaaaaabbbbaaaaddddeeaaaaeabeeababbbabbbaebbbbebbbbedeebbbaebbbbaabbbeabbbeabbbeeabbbeabbbeedeabbbbeabeabbbebbeebaedddddddddddddddaaaaaaaaaaaaedddddddddd
            ddddddeaaaaaaaaaaaaaaadddeeaaaaaeabeebaabaeabeebabeeeabeeeeceabeabebbeabebaeebaebaabeeeeebaeebaebbeceabeebaabeeeebaabeabeedddddddddddddddaaaaaaaaaaaeedddddddddd
            ddddddeeaaaaaaaaaaaaaddddeeaaaaaeabbbbeabeebbbbbabbaeebbaeecebbbbbabaeabebaeabbbbbabeeeeebaeabeeabeeeabeebbabeabbbaebaabeccddddddddddddddddaaaaaaaaadddddddddddd
            dddddddeeaaaaaaaaaaaadddeeaaaaaaeabeeeeabeebbeeeeeabbeeabbeeebaeeeebaeabebaeabeeeeabecccebaeabeeabeeeabeebbabebaebaebbbaecccddddddddddddddddaaaadddddddddddddddd
            ddddddddeeaaaaaaaaaaddddeaaaaaaaeabeeeeabeeabeeeeeeabeeeabeeeabeeeebaeabebaeebaeeeabecccebaeebaebbeceabeebaababeebaeabbaeccccddddddddddddddddddddddddddddddddddd
            dddddddddeeeeaaaaaadddddeaaaaaaaeabeeceabeeebbbbabbbaebbbaeceebbbbebaeabeabbeabbbaabeccceabbeabbbaeceabbbbeabebbbbaeebbeccccdddddddddddddddddddddddddddddddddddd
            dddddddddddeedddddddddddeaaaaaaaeeeecceeeeceeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeecceabeeeeeeeeeeeeeebaeccccdddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeaaaaaaaaaecccccecccceeeceeecceeecccccceeeceeccecceeccceeceeccccaceecceeeccceabeeccceceeeeeeabaeccccdddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeaaaaaaaabbbccccccccccccccccccccccccccccccccccccccccccccccccccccaddccccccccceabeccccccccccebbaeccccddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeaaaaaaaabbbcccbbbcccccccccccccccccccdddcccccccccccccccccccccccaaaddcccccccceeeecccccccccceeeecccccddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeaaaaaaaabbbbbbbbbbaaaadddcccccddccddddddddddddeaaaaaaabbbbccbaaaadddddddccddddcccccddddccccccccccdddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeeaaaaaaabbbbbbbbbbaaaaddddddddddddddddddddddddeaaaaaaabbbbbbbaaaadddddddddddddccccddddddddddcccccdddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddeaaaaaaaabbbbbbbbaaaaaddddddddddddddddddddddddeeaaaaaabbbbbbaaaaadddddddddddddddcddddddddddddccdddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddeeaaaaaaabbbbbbaaaaaaaddddddddddddddddddddddddeeaaaaaaabbbbbaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddeaaaaaaaaabbbaaaaaaaddddddddddddddddddddddddddeeaaaaaaabbbaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddeeaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddeeeaaaaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddeaaaaaaaaaaaaaaaaadddddddddddddddddddddddddddeeeaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddeaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddddeeeaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddeeaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddeeaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddeeeeaaaaaaaaaadddddddddddddddddddddddddddddddddeeeaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddeeeeaaaaddddddddddddddddddddddddddddddddddddddddeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddeedddeeddddddddddeeedddddddddeeeddddddddddddddeedddeeedeeeeddddddddddddddeeeddddddddddceedddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddd877ede778ddddddddde78dddddddd877778ddddddddddd877ede778e7e78edddddddddddde87edddddddde87778edddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddd877ede778eeeeeddeee78eeeedddd87ee87eeddeeeeddd877ede778eee78eeeeeeeeeeddee87eeeeeddde87eeeeeeeeeeddeeeeeeee
            edddddddddddddddddddddddddddddddddddddddddddddddddddd8778e8778e7778ee77778e7778cdd87ee8787ee7787edd8778e877887e78e78e777887ee7787e7777edde78eeee877787ee7877778e
            eeddddddddddddddddddddddddddddddddddddddddddddddddddd8777e7778eee87e87e87887e87edd87777e87ee7887edd8777e777887e7878eeee8787ee7887eeee78dde78edde87ee87ee78ee87ee
            eeddddddddddddddddddddddddddddddddddddddddddddddddddd8787e7878e7777e78ee7877777edd87ee87e7887eeeedd8787e787887e777eee7777e7887e87e77778dde78edde87ee87ee78ee78ee
            eeedddddddddddddddddddddddddddddddddddddddddddddddddd87e787e7877e87e78ee7878eeeedd87ee8788777eeeddd87e787e7887e7778e77e87e8777e8787ee78dde78edde87ee87ee78e77ece
            eeedddddddddddddddddddddddddddddddddddddddddddddddddd87e878e7877e87e87e87887eeeedd87ee87ee778eeeedd87e878e7887e7887e77e87ee778e8787e878dde87eeee87ee87ee7887eeee
            eeeeddddddddddddddddddddddddddddddddddddddddddddddddd87e878e7887777ee77778e7777edd877778ee77ee87edd87e878e7887e78e7787777ee77ee87e77778ddde7777887eee7777877778e
            eeeeeddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeee77eeeeeddeeeeeeeeeeeeeeeeeeeeeeee77eeeeeeeeeedddeeeeeeeeedeeeeeeeeeeee
            eeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeee78cddcddddddddddddddddddddddddeee78cddddddddddddddddddddddddddddeeeeee
            eeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde877edddddddddddddddddddddddddddde877edddddddddddddddddddddddddddeeeeeeee
            eeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeddddddddddddddddddddddddddddddeeeddddddddddddddddddddddddddeeeeeeeeee
            `, SpriteKind.Screen)
        animation.runImageAnimation(
        TtileScreen,
        [img`
            ccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccc
            ccccccccaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccc
            ccccccaaaaaaaaaaaaaaeeeaaeeeaaaaaaaaaaaaaaeeeeeecaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccc
            cccccaaaaaaaaaaaaaaeebbbbbaeaaaaaaaaaaaaeeeabbbaecaeeeaaeeaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccc
            ccccaaaaaaaaaaaaaaaebbbbbbbaeaaaaeeeeaaeebbbbbbbaeeeaeeaeabbecaeeeaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccc
            cccaaaaaaaaaaaaaaaeabbbbbbbbecaaeebbaeaeabbbbabbaeebbbeeebbbeeeeaeeaaaeeaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
            cccaaaaaaaaaaaaaaaeabbaeebbbeecceabbbeeeabbeeeaeecebbbaebbbbaeebbaeaaeebbbaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
            ccaaaaaaaaaaaaaaaaebbbaeeabbecceebbbbaeeabbaeeeecceabbbbbbbbaeebbaeceebbbbbeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacc
            ccaaaaaaaaaaaaaaaeebbbeceebaeceebbbbbbaeebbbeecccceabbbbbabbeeebbaeceabbabbeecaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacc
            caaaaaaaaaaaaaaaaeabbaeceebaeceabbaebbbeeabbbeeccceabbbbbabbeeebbaeeebbaeaaecccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaeabbaeceebaecebbbeeabbeeeabbbaeeceabbbbaabbeeeabaeeabbeeeeccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaeabbaecceaeeeebbaeeabbaeeeabbbaeeeabbeeeabbeceabbeebbaecccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaeabbaecceeeeeabbeeeebbaeceeabbbaeeabbeeeabbeeeabbeebbaecceeeecaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaeabbbeccceeeeabbaeeebbbeccceebbbaeabbeceabbaeeabbeebbaeceeabaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaeebbbeeeeabbaebbbeeebbbecccceebbaeabbeceabbaeeabbeebbaeeeabbbeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaebbbaeeabbbeeabbaeabbaeeeeeeabbaeabbeeeebbaeeabbeeabbaabbbbeeccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaebbbbbbbbbeeeebbbbbbbeeeeaebbbbeeabbaeeebbaeeabbeeebbbbbbaeecccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaeabbbbbbaeecceebbbbbaeeabbbbbbeeeebbaeeebbaeeebbeeeabbbbaeecccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaaeabbeeeeecccceeeaaeeceebbbbaeecceeeeccebbaeceeeeceeeeeeeccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaaeebaeeeccccccceeeeeccceeeeeeecccceeccceeeeecceecccceeeccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            aaaaaaaaaaaaaaaaaaaaeaeeccccccccaaccccccccceeccccccccccccceeecccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaeeeccccccccaaaacccccccccccccccccaaccccccccccccccccacccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaacccccccaaaaaaaacccaaaaccccccaaaaaaaaaaccccaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeebbbbbaeaaeeeeaaaaaaaaaeeeeeeeeeeaaaeeeaaaaaaeeeaaaeecaaaaaaaaaeaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaebbbbbbbaeceaaeeaaaaaeeeeeeaaaabaeaaeebaeaaaaeeaeeaeeeeeaaaaaaeeeeeeeabeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbbbbbbbeeebbaeaaaaaeabbbbbbbbbbecaebbbecaaaebbaeeebbaeeeeeaaeabaeebbbbbaeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbaeebbbeeebbaecaaaaebbbbbbbbbbaeceebbbeecacebbbaeebbbeeabeeaebbbeebbbbbbbeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaebbbaeeabbeeebbaeccaaaeabbeeeeeeeeeceabbbaecceebbbbeebbbeebbaeaebbbeebbbabbbbecaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeebbbeceebaecebbbecccaaeabbeeeeeeeeeceabbbbecceebbbbaebbbeebbaeceabbeebbbeabbbeccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbaeceebaecebbbecccaaeebbeeeaabbaecebbabbaeeeebbbbbebbbeabbaeceabbeebbbbbbbaecccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbaeceebaecebbbecccaaaebbabbbbbbbeeebbeabbeeeebbbbbabbbeabbaeceabbeebbbbbbeeccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbaecceaeecebbbecccaacebbbbbbbbbaeeabbabbbbbbebbabbbbbbeabbaeceabbeeabbbeeecccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbaecceeeeeebbbecccaaeebbbaeeeeeeeebbbbbbbbbbabbaabbbbbeebbaecebbbeeabbaecccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaeeaaaaaaaaaaaaaaaaaaaeabbbeccceeeeebbbecccaaeebbeeeecccceebbbbbbbbaeebbaebbbbaeebbbeeabbaeeabbaeccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaddeaaaaaaaaaaaaaaaaaaaeebbbeeeeabbaebbbeeeeeaeebbeeeeeccceabbaeeebbeeebbaeabbbbeeabbeebbbeeeabbaecccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaadddeaaaaaaaaaaaaaaaaaaaaebbbaeeabbbeebbbaaaeeeeabbeeeeeeeeebbaeeeebbaeebbaeebbbbeeebbbabbbeceabbaeccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaeeeaaaaaaaaaaaaaaadddeaaaaaaaaaaaaaaaaaaaaebbbbbbbbbeeebbbbbbbbbeabbbbbbbaeeebbeecceabbeebbaeeabbbeeeabbbbbeeceebbaecccaaaaaadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaeedeeaaaaaaaaaaaaaddddeaaaaaaaaaaaaaaaaaaaaeabbbbbbaeeceabbbbbbbbeabbbbbbbaeceaaeccceabbeebbeeceabbeceebbbbaecceebbbecccaaaaddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaedddeeaaaaaaaaaaadddddeaaaaaaaaaaaaaaaaaaaadeabbeeeeecceeeeeeeeeeeeeeeeeeeeccceecccceabbeeeeecceeeeecceeeeeecccceabaecccaaaadddddddaaaaaaaaaaaaaaaaeeeaaaaaaaa
            aaddddedaaaaaaaaaaadddddeeaaaaaaaaaaaaaaaaaaddeebaeeecccccceeecceeccceeeeeeecccccccccceeaaeccecccceeecccceeeeccccceeeeccccaaadddddddddaaaaaaaaaaaaaaaedeeaaaaaaa
            aaeddddeaaaaaaaaaaaddddddeeaaaaaaaaaaaaaaaaddddeaeeccccccccccccccccccccccccccccccaccccaeeeccccccccccccccccccccccccddccccccaaddddddddddddaaaaaaaaaaaaaeddeaaaaaaa
            aadddddeeaaaaaaaaaddddddddeeaaaaaaaaaaaaaadddddeeeccccccccaaacccccccccccccccccccaaaaaaaddcccccccccddccccaaaccccccddddcccccaddddddddddddddaaaaaaaaaaaaedddeaaaaaa
            aaedddddeeaaaaaaaadddddddddeeeaaaaaaaaaaaddddddddcccccccaaaaaaacccccdddeccccccaaaaaaaaddddcccccddddddeeeeddddccddddddecccaaddddddddddddddaaaaaaaaaaaeedddeeeeaae
            deeddddddeaaaaaaaadddddddddddeaaaaaaaaaaadddddddddccccaaaaaaaaaaaddddddddeaaaaaaaaaaaadddddccddddddddddddddddddddddddeaaaaadddddddddddddddaaaaaaaaaaedddddddeeee
            dddddddddeaaaaaaaadddddddddddeaaaaaaaaaadddddddddddceeaaaaaaaaaddddddddddeaaaaaaaaaaaddddddddddddddddddddddddddddddddeaaaaadddddddddddddddaaaaaaaaeedddddddddddd
            dddddddddeaaaaaaaadddddddddddeaaaaaaaaaadddddddddddddddddddddddddddddddddeaaaaaaaaaaaddddddddddddddddddddddddddddddddeaaaaaadddddddddddddddaaaaaaaeddddddddddddd
            ddddddddeeaaaaaaaadddddddddddeeaaaaaaaaadddddddddddddddddddddddddddddddddeaaaaaaaaaaddddddddddddddddddddddddddddddddeeaaaaaadddddddddddddddaaaaaaaeedddddddddddd
            ddddddddeaaaaaaaaaddddddddddddeaaaaaaaaaddddddddddddddddddddddddddddddddddeaaaaaaaaaddddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddddaaaabaaeedddddddddddd
            ddddddddeaaaaaaaaaddddddddddddeaaaaaaaaaadddddddddddddddddddddddddddddddddeaaaaaaaaaddddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddddaaaabbaaeeddddddddddd
            ddddddeeeaaabbaaaaadddddddddddeaaaaaaaaaadddddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddeabaaaaaaddddddddddddddaaaabbaaaeddddddddddd
            ddddddeaaaaaabaaaaadddddddddddeeaaaaaaaaadddddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddeabbbaaaaddddddddddddddaaaabbbaaeddddddddddd
            ddddddeaaaaaabbaaaaadddddddddddeaaabaaaaadddddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddeabbbbaaaadddddddddddddaaabbbbaaeddddddddddd
            ddddddeaaaaaaabbaaaadddddddddddeaaabbaaaaaddddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddeebbbaaaaaddddddddddddaaaabbbbaaeedddddddddd
            dddddeeaaaaaaabbaaaaaddddddddddeaaabbaaaaaddddddddddddddddddddddddddddddddeaaaaaaadddddddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddaaabbbbbaaaeeddddddddd
            dddddeaaaaaaaabbbaaaadddddddddeeaaabbaaaaadddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddddeeaaaaaaddddddddddddaaabbbbbbaaaaeddddddddd
            ddddeeaaaaaaaabbbbaaadddddddddeaaaabbaaaaaaddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddddddddddddddddddddddddddeeeaaddddddddddddddaaabbbbbbaaaaeddddddddd
            ddddeaaaaaaaaaabbbbaaadddddddeeaaaabbbaaaaaddddddddddddddddddddddddddddddeaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaabbbbbbaaaaeddddddddd
            ddddeaaaaaaaaaabbbbbaaddddddeeaaaaabbbaaaaaddddddddddddddddddddddddddddddeaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaabbbbbbaaaaeddddddddd
            ddddeaaaaaaaaaabbbbbaadddddeeaaaaaaabbaaaaaadddddddddddddddddddddddddddddeaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaabbbbbbaaaaeddddddddd
            ddddeaaaaaaaaabbbbbbaadddddeeaaaaeeeeeaaaaaadddddddddddddddddddddddddddddeaaaaaaadddddddddddddddddddddddddceeeddddddddddddddddddddddddddaaaaabbbbbaaaaeddddddddd
            ddddeeaaaaaaabbbbbbbaadddddeaaaaeabbbbeaaaaadddddddddddddddddddddddddddddaaeaaaaaadddddddaaeddddddddddddddeabeddddddddddddddddddddddddddaaaaaabbbaaaaaeddddddddd
            dddddeaaaaaaabbbbbbaaadddddeaaaaeabeebbeeeeeeeeedeeeeeeeeeeddceeeeeeeeeeebaeeeeeeeeeeeedebaeeeeeedddceeeeeeabeeeeeeeedeeedddddddddddddddaaaaaaaaaaaaaeeddddddddd
            dddddeeaaaaaaabbbbaaaaddddeeaaaaeabeeababbbabbbaebbbbebbbbedeebbbaebbbbaabbbeabbbeabbbeeabbbeabbbeedeabbbbeabeabbbebbeebaedddddddddddddddaaaaaaaaaaaaedddddddddd
            ddddddeaaaaaaaaaaaaaaadddeeaaaaaeabeebaabaeabeebabeeeabeeeeceabeabebbeabebaeebaebaabeeeeebaeebaebbeceabeebaabeeeebaabeabeedddddddddddddddaaaaaaaaaaaeedddddddddd
            ddddddeeaaaaaaaaaaaaaddddeeaaaaaeabbbbeabeebbbbbabbaeebbaeecebbbbbabaeabebaeabbbbbabeeeeebaeabeeabeeeabeebbabeabbbaebaabeccddddddddddddddddaaaaaaaaadddddddddddd
            dddddddeeaaaaaaaaaaaadddeeaaaaaaeabeeeeabeebbeeeeeabbeeabbeeebaeeeebaeabebaeabeeeeabecccebaeabeeabeeeabeebbabebaebaebbbaecccddddddddddddddddaaaadddddddddddddddd
            ddddddddeeaaaaaaaaaaddddeaaaaaaaeabeeeeabeeabeeeeeeabeeeabeeeabeeeebaeabebaeebaeeeabecccebaeebaebbeceabeebaababeebaeabbaeccccddddddddddddddddddddddddddddddddddd
            dddddddddeeeeaaaaaadddddeaaaaaaaeabeeceabeeebbbbabbbaebbbaeceebbbbebaeabeabbeabbbaabeccceabbeabbbaeceabbbbeabebbbbaeebbeccccdddddddddddddddddddddddddddddddddddd
            dddddddddddeedddddddddddeaaaaaaaeeeecceeeeceeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeecceabeeeeeeeeeeeeeebaeccccdddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeaaaaaaaaaecccccecccceeeceeecceeecccccceeeceeccecceeccceeceeccccaceecceeeccceabeeccceceeeeeeabaeccccdddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeaaaaaaaabbbccccccccccccccccccccccccccccccccccccccccccccccccccccaddccccccccceabeccccccccccebbaeccccddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeaaaaaaaabbbcccbbbcccccccccccccccccccdddcccccccccccccccccccccccaaaddcccccccceeeecccccccccceeeecccccddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeaaaaaaaabbbbbbbbbbaaaadddcccccddccddddddddddddeaaaaaaabbbbccbaaaadddddddccddddcccccddddccccccccccdddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeeaaaaaaabbbbbbbbbbaaaaddddddddddddddddddddddddeaaaaaaabbbbbbbaaaadddddddddddddccccddddddddddcccccdddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddeaaaaaaaabbbbbbbbaaaaaddddddddddddddddddddddddeeaaaaaabbbbbbaaaaadddddddddddddddcddddddddddddccdddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddeeaaaaaaabbbbbbaaaaaaaddddddddddddddddddddddddeeaaaaaaabbbbbaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddeaaaaaaaaabbbaaaaaaaddddddddddddddddddddddddddeeaaaaaaabbbaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddeeaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddeeeaaaaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddeaaaaaaaaaaaaaaaaadddddddddddddddddddddddddddeeeaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddeaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddddeeeaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddeeaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddeeaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddeeeeaaaaaaaaaadddddddddddddddddddddddddddddddddeeeaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddeeeeaaaaddddddddddddddddddddddddddddddddddddddddeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddeedddeeddddddddddeeedddddddddeeeddddddddddddddeedddeeedeeeeddddddddddddddeeeddddddddddceedddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddd877ede778ddddddddde78dddddddd877778ddddddddddd877ede778e7e78edddddddddddde87edddddddde87778edddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddd877ede778eeeeeddeee78eeeedddd87ee87eeddeeeeddd877ede778eee78eeeeeeeeeeddee87eeeeeddde87eeeeeeeeeeddeeeeeeee
            edddddddddddddddddddddddddddddddddddddddddddddddddddd8778e8778e7778ee77778e7778cdd87ee8787ee7787edd8778e877887e78e78e777887ee7787e7777edde78eeee877787ee7877778e
            eeddddddddddddddddddddddddddddddddddddddddddddddddddd8777e7778eee87e87e87887e87edd87777e87ee7887edd8777e777887e7878eeee8787ee7887eeee78dde78edde87ee87ee78ee87ee
            eeddddddddddddddddddddddddddddddddddddddddddddddddddd8787e7878e7777e78ee7877777edd87ee87e7887eeeedd8787e787887e777eee7777e7887e87e77778dde78edde87ee87ee78ee78ee
            eeedddddddddddddddddddddddddddddddddddddddddddddddddd87e787e7877e87e78ee7878eeeedd87ee8788777eeeddd87e787e7887e7778e77e87e8777e8787ee78dde78edde87ee87ee78e77ece
            eeedddddddddddddddddddddddddddddddddddddddddddddddddd87e878e7877e87e87e87887eeeedd87ee87ee778eeeedd87e878e7887e7887e77e87ee778e8787e878dde87eeee87ee87ee7887eeee
            eeeeddddddddddddddddddddddddddddddddddddddddddddddddd87e878e7887777ee77778e7777edd877778ee77ee87edd87e878e7887e78e7787777ee77ee87e77778ddde7777887eee7777877778e
            eeeeeddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeee77eeeeeddeeeeeeeeeeeeeeeeeeeeeeee77eeeeeeeeeedddeeeeeeeeedeeeeeeeeeeee
            eeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeee78cddcddddddddddddddddddddddddeee78cddddddddddddddddddddddddddddeeeeee
            eeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde877edddddddddddddddddddddddddddde877edddddddddddddddddddddddddddeeeeeeee
            eeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeddddddddddddddddddddddddddddddeeeddddddddddddddddddddddddddeeeeeeeeee
            `,img`
            ccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccc
            ccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccc
            ccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccc
            cccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccc
            ccccaaaaaaaaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccc
            cccaaaaaaaaaaaaaaaaaaaaaaeeeaaeeeaaaaaaaaaaaaaaeeeeeecaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
            cccaaaaaaaaaaaaaaaaaaaaaeebbbbbaeaaaaaaaaaaaaeeeabbbaecaeeeaaeeaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc
            ccaaaaaaaaaaaaaaaaaaaaaaebbbbbbbaeaaaaeeeeaaeebbbbbbbaeeeaeeaeabbecaeeeaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacc
            ccaaaaaaaaaaaaaaaaaaaaaeabbbbbbbbecaaeebbaeaeabbbbabbaeebbbeeebbbeeeeaeeaaaeeaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacc
            caaaaaaaaaaaaaaaaaaaaaaeabbaeebbbeecceabbbeeeabbeeeaeecebbbaebbbbaeebbaeaaeebbbaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaaaaaaebbbaeeabbecceebbbbaeeabbaeeeecceabbbbbbbbaeebbaeceebbbbbeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaaaaaeebbbeceebaeceebbbbbbaeebbbeecccceabbbbbabbeeebbaeceabbabbeecaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaaaaaeabbaeceebaeceabbaebbbeeabbbeeccceabbbbbabbeeebbaeeebbaeaaecccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaaaaaeabbaeceebaecebbbeeabbeeeabbbaeeceabbbbaabbeeeabaeeabbeeeeccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaaaaaeabbaecceaeeeebbaeeabbaeeeabbbaeeeabbeeeabbeceabbeebbaecccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaaaaaeabbaecceeeeeabbeeeebbaeceeabbbaeeabbeeeabbeeeabbeebbaecceeeecaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaaaaaeabbbeccceeeeabbaeeebbbeccceebbbaeabbeceabbaeeabbeebbaeceeabaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaaaaaeebbbeeeeabbaebbbeeebbbecccceebbaeabbeceabbaeeabbeebbaeeeabbbeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaaaaaaebbbaeeabbbeeabbaeabbaeeeeeeabbaeabbeeeebbaeeabbeeabbaabbbbeeccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            caaaaaaaaaaaaaaaaaaaaaaebbbbbbbbbeeeebbbbbbbeeeeaebbbbeeabbaeeebbaeeabbeeebbbbbbaeecccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac
            aaaaaaaaaaaaaaaaaaaaaaaeabbbbbbaeecceebbbbbaeeabbbbbbeeeebbaeeebbaeeebbeeeabbbbaeecccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaeabbeeeeecccceeeaaeeceebbbbaeecceeeeccebbaeceeeeceeeeeeeccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaeebaeeeccccccceeeeeccceeeeeeecccceeccceeeeecceecccceeeccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaeaeeccccccccaaccccccccceeccccccccccccceeecccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaeeeccccccccaaaacccccccccccccccccaaccccccccccccccccacccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaacccccccaaaaaaaacccaaaaccccccaaaaaaaaaaccccaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeebbbbbaeaaeeeeaaaaaaaaaeeeeeeeeeeaaaeeeaaaaaaeeeaaaeecaaaaaaaaaeaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaebbbbbbbaeceaaeeaaaaaeeeeeeaaaabaeaaeebaeaaaaeeaeeaeeeeeaaaaaaeeeeeeeabeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbbbbbbbeeebbaeaaaaaeabbbbbbbbbbecaebbbecaaaebbaeeebbaeeeeeaaeabaeebbbbbaeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbaeebbbeeebbaecaaaaebbbbbbbbbbaeceebbbeecacebbbaeebbbeeabeeaebbbeebbbbbbbeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaebbbaeeabbeeebbaeccaaaeabbeeeeeeeeeceabbbaecceebbbbeebbbeebbaeaebbbeebbbabbbbecaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeebbbeceebaecebbbecccaaeabbeeeeeeeeeceabbbbecceebbbbaebbbeebbaeceabbeebbbeabbbeccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeabbaeceebaecebbbecccaaeebbeeeaabbaecebbabbaeeeebbbbbebbbeabbaeceabbeebbbbbbbaecccaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaeeaaaaaaaaaaaaaaaaaaaaaaaaeabbaeceebaecebbbecccaaaebbabbbbbbbeeebbeabbeeeebbbbbabbbeabbaeceabbeebbbbbbeeccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaddeaaaaaaaaaaaaaaaaaaaaaaaaeabbaecceaeecebbbecccaacebbbbbbbbbaeeabbabbbbbbebbabbbbbbeabbaeceabbeeabbbeeecccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaadddeaaaaaaaaaaaaaaaaaaaaaaaaeabbaecceeeeeebbbecccaaeebbbaeeeeeeeebbbbbbbbbbabbaabbbbbeebbaecebbbeeabbaecccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaeeeaaaaaaaaaaaaaaadddeaaaaaaaaaaaaaaaaaaaaaaaaeabbbeccceeeeebbbecccaaeebbeeeecccceebbbbbbbbaeebbaebbbbaeebbbeeabbaeeabbaeccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaeedeeaaaaaaaaaaaaaddddeaaaaaaaaaaaaaaaaaaaaaaaaeebbbeeeeabbaebbbeeeeeaeebbeeeeeccceabbaeeebbeeebbaeabbbbeeabbeebbbeeeabbaecccccdddaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaedddeeaaaaaaaaaaadddddeaaaaaaaaaaaaaaaaaaeeeaaaaebbbaeeabbbeebbbaaaeeeeabbeeeeeeeeebbaeeeebbaeebbaeebbbbeeebbbabbbeceabbaeccccdddddaaaaaaaaaaaaaaaaeeeaaaaaaaa
            aaddddedaaaaaaaaaaadddddeeaaaaaaaaaaaaaaaaeddeeaaaebbbbbbbbbeeebbbbbbbbbeabbbbbbbaeeebbeecceabbeebbaeeabbbeeeabbbbbeeceebbaecccdddddddaaaaaaaaaaaaaaaedeeaaaaaaa
            aaeddddeaaaaaaaaaaaddddddeeaaaaaaaaaaaaaaaedddeaaaeabbbbbbaeeceabbbbbbbbeabbbbbbbaeceaaeccceabbeebbeeceabbeceebbbbaecceebbbecccdddddddddaaaaaaaaaaaaaeddeaaaaaaa
            aadddddeeaaaaaaaaaddddddddeeaaaaaaaaaaaaaeeddddeaaaeabbeeeeecceeeeeeeeeeeeeeeeeeeeccceecccceabbeeeeecceeeeecceeeeeecccceabaecccddddddddddaaaaaaaaaaaaedddeaaaaaa
            aaedddddeeaaaaaaaadddddddddeeeaaaaaaaaaaedddddddeaaeebaeeecccccceeecceeccceeeeeeecccccccccceeaaeccecccceeecccceeeeccccceeeeccccddddddddddaaaaaaaaaaaeedddeeeeaae
            deeddddddeaaaaaaaadddddddddddeaaaaaaaaaaeddddddddddaeaeeccccccccccccccccccccccccccccccdccccdeeeccccccccccccccccccccccccaaccccccdddddddddddaaaaaaaaaaedddddddeeee
            dddddddddeaaaaaaaadddddddddddeaaaaaaaaaaddddddddddddeeeccccccccdddcccccccccccccccccccdddddddddcccccccccddccccdddccccccaaaacccccdddddddddddaaaaaaaaeedddddddddddd
            dddddddddeaaaaaaaadddddddddddeaaaaaaaaaaddddddddddddddcccccccdddddddccccceaaaccccccaaddddddddddcccccddddddddddddddccdeaaaaacccdddddddddddddaaaaaaaeddddddddddddd
            ddddddddeeaaaaaaaadddddddddddeeaaaaaaaaadddddddddddddddccccddddddddddddddeaaaaaaaaaaddddddddddddccddddddddddddddddddeeaaaaaadddddddddddddddaaaaaaaeedddddddddddd
            ddddddddeaaaaaaaaaddddddddddddeaaaaaaaaaddddddddddddddddcdddddddddddddddddaaaaaaaaaaddddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddddaaaabaaeedddddddddddd
            ddddddddeaaaaaaaaaddddddddddddeaaaaaaaaaadddddddddddddddddddddddddddddddddeaaaaaaaaaddddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddddaaaabbaaeeddddddddddd
            ddddddeeeaaabbaaaaadddddddddddeaaaaaaaaaadddddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddeabaaaaaaddddddddddddddaaaabbaaaeddddddddddd
            ddddddeaaaaaabaaaaadddddddddddeeaaaaaaaaadddddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddeabbbaaaaddddddddddddddaaaabbbaaeddddddddddd
            ddddddeaaaaaabbaaaaadddddddddddeaaabaaaaadddddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddeabbbbaaaadddddddddddddaaabbbbaaeddddddddddd
            ddddddeaaaaaaabbaaaadddddddddddeaaabbaaaaaddddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddeebbbaaaaaddddddddddddaaaabbbbaaeedddddddddd
            dddddeeaaaaaaabbaaaaaddddddddddeaaabbaaaaaddddddddddddddddddddddddddddddddeaaaaaaadddddddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddaaabbbbbaaaeeddddddddd
            dddddeaaaaaaaabbbaaaadddddddddeeaaabbaaaaadddddddddddddddddddddddddddddddeaaaaaaaadddddddddddddddddddddddddddddddddddeeaaaaaaddddddddddddaaabbbbbbaaaaeddddddddd
            ddddeeaaaaaaaabbbbaaadddddddddeaaaabbaaaaaaddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddddddddddddddddddddddddddeeeaaddddddddddddddaaabbbbbbaaaaeddddddddd
            ddddeaaaaaaaaaabbbbaaadddddddeeaaaabbaaaaaaddddddddddddddddddddddddddddddeaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaabbbbbbaaaaeddddddddd
            ddddeaaaaaaaaaabbbbbaaddddddeeaaaaabbaaaaaaddddddddddddddddddddddddddddddeaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaabbbbbbaaaaeddddddddd
            ddddeaaaaaaaaaabbbbbaadddddeeaaaaaaabbaaaaaadddddddddddddddddddddddddddddeaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaabbbbbbaaaaeddddddddd
            ddddeaaaaaaaaabbbbbbaadddddeeaaaaaaabbbaaaaadddddddddddddddddddddddddddddeaaaaabaaadddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaabbbbbaaaaeddddddddd
            ddddeeaaaaaaabbbbbbbaadddddeaaaaaaaabbbbaaaaaddddddddddddddddddddddddddddaaaaaabaaadddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaabbbaaaaaeddddddddd
            dddddeaaaaaaabbbbbbaaadddddeaaaaaaaabbbbaaaaaaddddddddddddddddddddddddddeaaaaabbaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaaaeeddddddddd
            dddddeeaaaaaaabbbbaaaaddddeeaaaaaaaabbeeeeeaaaddddddddddddddddddddddddddeaaaaabaaaaaaddddddddddddddddddddddddddceeeddddddddddddddddddddddaaaaaaaaaaaaedddddddddd
            ddddddeaaaaaaaaaaaaaaadddeeaaaaaaaaabeabbbbeaaddddddddddddddddddddddddddeaaaaaaaeaaaaaddddddddaaeddddddddddddddeabeddddddddddddddddddddddaaaaaaaaaaaeedddddddddd
            ddddddeeaaaaaaaaaaaaaddddeeaaaaaaaaabeabeebbeeeeeeeeedeeeeeeeeeeddceeeeeeeeeeebaeeeeeeeeeeeedebaeeeeeedddceeeeeeabeeeeeeeedeeedddddddddddddaaaaaaaaadddddddddddd
            dddddddeeaaaaaaaaaaaadddeeaaaaaaaaabbeabeeababbbabbbaebbbbebbbbedeebbbaebbbbaabbbeabbbeabbbeeabbbeabbbeedeabbbbeabeabbbebbeebaedddddddddddddaaaadddddddddddddddd
            ddddddddeeaaaaaaaaaaddddeaaaaaaaaaabbeabeebaabaeabeebabeeeabeeeeceabeabebbeabebaeebaebaabeeeeebaeebaebbeceabeebaabeeeebaabeabeeddddddddddddddddddddddddddddddddd
            dddddddddeeeeaaaaaadddddeaaaaaaaaaabbeabbbbeabeebbbbbabbaeebbaeecebbbbbabaeabebaeabbbbbabeeeeebaeabeeabeeeabeebbabeabbbaebaabeccdddddddddddddddddddddddddddddddd
            dddddddddddeedddddddddddeaaaaaaaaaabbeabeeeeabeebbeeeeeabbeeabbeeebaeeeebaeabebaeabeeeeabecccebaeabeeabeeeabeebbabebaebaebbbaecccddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeaaaaaaaaaabbeabeeeeabeeabeeeeeeabeeeabeeeabeeeebaeabebaeebaeeeabecccebaeebaebbeceabeebaababeebaeabbaeccccdddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeaaaaaaaaabbbeabeeceabeeebbbbabbbaebbbaeceebbbbebaeabeabbeabbbaabeccceabbeabbbaeceabbbbeabebbbbaeebbeccccddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeaaaaaaaaabbbeeeecceeeeceeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeecceabeeeeeeeeeeeeeebaeccccddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeaaaaaaaabbbbbbecccccecccceeeceeecceeecccccceeeceeccecceeccceeceeccccdceecceeeccceabeeccceceeeeeeabaeccccddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddeeaaaaaaabbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccdddccccccccceabeccccccccccebbaeccccdddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddeaaaaaaaabbbbbbbcccaaacccccccccccccccccccdddcccccccccccccccccccccccdddddcccccccceeeecccccccccceeeecccccdddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddeeaaaaaaabbbbbbbbaaaaaddddddddcccccddccdddddddeeaaaaabbbbbbbaaaccddddddddddddccddddcccccddddccccccccccddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddeaaaaaaaaabbbaaaaaaaadddddddddddddddddddddddddeeaaaaabbbbbaaaaaaddddddddddddddddddccccddddddddddcccccddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddeeaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddeeaaaaaabbaaaaaaaaddddddddddddddddddddcddddddddddddccddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddeaaaaaaaaaaaaaaaaadddddddddddddddddddddddddddeeaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddeaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddddeeeaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddeeaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddeeaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddeeeeaaaaaaaaaadddddddddddddddddddddddddddddddddeeeaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddeeeeaaaaddddddddddddddddddddddddddddddddddddddddeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddddeedddeeddddddddddeeedddddddddeeeddddddddddddddeedddeeedeeeeddddddddddddddeeeddddddddddceedddddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddd877ede778ddddddddde78dddddddd877778ddddddddddd877ede778e7e78edddddddddddde87edddddddde87778edddddddddddddde
            edddddddddddddddddddddddddddddddddddddddddddddddddddd877ede778eeeeeddeee78eeeedddd87ee87eeddeeeeddd877ede778eee78eeeeeeeeeeddee87eeeeeddde87eeeeeeeeeeddeeeeeeee
            edddddddddddddddddddddddddddddddddddddddddddddddddddd8778e8778e7778ee77778e7778cdd87ee8787ee7787edd8778e877887e78e78e777887ee7787e7777edde78eeee877787ee7877778e
            eeddddddddddddddddddddddddddddddddddddddddddddddddddd8777e7778eee87e87e87887e87edd87777e87ee7887edd8777e777887e7878eeee8787ee7887eeee78dde78edde87ee87ee78ee87ee
            eeddddddddddddddddddddddddddddddddddddddddddddddddddd8787e7878e7777e78ee7877777edd87ee87e7887eeeedd8787e787887e777eee7777e7887e87e77778dde78edde87ee87ee78ee78ee
            eeedddddddddddddddddddddddddddddddddddddddddddddddddd87e787e7877e87e78ee7878eeeedd87ee8788777eeeddd87e787e7887e7778e77e87e8777e8787ee78dde78edde87ee87ee78e77ece
            eeedddddddddddddddddddddddddddddddddddddddddddddddddd87e878e7877e87e87e87887eeeedd87ee87ee778eeeedd87e878e7887e7887e77e87ee778e8787e878dde87eeee87ee87ee7887eeee
            eeeeddddddddddddddddddddddddddddddddddddddddddddddddd87e878e7887777ee77778e7777edd877778ee77ee87edd87e878e7887e78e7787777ee77ee87e77778ddde7777887eee7777877778e
            eeeeeddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeee77eeeeeddeeeeeeeeeeeeeeeeeeeeeeee77eeeeeeeeeedddeeeeeeeeedeeeeeeeeeeee
            eeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeee78cddcddddddddddddddddddddddddeee78cddddddddddddddddddddddddddddeeeeee
            eeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde877edddddddddddddddddddddddddddde877edddddddddddddddddddddddddddeeeeeeee
            eeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeddddddddddddddddddddddddddddddeeeddddddddddddddddddddddddddeeeeeeeeee
            `],
        500,
        true
        )
    }
}
function LevelOne () {
    GameLoad = false
    scene.setBackgroundColor(13)
    tiles.setCurrentTilemap(tilemap`level1tillemap`)
    PlayerAlien()
    Points()
    EnemyOne()
    EnemyTwo()
    music.setVolume(14)
    music.play(music.createSong(hex`00fa0004080a0106001c00010a006400f401640000040000000000000000000000000000000002f00000000400011d08000c00012010001400011d18001c00012020002400011d28002c00012030003400011d38003c00012040004400011d48004c00012250005400011e58005c00012260006400011e68006c00012270007400011e78007c00012280008400011e88008c00012290009400011e98009c000122a000a4000125a800ac000122b000b400011eb800bc000122c000c400011dc800cc000120d000d400011dd800dc000120e000e400011de800ec000120f000f400011df800fc00012000010401011d08010c01012010011401012418011c01012020012401011b28012c01011d30013401012038013c01011b`), music.PlaybackMode.LoopingInBackground)
    GameLoad = true
}
function EnemyMovement3 () {
    timer.background(function () {
        pathLoop5 = TilemapPath.create_path([
        tiles.getTileLocation(7, 5),
        tiles.getTileLocation(4, 5),
        tiles.getTileLocation(1, 6),
        tiles.getTileLocation(3, 11),
        tiles.getTileLocation(5, 7),
        tiles.getTileLocation(4, 3),
        tiles.getTileLocation(1, 1),
        tiles.getTileLocation(7, 3),
        tiles.getTileLocation(1, 3),
        tiles.getTileLocation(1, 8),
        tiles.getTileLocation(2, 11),
        tiles.getTileLocation(4, 9),
        tiles.getTileLocation(7, 5)
        ])
        TilemapPath.follow_path(myEnemy5, pathLoop5, 75)
    })
    timer.background(function () {
        pathLoop6 = TilemapPath.create_path([
        tiles.getTileLocation(8, 5),
        tiles.getTileLocation(11, 5),
        tiles.getTileLocation(11, 3),
        tiles.getTileLocation(14, 1),
        tiles.getTileLocation(10, 2),
        tiles.getTileLocation(8, 3),
        tiles.getTileLocation(14, 3),
        tiles.getTileLocation(14, 6),
        tiles.getTileLocation(11, 5),
        tiles.getTileLocation(10, 9),
        tiles.getTileLocation(12, 11),
        tiles.getTileLocation(14, 11),
        tiles.getTileLocation(14, 8),
        tiles.getTileLocation(10, 9),
        tiles.getTileLocation(10, 6),
        tiles.getTileLocation(8, 5)
        ])
        TilemapPath.follow_path(myEnemy6, pathLoop6, 75)
    })
    pathLoop7 = TilemapPath.create_path([
    tiles.getTileLocation(8, 6),
    tiles.getTileLocation(7, 6),
    tiles.getTileLocation(8, 5),
    tiles.getTileLocation(9, 5),
    tiles.getTileLocation(10, 9),
    tiles.getTileLocation(4, 9),
    tiles.getTileLocation(4, 12),
    tiles.getTileLocation(6, 11),
    tiles.getTileLocation(9, 11),
    tiles.getTileLocation(11, 12),
    tiles.getTileLocation(12, 11),
    tiles.getTileLocation(13, 12),
    tiles.getTileLocation(14, 14),
    tiles.getTileLocation(1, 14),
    tiles.getTileLocation(2, 12),
    tiles.getTileLocation(4, 11),
    tiles.getTileLocation(6, 12),
    tiles.getTileLocation(9, 13),
    tiles.getTileLocation(10, 9),
    tiles.getTileLocation(5, 9),
    tiles.getTileLocation(5, 6),
    tiles.getTileLocation(6, 6),
    tiles.getTileLocation(8, 6)
    ])
    TilemapPath.follow_path(myEnemy7, pathLoop7, 75)
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, myAlien)
    myAlien.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 5 5 8 8 8 f . . . . 
        . . . 8 5 5 6 6 6 6 8 8 f . . . 
        . . . 8 5 f f 6 6 f f 8 f . . . 
        . . . 8 5 6 6 5 5 6 6 8 f . . . 
        . . . 8 5 5 5 6 5 8 8 8 f . . . 
        . . . . 8 8 5 6 5 8 f f . . . . 
        . . . . . f f 8 8 f f . . . . . 
        . . . . e d e 5 6 e e f . . . . 
        . . . e d d e e e e e e f . . . 
        . . . e d d e e e e e e f . . . 
        . . . f 5 6 e e e e 6 8 f . . . 
        . . . . f f 7 8 7 8 f f . . . . 
        . . . . . f 7 8 7 8 f . . . . . 
        . . . . . f e f e f f . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myAlien,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 6 6 8 8 8 f . . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . 8 f 5 5 5 6 6 8 8 f . . . 
        . . . 8 5 5 5 5 6 6 8 8 f . . . 
        . . . 8 6 5 5 6 6 8 8 8 f . . . 
        . . . . 8 8 6 6 8 8 f f . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . f f d d e f . . . . . 
        . . . . f 5 d d e e f 6 . . . . 
        . . . . f 6 d e e e f 8 . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . f 7 8 8 8 8 f . . . . . 
        . . . . f 7 8 f 8 8 f . . . . . 
        . . . . f e f f e f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 6 6 8 8 8 f . . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . 8 f 5 5 5 6 6 8 8 f . . . 
        . . . 8 5 5 5 5 6 6 8 8 f . . . 
        . . . 8 6 5 5 6 6 8 8 8 f . . . 
        . . . . 8 8 6 6 8 8 f f . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . f e d d e f . . . . . 
        . . . . . f e d d e f . . . . . 
        . . . . . f e d d e f . . . . . 
        . . . . . f e 5 6 e f . . . . . 
        . . . . . . f 7 8 f . . . . . . 
        . . . . . . f 7 8 f . . . . . . 
        . . . . . . f e f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 6 6 8 8 8 f . . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . 8 f 5 5 5 6 6 8 8 f . . . 
        . . . 8 5 5 5 5 6 6 8 8 f . . . 
        . . . 8 6 5 5 6 6 8 8 8 f . . . 
        . . . . 8 8 6 6 8 8 f f . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . f f d d e f . . . . . 
        . . . . 6 f e e d d 5 . . . . . 
        . . . . 8 f e e e d 6 . . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . f 7 8 8 8 8 f . . . . . 
        . . . . f 7 8 f 8 8 f . . . . . 
        . . . . f e f f f e f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 6 6 8 8 8 f . . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . 8 f 5 5 5 6 6 8 8 f . . . 
        . . . 8 5 5 5 5 6 6 8 8 f . . . 
        . . . 8 6 5 5 6 6 8 8 8 f . . . 
        . . . . 8 8 6 6 8 8 f f . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . f e d d e f . . . . . 
        . . . . . f e d d e f . . . . . 
        . . . . . f e d d e f . . . . . 
        . . . . . f e 5 6 e f . . . . . 
        . . . . . . f 7 8 f . . . . . . 
        . . . . . . f 7 8 f . . . . . . 
        . . . . . . f e f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 6 6 8 8 8 f . . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . 8 f 5 5 5 6 6 8 8 f . . . 
        . . . 8 5 5 5 5 6 6 8 8 f . . . 
        . . . 8 6 5 5 6 6 8 8 8 f . . . 
        . . . . 8 8 6 6 8 8 f f . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . f f d d e f . . . . . 
        . . . . f 5 d d e e f 6 . . . . 
        . . . . f 6 d e e e f 8 . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . f 7 8 8 8 8 f . . . . . 
        . . . . f 7 8 f 8 8 f . . . . . 
        . . . . f e f f e f f . . . . . 
        `],
    200,
    true
    )
})
info.onScore(60, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    levelThree()
})
function EnemyFour () {
    myEnemy4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e . . f . . . . . . 
        . . . . . e . . . . f . . . . . 
        . . . . . e e . . f f . . . . . 
        . . . . . e e e f f f . . . . . 
        . . . . . e 1 1 e e f . . . . . 
        . . . . 1 1 1 1 1 e e e . . . . 
        . . e f 1 1 1 1 1 e e e f e . . 
        . . f . . 1 1 e e e e . . f . . 
        . f e f f e e e e e e f f e f . 
        . . . f . . e e e e . . f . . . 
        . . f f . . . . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy4, sprites.dungeon.purpleInnerSouthWest)
    path4 = TilemapPath.create_path([tiles.getTileLocation(8, 7), tiles.getTileLocation(8, 6), tiles.getTileLocation(8, 5)])
    TilemapPath.follow_path(myEnemy4, path4, 75)
}
info.onScore(30, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    levelTwo()
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, myAlien)
    myAlien.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 5 5 8 8 8 f . . . . 
        . . . 8 5 5 6 6 6 6 8 8 f . . . 
        . . . 8 5 f f 6 6 f f 8 f . . . 
        . . . 8 5 6 6 5 5 6 6 8 f . . . 
        . . . 8 5 5 5 6 5 8 8 8 f . . . 
        . . . . 8 8 5 6 5 8 f f . . . . 
        . . . . . f f 8 8 f f . . . . . 
        . . . . e d e 5 6 e e f . . . . 
        . . . e d d e e e e e e f . . . 
        . . . e d d e e e e e e f . . . 
        . . . f 5 6 e e e e 6 8 f . . . 
        . . . . f f 7 8 7 8 f f . . . . 
        . . . . . f 7 8 7 8 f . . . . . 
        . . . . . f e f e f f . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, myAlien)
    myAlien.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 5 5 8 8 8 f . . . . 
        . . . 8 5 5 6 6 6 6 8 8 f . . . 
        . . . 8 5 f f 6 6 f f 8 f . . . 
        . . . 8 5 6 6 5 5 6 6 8 f . . . 
        . . . 8 5 5 5 6 5 8 8 8 f . . . 
        . . . . 8 8 5 6 5 8 f f . . . . 
        . . . . . f f 8 8 f f . . . . . 
        . . . . e d e 5 6 e e f . . . . 
        . . . e d d e e e e e e f . . . 
        . . . e d d e e e e e e f . . . 
        . . . f 5 6 e e e e 6 8 f . . . 
        . . . . f f 7 8 7 8 f f . . . . 
        . . . . . f 7 8 7 8 f . . . . . 
        . . . . . f e f e f f . . . . . 
        `)
})
function EnemyFive () {
    myEnemy5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e . . f . . . . . . 
        . . . . . e . . . . f . . . . . 
        . . . . . e e . . f f . . . . . 
        . . . . . e e e f f f . . . . . 
        . . . . . e 1 1 e e f . . . . . 
        . . . . 1 1 1 1 1 e e e . . . . 
        . . e f 1 1 1 1 1 e e e f e . . 
        . . f . . 1 1 e e e e . . f . . 
        . f e f f e e e e e e f f e f . 
        . . . f . . e e e e . . f . . . 
        . . f f . . . . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy5, sprites.dungeon.purpleInnerSouthEast)
    path5 = TilemapPath.create_path([tiles.getTileLocation(7, 7), tiles.getTileLocation(7, 6), tiles.getTileLocation(7, 5)])
    TilemapPath.follow_path(myEnemy5, path5, 75)
}
function EnemyTwo () {
    myEnemy2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e . . f . . . . . . 
        . . . . . e . . . . f . . . . . 
        . . . . . e e . . f f . . . . . 
        . . . . . e e e f f f . . . . . 
        . . . . . e 1 1 e e f . . . . . 
        . . . . 1 1 1 1 1 e e e . . . . 
        . . e f 1 1 1 1 1 e e e f e . . 
        . . f . . 1 1 e e e e . . f . . 
        . f e f f e e e e e e f f e f . 
        . . . f . . e e e e . . f . . . 
        . . f f . . . . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy2, sprites.dungeon.purpleInnerSouthWest)
    path2 = TilemapPath.create_path([
    tiles.getTileLocation(8, 7),
    tiles.getTileLocation(8, 6),
    tiles.getTileLocation(8, 5),
    tiles.getTileLocation(9, 5)
    ])
    TilemapPath.follow_path(myEnemy2, path2, 75)
}
function EnemySix () {
    myEnemy6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e . . f . . . . . . 
        . . . . . e . . . . f . . . . . 
        . . . . . e e . . f f . . . . . 
        . . . . . e e e f f f . . . . . 
        . . . . . e 1 1 e e f . . . . . 
        . . . . 1 1 1 1 1 e e e . . . . 
        . . e f 1 1 1 1 1 e e e f e . . 
        . . f . . 1 1 e e e e . . f . . 
        . f e f f e e e e e e f f e f . 
        . . . f . . e e e e . . f . . . 
        . . f f . . . . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy6, sprites.dungeon.purpleInnerSouthWest)
    path6 = TilemapPath.create_path([tiles.getTileLocation(8, 7), tiles.getTileLocation(8, 6), tiles.getTileLocation(8, 5)])
    TilemapPath.follow_path(myEnemy6, path6, 75)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Point, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
    soundeffect = soundEffects.createSound(soundEffects.waveNumber(WaveType.Triangle), 500, 440, 440, 20, 0)
    soundeffect.playUntilDone()
})
function PlayerAlien () {
    myAlien = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 5 5 8 8 8 f . . . . 
        . . . 8 5 5 6 6 6 6 8 8 f . . . 
        . . . 8 5 f f 6 6 f f 8 f . . . 
        . . . 8 5 6 6 5 5 6 6 8 f . . . 
        . . . 8 5 5 5 6 5 8 8 8 f . . . 
        . . . . 8 8 5 6 5 8 f f . . . . 
        . . . . . f f 8 8 f f . . . . . 
        . . . . e d e 5 6 e e f . . . . 
        . . . e d d e e e e e e f . . . 
        . . . e d d e e e e e e f . . . 
        . . . f 5 6 e e e e 6 8 f . . . 
        . . . . f f 7 8 7 8 f f . . . . 
        . . . . . f 7 8 7 8 f . . . . . 
        . . . . . f e f e f f . . . . . 
        `, SpriteKind.Player)
    myAlien.setPosition(127, 23)
    controller.moveSprite(myAlien, 100, 100)
    scene.cameraFollowSprite(myAlien)
    info.setLife(1)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myAlien,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 6 6 8 8 8 f . . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . 8 5 5 5 5 6 6 8 f f . . . 
        . . . 8 5 5 5 5 6 6 8 8 f . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . . 8 8 6 6 8 8 f f . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . f e d d f f . . . . . 
        . . . . 6 f e e d d 5 f . . . . 
        . . . . 8 f e e e d 6 f . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . f 7 7 7 7 8 f . . . . 
        . . . . . f 7 7 f 7 8 f . . . . 
        . . . . . f e f f e f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 6 6 8 8 8 f . . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . 8 5 5 5 5 6 6 8 f f . . . 
        . . . 8 5 5 5 5 6 6 8 8 f . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . . 8 8 6 6 8 8 f f . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . f e d d e f . . . . . 
        . . . . . f e d d e f . . . . . 
        . . . . . f e d d e f . . . . . 
        . . . . . f e 6 5 e f . . . . . 
        . . . . . . f 7 8 f . . . . . . 
        . . . . . . f 7 8 f . . . . . . 
        . . . . . . f e f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 6 6 8 8 8 f . . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . 8 5 5 5 5 6 6 8 f f . . . 
        . . . 8 5 5 5 5 6 6 8 8 f . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . . 8 8 6 6 8 8 f f . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . f e d d f f . . . . . 
        . . . . . 5 d d e e f 6 . . . . 
        . . . . . 6 d e e e f 8 . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . f 7 7 7 7 8 f . . . . 
        . . . . . f 7 7 f 7 8 f . . . . 
        . . . . . f e f f e f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 6 6 8 8 8 f . . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . 8 5 5 5 5 6 6 8 f f . . . 
        . . . 8 5 5 5 5 6 6 8 8 f . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . . 8 8 6 6 8 8 f f . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . f e d d e f . . . . . 
        . . . . . f e d d e f . . . . . 
        . . . . . f e d d e f . . . . . 
        . . . . . f e 6 5 e f . . . . . 
        . . . . . . f 7 8 f . . . . . . 
        . . . . . . f 7 8 f . . . . . . 
        . . . . . . f e f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 6 6 8 8 8 f . . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . 8 5 5 5 5 6 6 8 f f . . . 
        . . . 8 5 5 5 5 6 6 8 8 f . . . 
        . . . 8 5 5 5 6 6 8 8 8 f . . . 
        . . . . 8 8 6 6 8 8 f f . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . f e d d f f . . . . . 
        . . . . 6 f e e d d 5 f . . . . 
        . . . . 8 f e e e d 6 f . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . f 7 7 7 7 8 f . . . . 
        . . . . . f 7 7 f 7 8 f . . . . 
        . . . . . f e f f e f f . . . . 
        `],
    200,
    true
    )
})
function EnemyMovement1 () {
    timer.background(function () {
        pathLoop2 = TilemapPath.create_path([
        tiles.getTileLocation(9, 5),
        tiles.getTileLocation(10, 9),
        tiles.getTileLocation(12, 9),
        tiles.getTileLocation(14, 8),
        tiles.getTileLocation(14, 12),
        tiles.getTileLocation(11, 13),
        tiles.getTileLocation(9, 13),
        tiles.getTileLocation(12, 5),
        tiles.getTileLocation(14, 1),
        tiles.getTileLocation(9, 3),
        tiles.getTileLocation(9, 5)
        ])
        TilemapPath.follow_path(myEnemy2, pathLoop2, 75)
    })
    pathLoop1 = TilemapPath.create_path([
    tiles.getTileLocation(5, 5),
    tiles.getTileLocation(1, 1),
    tiles.getTileLocation(7, 3),
    tiles.getTileLocation(1, 6),
    tiles.getTileLocation(3, 6),
    tiles.getTileLocation(5, 9),
    tiles.getTileLocation(3, 9),
    tiles.getTileLocation(2, 12),
    tiles.getTileLocation(1, 14),
    tiles.getTileLocation(6, 14),
    tiles.getTileLocation(4, 12),
    tiles.getTileLocation(5, 5)
    ])
    TilemapPath.follow_path(myEnemy1, pathLoop1, 75)
}
info.onScore(90, function () {
    music.stopAllSounds()
    game.gameOver(true)
    game.setGameOverEffect(true, effects.starField)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-3)
    music.stopAllSounds()
    music.setVolume(34)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Point)
    tiles.setCurrentTilemap(tilemap`level11`)
    scene.setBackgroundImage(img`
        ddddd1ddddd111111dddddddd111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111ddddddddddddddddddd1d1111
        edddd1eee1ddddddddeedeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeedeeee1e1eee1deedd1111
        e1e1eddee1eee1eedeeeddeeedeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeeeeddddddeeeeeeeeeeeeeeeeeeeeeeddeeeedeee1ee1eee1eddddde1e
        e1e11dedd1eee1eedeee1deeedeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeedeeeedeee1ee1eeeddddd1de1e
        ede1ddeeeddee1eedeee1deeedeeeeedddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeeedeeeedeee1ee1ddddeeedddd1e
        1d1111eee1ed11eedeee1deeedeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeedeeeedeee1eedd1edeeedddd11
        edee1edee1eeedd11eee1deeedeeeeeeeeeedddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeddeeeedeeeddddeeeddedddee1e
        edeededddeeee1ee11eeddeeedeeeeeeeeeeeeeddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeddddeeededddeedeeee1ddd1dede
        edeeded1ddee1eee1edddeeee1eeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddeeeeeeddde1deeddddddeeedeeedded1edde
        1d11dddeedde1eee1eedddeee1eeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddeeee1deedddeeddee1dddde1d11dd1
        edeeedeeeeddeeee1ee1eedde1eeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1dddde1ee1deeeddeeeddeeede
        edeeedeeee1ddee1eee1eeed11eeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1ddeee1eeedeeed1eeed1eeedd
        e1deedde11ee1de1eee1eeee1eeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1deee1eeeddddee11ed1eeddd
        11ddddd1eeeee1deee1eeee1eeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1eeee1eeedddeeee1d111d11
        e1deeedeeeeee1dde1eeeee1eeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1eeeee1eeddeeeeeedeeed1e
        e1eeeedeeeee1eedd1eeee1eeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1eeee1edde1eeeeedeeed1e
        11eeedddee11eee1deeee1eeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1eeeeddeee11eeddeeeed1
        eddddd1d11eeeee1deeee1eeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1eeedd1eeeee11d11111de
        edeeeeedeeeee11ee1ee1eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1eedee11eeeeddeeeeede
        edeeeeedeeee1eeeee1e1eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1eddeeee1eeed1eeeedde
        edeeeeedd111eeeeeee11eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11edeeeee11dd1eeeed1e
        1d111111deeeeeeeee111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111ddeeeeeed111111d11
        edeeeeeeddeeeeee11eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1ddeeeeed1eeeeed1e
        e1eeeeee1deeee11eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddeed1eeeeed1e
        e1eeeeee1dee11eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1dddddeeeeed1e
        e1eeee1111d1eeeddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111dddddddde
        e11111eeeeddddddeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddd1111dd
        1eeeeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeee1
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeededeeeeeeeeeeeeeeeee
        edddeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeee
        eeeedddeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeededeeeeeeeeeeeeeeeee
        eeeeeeeddeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeedeeeeeeeeeeeeeeeee
        eeeeeeeeedeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeedeeeeeeeeeeeeeeee
        eeeeeeeeeedeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeedeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeeeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeddeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeedeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddeeeeeeeeedeeeeeeeeeeeeeeee
        eeeeeeeeeeeeedeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeedeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeedeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeedeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeddeeeeeeeeeeedeeeeeeeeeeeeeeeeeeedeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeedddeeeeeeeeedeeeeeeeeeeeeeeeeeededeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeddeeeeeeeedeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeddeeeeeeedeeeeeeeeeeeeeeeddeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeedddeeeeedeeeeeeeeeeeeedeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeddddeedeeeeeeeeeeedeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeedddddeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeededdddeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeee1
        1eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeede
        ddddddeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddde
        e1eeeddd1111eeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1dddddeeeddee
        e1eeeeeedeee11eeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddedeeeeeedee
        e1eeeeeeddeeee11eeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddeeeeedeeeeeedee
        e1eeeeeededdddde11eeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeedd1eeeeeeedeeeeeedee
        dddddddddeeeeeeddd111eeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeeeeeeeeeeeeeeeeeeeeeeee1ddeeeeeeeeed111111d1e
        e1eeeeede111eeeeeddddeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1deeeeeee111d1eeeeede1
        e1eeeeedeeee1eeedd1edddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1ddeeeee1eeeddeeeeedee
        e1eeeeedeeeee11ed1ee1deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1dd1ee11eeeeedeeeeedee
        e1dddd1d11eeeeeddeeee1deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1dddd11eeeee11d11111dee
        ddeeeedeee11eedddeeee1ddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1deedd1eee11eeedeeeed1e
        e1eeeedeeeee1ed1d1eeee1deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1ddee1edde1eeeeedeeed1e1
        ddddeedeeeeedddeedeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1deeee1eeddeeeeeedeeed1ee
        1111d1d1eeedd1deeddeeee1deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeee1eee1ddeeeddddddd11e
        e1eeedee11dd1ed1eed1eeee1deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeee1eee1dedddddeddeedde1
        e1ddddeeedd1eed1eeedeeee1ddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed1deeee1eeeddedddeeeedeeddee
        ddeed1eedd11eede1eedeedddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed1dd1ee1ee1deee1ddeeedded1ee
        1111d11dd1ee1eed1eedddeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedd1eddd1eee1dee1ee1de11d1d11e
        e1ed1eed1eee1eed1edd1eeeedddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeede1eeddd11eddee1eeeddeeddd1e1
        e1ed1edd1eeee1ed1ded1eeee1ddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeede1eeee1ddddee1eeee1dee1dd1ee
        e1ed1dddd1eee1dddeeddeeee1ddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeede1eeee1eddd111eee1eede1dedee
        11d1ddeed1dddded1eeedeeee1ddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeede1eeee1eeedddd11e1eed11d1d1e
        edddd1eedddee1ed1eeedeeee1dddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed1eeee1eee1eedddd1eeededddd1
        e1dd11edd1eee1ed1eeedeeeeddedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed1eeee1eee1ee1eedddded11d1de
        11edddded1eee1ed1eeedeeeededdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed1eeee1eee1ee1eee1edd1d1d1de
        dddd11eee1eee1edeeeedeeeddedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed1eedddeeee1eddddddedd11dd11
        1dddddddddddddddddddddd1d1ddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1dddd11dddddddd1111ddddd11111
        `)
    game.setDialogFrame(img`
        ..................................................................
        ............fff........fff.............fff..............ffff......
        ...........f11bf......fb1bf...........fb1bf............fb11f......
        ...........f11bbf.....f111ffff........f111ffff...fff..ff11bff.....
        ...........f1111ffffffb111b11bffffffffb111b11bffff11ff111111f.....
        ...fff....f11111f11111111bb11111111111111bb111111f11111bcc11f.....
        .fff11f..f11ffff1111111111bb11111111111111bb11111ffb11bb11ff......
        .f1b11fff11fff111fffffb111b11bffffffffb111b11bfff7f11ccb11f.......
        .f111c1111ff7ffff77777fb1bf11f77777777fb1bf11f7777fffc1111f.......
        .fb11c1111f777777777777fffffff777777777fffffff7777777f11111f......
        ..ff1bbb11f777777777777777777777777777777777777777777fffff11f.....
        ...f11bc11f7777777777777777777777777777777777777777777777ff11fff..
        ....f11ccff77777777777777777777777777777777777777777777777ff1111f.
        ....f111f777777777777777777777777777777777777777777777777fff1111f.
        ...f11b1f777777777777777777777777777777777777777777777777f1f11bbf.
        ...f11fff777777777777777777777777777777777777777777777777f1f11bf..
        ...ffff77777777777777777777777777777777777777777777777777f11fff...
        ....f11f77777777777777777777777777777777777777777777777777f11f....
        ....f11f77777777777777777777777777777777777777777777777777f11f....
        ....f11f77777777777777777777777777777777777777777777777777f11f....
        ...fb11bff777777777777777777777777777777777777777777777777f11f....
        ...f11111f777777777777777777777777777777777777777777777777f11f....
        ...f11b11f77777777777777777777777777777777777777777777777fb11bff..
        ..ffbbbbff7777777777777777777777777777777777777777777777fb11111bf.
        .fb11b11bf7777777777777777777777777777777777777777777777f1111111f.
        .f1111111f7777777777777777777777777777777777777777777777fb11b11bf.
        .fb11111bf7777777777777777777777777777777777777777777777ffbbbbff..
        ..ffb11bf77777777777777777777777777777777777777777777777f11b11f...
        ....f11f777777777777777777777777777777777777777777777777f11111f...
        ....f11f777777777777777777777777777777777777777777777777ffb11bf...
        ....f11f77777777777777777777777777777777777777777777777777f11f....
        ....f11f77777777777777777777777777777777777777777777777777f11f....
        ....f11f77777777777777777777777777777777777777777777777777f11f....
        ....f11f77777777777777777777777777777777777777777777777777f11f....
        ....f11f77777777777777777777777777777777777777777777777777f11f....
        ....f11f77777777777777777777777777777777777777777777777777f11f....
        ...fb11bff777777777777777777777777777777777777777777777777f11f....
        ...f11111f777777777777777777777777777777777777777777777777f11f....
        ...f11b11f77777777777777777777777777777777777777777777777fb11bff..
        ..ffbbbbff7777777777777777777777777777777777777777777777fb11111bf.
        .fb11b11bf7777777777777777777777777777777777777777777777f1111111f.
        .f1111111f7777777777777777777777777777777777777777777777fb11b11bf.
        .fb11111bf7777777777777777777777777777777777777777777777ffbbbbff..
        ..ffb11bf77777777777777777777777777777777777777777777777f11b11f...
        ....f11f777777777777777777777777777777777777777777777777f11111f...
        ....f11f777777777777777777777777777777777777777777777777ffb11bf...
        ....f11f77777777777777777777777777777777777777777777777777f11f....
        ....f11f77777777777777777777777777777777777777777777777777f11f....
        ....f11f77777777777777777777777777777777777777777777777777f11f....
        ...fff11f77777777777777777777777777777777777777777777777777ffff...
        ..fb11f1f777777777777777777777777777777777777777777777777fff11f...
        .fbb11f1f777777777777777777777777777777777777777777777777f1b11f...
        .f1111fff777777777777777777777777777777777777777777777777f111f....
        .f1111ff77777777777777777777777777777777777777777777777ffcc11f....
        ..fff11ff7777777777777777777777777777777777777777777777f11cb11f...
        .....f11fffff777777777777777777777777777777777777777777f11bbb1ff..
        ......f11111f7777777fffffff777777777fffffff777777777777f1111c11bf.
        .......f1111cfff7777f11fb1bf77777777f11fb1bf77777ffff7ff1111c111f.
        .......f11bcc11f7fffb11b111bffffffffb11b111bfffff111fff11fff11b1f.
        ......ff11bb11bff11111bb11111111111111bb1111111111ffff11f..f11fff.
        .....f11ccb11111f111111bb11111111111111bb11111111f11111f....fff...
        .....f111111ff11ffffb11b111bffffffffb11b111bffffff1111f...........
        .....ffb11ff..fff...ffff111f........ffff111f.....fbb11f...........
        ......f11bf............fb1bf...........fb1bf......fb11f...........
        ......ffff..............fff.............fff........fff............
        ..................................................................
        `)
    game.showLongText("GAME OVER      Press SPACE to restart", DialogLayout.Center)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, myAlien)
    myAlien.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 5 5 8 8 8 f . . . . 
        . . . 8 5 5 6 6 6 6 8 8 f . . . 
        . . . 8 5 f f 6 6 f f 8 f . . . 
        . . . 8 5 6 6 5 5 6 6 8 f . . . 
        . . . 8 5 5 5 6 5 8 8 8 f . . . 
        . . . . 8 8 5 6 5 8 f f . . . . 
        . . . . . f f 8 8 f f . . . . . 
        . . . . e d e 5 6 e e f . . . . 
        . . . e d d e e e e e e f . . . 
        . . . e d d e e e e e e f . . . 
        . . . f 5 6 e e e e 6 8 f . . . 
        . . . . f f 7 8 7 8 f f . . . . 
        . . . . . f 7 8 7 8 f . . . . . 
        . . . . . f e f e f f . . . . . 
        `)
})
function Points () {
    for (let index = 0; index < 30; index++) {
        myPoint1 = sprites.create(assets.tile`myTile`, SpriteKind.Point)
        tiles.placeOnRandomTile(myPoint1, assets.tile`myTileTurning`)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myAlien,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 5 5 8 8 8 f . . . . 
        . . . 8 5 5 6 6 6 6 8 8 f . . . 
        . . . 8 5 f f 6 6 f f 8 f . . . 
        . . . 8 5 6 6 5 5 6 6 8 f . . . 
        . . . 8 5 5 5 6 5 8 8 8 f . . . 
        . . . . 8 8 5 6 5 8 f f . . . . 
        . . . . . f f 8 8 f f . . . . . 
        . . . . e d d 5 6 e e f . . . . 
        . . . e d d e e e e e e f . . . 
        . . . f 5 6 e e e e e e f . . . 
        . . . f 5 6 e e e e 6 f . . . . 
        . . . . f f 7 8 7 8 f . . . . . 
        . . . . . . f f 7 8 f . . . . . 
        . . . . . . . . e f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 f f f . . . . . 
        . . . . 8 5 5 5 8 8 8 f . . . . 
        . . . 8 5 5 6 6 6 6 8 8 f . . . 
        . . . 8 5 f f 6 6 f f 8 f . . . 
        . . . 8 5 6 6 5 5 6 6 8 f . . . 
        . . . 8 5 5 5 6 5 8 8 8 f . . . 
        . . . . 8 8 5 6 5 8 f f . . . . 
        . . . . . f f 8 8 f f . . . . . 
        . . . . f e e 5 6 d d f . . . . 
        . . . f e e e e e e d d f . . . 
        . . . f e e e e e e 6 5 f . . . 
        . . . . f 6 e e e e 6 5 f . . . 
        . . . . . f 8 7 8 7 f f . . . . 
        . . . . . f 8 7 f f . . . . . . 
        . . . . . f f e . . . . . . . . 
        `],
    300,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myPortal3`, function (sprite, location) {
    if (true) {
        myAlien.setPosition(29, 115)
        pause(100)
    }
})
function EnemySeven () {
    myEnemy7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e . . f . . . . . . 
        . . . . . e . . . . f . . . . . 
        . . . . . e e . . f f . . . . . 
        . . . . . e e e f f f . . . . . 
        . . . . . e 1 1 e e f . . . . . 
        . . . . 1 1 1 1 1 e e e . . . . 
        . . e f 1 1 1 1 1 e e e f e . . 
        . . f . . 1 1 e e e e . . f . . 
        . f e f f e e e e e e f f e f . 
        . . . f . . e e e e . . f . . . 
        . . f f . . . . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy7, sprites.dungeon.purpleInnerSouthWest)
    path7 = TilemapPath.create_path([tiles.getTileLocation(8, 7), tiles.getTileLocation(8, 6)])
    TilemapPath.follow_path(myEnemy7, path7, 75)
}
function EnemyMovement2 () {
    timer.background(function () {
        pathLoop4 = TilemapPath.create_path([
        tiles.getTileLocation(8, 5),
        tiles.getTileLocation(11, 5),
        tiles.getTileLocation(14, 3),
        tiles.getTileLocation(11, 1),
        tiles.getTileLocation(8, 3),
        tiles.getTileLocation(11, 3),
        tiles.getTileLocation(10, 7),
        tiles.getTileLocation(12, 9),
        tiles.getTileLocation(13, 12),
        tiles.getTileLocation(9, 13),
        tiles.getTileLocation(8, 11),
        tiles.getTileLocation(8, 9),
        tiles.getTileLocation(10, 7),
        tiles.getTileLocation(11, 5),
        tiles.getTileLocation(14, 3),
        tiles.getTileLocation(14, 11),
        tiles.getTileLocation(10, 12),
        tiles.getTileLocation(7, 11),
        tiles.getTileLocation(13, 14),
        tiles.getTileLocation(8, 5)
        ])
        TilemapPath.follow_path(myEnemy4, pathLoop4, 75)
    })
    pathLoop3 = TilemapPath.create_path([
    tiles.getTileLocation(7, 5),
    tiles.getTileLocation(4, 5),
    tiles.getTileLocation(3, 6),
    tiles.getTileLocation(4, 10),
    tiles.getTileLocation(6, 12),
    tiles.getTileLocation(7, 11),
    tiles.getTileLocation(4, 12),
    tiles.getTileLocation(3, 11),
    tiles.getTileLocation(1, 1),
    tiles.getTileLocation(5, 1),
    tiles.getTileLocation(7, 3),
    tiles.getTileLocation(4, 2),
    tiles.getTileLocation(4, 5),
    tiles.getTileLocation(7, 5)
    ])
    TilemapPath.follow_path(myEnemy3, pathLoop3, 75)
}
function Points3 () {
    for (let index = 0; index < 30; index++) {
        myPoint2 = sprites.create(img`
            . . . . . . . . . 
            . . a a a a . . . 
            . a 9 9 9 9 a . . 
            . c 7 1 1 9 9 a . 
            . c 7 7 9 9 9 a . 
            . c 7 7 9 9 9 a . 
            . . c 7 7 9 1 c . 
            . . . c c a a . . 
            . . . . . . . . . 
            `, SpriteKind.Point)
        tiles.placeOnRandomTile(myPoint2, assets.tile`myTileTurning`)
    }
}
function levelTwo () {
    music.stopAllSounds()
    GameLoad = false
    GameLoad2 = false
    scene.setBackgroundColor(13)
    tiles.setCurrentTilemap(tilemap`level2tilemap`)
    PlayerAlien()
    Points2()
    EnemyThree()
    EnemyFour()
    music.setVolume(14)
    music.play(music.createSong(hex`00fa0004080a0106001c00010a006400f401640000040000000000000000000000000000000002f00000000400011d08000c00012010001400011d18001c00012020002400011d28002c00012030003400011d38003c00012040004400011d48004c00012250005400011e58005c00012260006400011e68006c00012270007400011e78007c00012280008400011e88008c00012290009400011e98009c000122a000a4000125a800ac000122b000b400011eb800bc000122c000c400011dc800cc000120d000d400011dd800dc000120e000e400011de800ec000120f000f400011df800fc00012000010401011d08010c01012010011401012418011c01012020012401011b28012c01011d30013401012038013c01011b`), music.PlaybackMode.LoopingInBackground)
    GameLoad2 = true
}
let myPoint2: Sprite = null
let pathLoop3: TilemapPath.TilemapPath = null
let pathLoop4: TilemapPath.TilemapPath = null
let path7: TilemapPath.TilemapPath = null
let pathLoop1: TilemapPath.TilemapPath = null
let pathLoop2: TilemapPath.TilemapPath = null
let soundeffect: SoundBuffer = null
let path6: TilemapPath.TilemapPath = null
let path2: TilemapPath.TilemapPath = null
let myEnemy2: Sprite = null
let path5: TilemapPath.TilemapPath = null
let path4: TilemapPath.TilemapPath = null
let myEnemy4: Sprite = null
let myEnemy7: Sprite = null
let pathLoop7: TilemapPath.TilemapPath = null
let myEnemy6: Sprite = null
let pathLoop6: TilemapPath.TilemapPath = null
let myEnemy5: Sprite = null
let pathLoop5: TilemapPath.TilemapPath = null
let GameLoad = false
let TtileScreen: Sprite = null
let path3: TilemapPath.TilemapPath = null
let myEnemy3: Sprite = null
let path1: TilemapPath.TilemapPath = null
let myEnemy1: Sprite = null
let GameLoad3 = false
let GameLoad2 = false
let myAlien: Sprite = null
let myPoint1: Sprite = null
let Level = 0
Level = 0
TitleScreen()
Level = 1
forever(function () {
    if (GameLoad == true) {
        EnemyMovement1()
    }
})
forever(function () {
    if (GameLoad2 == true) {
        EnemyMovement2()
    }
})
forever(function () {
    if (GameLoad3 == true) {
        EnemyMovement3()
    }
})
