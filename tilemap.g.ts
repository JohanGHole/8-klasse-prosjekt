// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`2000080000000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000000000000000000700000000000000000000000000070707000000000000000000000000000000070000000000000007070700000000000000000000000007070000000000000007000000000000000000000000000000000000000000000000000000000000000701000006000300000400000003000005000600030000030006000300000003070202020202020202020202020202020202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . 2 
. . . . . . . 2 2 2 . . . . . . . . . . . . 2 2 . . . . . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.swamp.swampTile0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal,sprites.swamp.swampTile3,sprites.dungeon.floorLight0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTile":
            case "tile1":return tile1;
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
