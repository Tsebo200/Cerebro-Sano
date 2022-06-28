<?php

include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$first = $data->first;
$surname = $data->surname;
$age = $data->age;
$gender = $data->gender;
$contact = $data->contact;
$email = $data->email;
$password = $data->password;
$rank = $data->rank;

$passwordEncrypt = md5($password);

$sql = "INSERT INTO Receptionists (id, profileImage, name, surname, age, gender, phone, email, password, rank, userCreate) VALUES (NULL,'', '$first','$surname', '$age','$gender', '$contact','$email','$passwordEncrypt', '$rank',CURRENT_TIMESTAMP);";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Added user");
}

?>