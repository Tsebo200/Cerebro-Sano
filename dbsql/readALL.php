<?php

include 'db_connection.php';

$sql = "SELECT * FROM Doctors;";
$result = mysqli_query($conn, $sql);
$resultCheck = mysqli_num_rows($result);

if($resultCheck > 0){

    while($row = mysqli_fetch_assoc($result)){

        echo "
        
        <div class='patients-name-one'>
            <p class='p-name'><strong>Name: </strong>". $row['name'] ."</p>

            <p><strong>Age: </strong>". $row['age'] ."</p>

            <p><strong>Occupation: </strong>". $row['occupation'] ."</p>

        </div>
        
        
        ";

    }

} else {
    echo "<h1>No Data Found On DB</h1>";
}
