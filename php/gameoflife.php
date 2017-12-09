<?php

/**
 * set the Headers for CORS
 */
include('./header_cors.php');

/**
 * LOAD BOARD CLASS
 */
include('./GAMEOFLIFE/Board.php');

/**
 * Start the Board class and creates a new board
 */
$golGrid = new \GAMEOFLIFE\GOLBoard();
$newGrid = $golGrid->createBoard(); //create a new board & get the grid, based on ArrayOpts

/**
 * Start a session,
 * using a string ID, due angular test, in PROD MODE is not necessary
 */
session_id('gameoflife'); //comment this line in PROD MODE
session_start();
/**
 * open a session and store the GRID
 */
$_SESSION['GOL_GRID'] = $newGrid;

/**
 * returns the GRID data to Angular
 */
echo json_encode($newGrid);