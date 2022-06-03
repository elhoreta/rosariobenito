// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1000100001010101010101000001000000000000000000000000000000010101010100000000010100000000000000000001010101000001000101010101010100000000010100010101000000000001000001010101000000000000000000010000010001000001010101010100000100000100010000010000000001000001000001000100000100000000010000010000010000000001000000000101010100000100010101010000000000000000000101000000000000000000000000000001000000000001010101010000000000010100000000010000000101010000000001000000010100000000000100000000010001010100000000000001010101010100`, img`
2 2 2 2 2 2 2 . . 2 . . . . . . 
. . . . . . . . . 2 2 2 2 2 . . 
. . 2 2 . . . . . . . . . 2 2 2 
2 . . 2 . 2 2 2 2 2 2 2 . . . . 
2 2 . 2 2 2 . . . . . 2 . . 2 . 
2 2 . . . . . . . . . 2 . . 2 . 
2 . . 2 2 2 2 2 2 . . 2 . . 2 . 
2 . . 2 . . . . 2 . . 2 . . 2 . 
2 . . 2 . . . . 2 . . 2 . . 2 . 
. . . 2 . . . . 2 2 2 2 . . 2 . 
2 2 2 2 . . . . . . . . . 2 2 . 
. . . . . . . . . . . . . 2 . . 
. . . 2 2 2 2 2 . . . . . 2 2 . 
. . . 2 . . . 2 2 2 . . . . 2 . 
. . 2 2 . . . . . 2 . . . . 2 . 
2 2 2 . . . . . . 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.builtin.forestTiles5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
