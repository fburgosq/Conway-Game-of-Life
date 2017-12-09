<?php

namespace GAMEOFLIFE;

class GOLBoard {

    private $grid = []; // Matrix for the grid / board
                        // possible values for each cell
                        //  => 0 for death cell
                        //  => 1 for live cell
    
    private $gridOpts = [ 
        'cols'          => 30, // board/grid columns
        'rows'          => 30,  // board/grid rows
        'seeds'         => 20, //number of seeds allowed, if -1 get as many seeds
        'strtRowSeed'   => 7,    //in which row start seeding (1 to rows)
        'strtColSeed'   => 7,    //in which col start seeding (1 to cols)
        'maxSeedRow'    => 6,   //max seeds per row, if -1 get as many per row
        'automatic'     => true //if false, user will mark the live/death cells
    ];

    /**
     * Validate where to start seeding for row and column
     * 
     * @param $y int
     * @param $x int
     * 
     * @return boolean
     */
    private function validateStartSeeding($y, $x) {
        return (($y >= ($this->gridOpts['strtRowSeed']-1)) &&
                ($x >= ($this->gridOpts['strtColSeed']-1)));
    }

    /**
     * Validate the number of seeds allowed, if -1 will seed as many
     * 
     * @param $manySeeds int
     * 
     * @return boolean
     */
    private function validateAsManySeeds($manySeeds) {
        return (($this->gridOpts['seeds'] === -1) || 
                    (($this->gridOpts['seeds'] > 0) && ($manySeeds < $this->gridOpts['seeds'])));
    }

    /**
     * Validate the amount of seeds per row allowed
     * if -1, seeds as many
     * 
     * @param $maxSeedRow int
     * 
     * @return boolean
     */
    private function validateMaxSeedsPerRow($maxSeedRow) {
        return (($this->gridOpts['maxSeedRow'] === -1) ||
                (($this->gridOpts['maxSeedRow'] > 0) && ($maxSeedRow < $this->gridOpts['maxSeedRow'])));
    }

    /**
     * Create the board / grid of the Game of Life
     * using settings / options 
     * 
     * @return Array<number>
     */
    public function createBoard() {
        $manySeeds = 0;
        for ($y=0; $y < $this->gridOpts["rows"]; $y++){
            $maxSeedRow = 0;
            for ($x=0; $x < $this->gridOpts["cols"]; $x++){
                $dot = 0;

                if ($this->gridOpts['automatic']) {
                    if ($this->validateStartSeeding($y, $x)) {
                        if ($this->validateAsManySeeds($manySeeds)) {
                            if ($this->validateMaxSeedsPerRow($maxSeedRow)) {
                                $dot = rand(0,1);    
                                $manySeeds += $dot;
                                $maxSeedRow += $dot;
                            }
                        }                    
                    }
                }

                $this->grid[$y][$x] = $dot;
            }
        }

        return $this->grid;
    }

}
