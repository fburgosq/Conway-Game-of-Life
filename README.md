# Game Of Life

To view this project online click next link [Online Version](http://www.yobsled.com/cnb/gameoflife/)

## Change Board Settings

In the file \php\GAMEOFLIFE\Board.php, you will find below property

    private $gridOpts = [ 
        'cols'          => 30, // board/grid columns
        'rows'          => 30,  // board/grid rows
        'seeds'         => 20, //number of seeds allowed, if -1 get as many seeds
        'strtRowSeed'   => 7,    //in which row start seeding (1 to rows)
        'strtColSeed'   => 7,    //in which col start seeding (1 to cols)
        'maxSeedRow'    => 6    //max seeds per row, if -1 get as many per row
    ];
