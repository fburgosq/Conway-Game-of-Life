<?php

header("Access-Control-Allow-Origin: *"); //any call is wellcome, FOR NOW
//header("Access-Control-Allow-Origin: http://localhost:4200");
//header("Access-Control-Allow-Origin: http://www.yobsled.com");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Auth-Token-Generic, Content-Type');    