<?php

/**
 * set the Headers for CORS
 */
include('./header_cors.php');

/**
 * LOAD GAME CLASS for GameOfLife
 */
include('./GAMEOFLIFE/GameOfLifeGame.php');

/**
 * Start a session,
 * using a string ID, due angular test, in PROD MODE is not necessary
 */
session_id('gameoflife'); //comment this line in PROD MODE
session_start();

/**
 * get the session stored for the GRID
 */
$currGrid = $_SESSION['GOL_GRID'];

/**
 * Start Populating the GameOfLife
 */
$golGame = new \GAMEOFLIFE\GameOfLifeGame($currGrid);

/**
 * Populate life in the Board / Grid
 */
$golGame->populateLife();

/**
 * Request New Grid, with new alives, deaths, neighbours, etc
 */
$newGrid = $golGame->requestGrid();
$_SESSION['GOL_GRID'] = $newGrid;

/**
 * returns the GRID data to Angular
 */
echo json_encode($newGrid);