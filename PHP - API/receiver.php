<?php

$v = json_decode(file_get_contents("php://input"),true);

$db = new PDO('mysql:host=4c25x.myd.infomaniak.com;dbname=4c25x_ogrimobile;port=3306', '4c25x_ogrimobile', 'Nokia331077420');
header('Access-Control-Allow-Origin: *');


var_dump($v["session_id"]);

$mail = $v["mail"];
$titre = $v["titre"];
$contenu = $v["contenu"];


$stmt = $db->query("INSERT INTO `contact`(`id`, `mail`, `titre`, `contenu`) VALUES ('',$mail,'$titre','$contenu')");
