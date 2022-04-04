<?php

$db = new PDO('mysql:host=4c25x.myd.infomaniak.com;dbname=4c25x_ogrimobile;port=3306', '4c25x_ogrimobile', 'Nokia331077420');
header('Access-Control-Allow-Origin: *');
if (!isset($_GET["table"])){

    ?>

    <form action="" method="GET">
        <label for="table"><h2>Indiquer une table</h2></label>
        <input type="text" id="table" name="table">
    </form>

    <?php
} else {
    $table = $_GET["table"];

    if (isset($_GET["id"])){
        $id = $_GET["id"];
        $stmt = $db->query("SELECT * FROM $table WHERE $id = id");

        $result = $stmt -> fetch(PDO::FETCH_ASSOC);

        echo json_encode($result);

    }else{
        $stmt = $db->query("SELECT * FROM $table");

        $result = $stmt -> fetchAll(PDO::FETCH_ASSOC);

        if(isset($_GET["lang"])){
            $lang = $_GET["lang"];
            $trad_FR = [];
            $trad_EN = [];

            foreach ($result as $row){

                array_push($trad_FR, (object)[
                    $row["id"] => $row["texte_FR"],
                ]);

                array_push($trad_EN, (object)[
                    $row["id"] => $row["texte_EN"],
                ]);

            }
            // echo json_encode($trad_FR);
            // echo (${$trad_.${$lang}});

            // echo json_encode(${$trad_.${$lang}});

            if ($lang == "FR"){
                echo json_encode($trad_FR);
            }

        } else {
            echo json_encode($result);
        }


        
    }
}