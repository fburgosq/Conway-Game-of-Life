<?php

namespace GAMEOFLIFE;

class GameOfLifeGame {

    private $maxCols; //Columns in the grid
    private $maxRows; //Rows in the grid

    private $grid = []; // Matrix for the grid / board
                        // possible values for each cell
                        //  => 0 for death cell
                        //  => 1 for live cell
    
    //All the comparisons, will be made on the original Grid
    //we keep a clean copy of the grid
    private $cloneGrid = [];

    /**
     * Define the rules to live | die
     */
    private $rules = [
        '0'    => [3],  //if cell is death, must have 3 neighbours to be alive
        '1'    => [2,3] //if cell is alive, must have 2 or 3 neighbours to keep alive
    ];

    public function __construct($grid) {
        $this->cloneGrid = $this->grid = $grid;

        $this->maxCols = count($this->grid[0]);
        $this->maxRows = count($this->grid);
    }

    /**
     * Check neighbours for a particular cell
     * 
     * @param $y int
     * @param $x int
     * 
     * @return int (number of alive neighbours)
     */
    private function checkNeighbours($y, $x) {
        $up = ($y > 0) ? $this->grid[$y-1][$x] : 0;
        $dw = ($y < ($this->maxRows-1)) ? $this->grid[$y+1][$x] : 0;
        $lf = ($x > 0) ? $this->grid[$y][$x-1] : 0;
        $rg = ($x < ($this->maxCols-1)) ? $this->grid[$y][$x+1] : 0;
        $uplf = (($y > 0) && ($x > 0)) ? $this->grid[$y-1][$x-1] : 0;
        $uprg = (($y > 0) && ($x < ($this->maxCols-1))) ? $this->grid[$y-1][$x+1] : 0;
        $dwlf = (($y < ($this->maxRows-1)) && ($x > 0)) ? $this->grid[$y+1][$x-1] : 0;
        $dwrg = (($y < ($this->maxRows-1)) && ($x < ($this->maxCols-1))) ? $this->grid[$y+1][$x+1] : 0;

        return $up + $dw + $lf + $rg + $uplf + $uprg + $dwlf + $dwrg;
    }

    /**
     * based on the current value of the cell (1 alive, 0 death)
     * if the rule is matched, cell remains alive or die or die-live
     * 
     * @param $dot int
     * @param $neighbours int
     * 
     * @return int
     */
    private function validateAlive($dot, $neighbours) {
        $strDot = strval($dot);

        return ((in_array($neighbours, $this->rules[$strDot])) === true) ? 1 : 0;
    }

    /**
     * Check the entire matrix, rows & cols,
     * and the relationship for each cell and its neighbours
     */
    private function checkNeighborhood() {

        for ($y=0; $y < $this->maxRows; $y++) {
            for ($x=0; $x < $this->maxCols; $x++) {
                
                $dot = $this->grid[$y][$x]; //get the `cell value` from the original Grid

                /**
                 * get how many alive neighbours this `cell` has
                 */
                $getNeighbours = $this->checkNeighbours($y, $x);

                /**
                 * validate if current `cell` keeps alive, or die, or keeps death
                 */
                $this->cloneGrid[$y][$x] = $this->validateAlive($dot, $getNeighbours);
            }
        }
    }

    /**
     * Populate life in the grid, based on the current RULES
     */
    public function populateLife() {
        $this->checkNeighborhood();
    }

    /**
     * Returns the Grid of the game of life
     * @return Array<number>
     */
    public function requestGrid() {
        return $this->cloneGrid;
    }

}

