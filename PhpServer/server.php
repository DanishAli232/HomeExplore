<?php
 header('Access-Control-Allow-Origin: http://localhost:3000');
// define variables and set to empty values
$name = $email = $password = $gender = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  if(!empty($_POST['name'] && $_POST['email'] && $_POST['password'] && $_POST['re-enter']))
  {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $password1 = ($_POST["password"]);
  $reenter = ($_POST["re-enter"]);

  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "HomeExplore";
  $conn = mysqli_connect($servername, $username, $password, $database);
  if (!$conn) {
  die("Connection failed!");
  }
  $sql = "INSERT INTO createaccount(Name, Email, Password, ReenterPassword) VALUES ('$name','$email','$password1', '$reenter')";
  if (mysqli_query($conn, $sql)) {
  echo "New record inserted";
  } else {
  echo "Error: " . mysqli_error($conn);
  }
  mysqli_close($conn);
  }
  else {
    echo "Provide data to register!";
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}





// echo "<h2>Your Input:</h2>";
// echo $name;
// echo "<br>";
// echo $email;
// echo "<br>";
// echo $password;
// echo "<br>";
// echo $gender;

//     $user = $_POST['email'];
//     $user1 = $_POST['name'];
//     $user2 = $_POST['lastname'];
//     echo ("Hello from server: $user, $user1, $user2");

    
// Create Table

// $servername = "localhost";
// $username = "root";
// $password = "";
// $database = "HomeExplore";
// $conn = mysqli_connect($servername, $username, $password, $database);
// if (!$conn) {
//  die("Connection failed!");
// }
// $sql = "CREATE TABLE createaccount(ID INT AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(20) NOT NULL, Email VARCHAR(40), Password VARCHAR(40), ReenterPassword VARCHAR(20))";
// if (mysqli_query($conn, $sql)) {
//  echo "Table Created successfully";
// } else {
//  echo "Error creating table: " . mysqli_error($conn);}
// mysqli_close($conn);

    
// $servername = "localhost";
// $username = "root";
// $password = "";
// $database = "demo";
// $conn = mysqli_connect($servername, $username, $password,
// $database);
// if (!$conn) {
//  die("Connection failed!");
// }
// $sql = "INSERT INTO contact(text) VALUES ('$user')";

// if (mysqli_query($conn, $sql)) {
//  echo "new record inserted";
// } else {
//  echo "Error creating table: " . mysqli_error($conn);
// }
// mysqli_close($conn);
?>
