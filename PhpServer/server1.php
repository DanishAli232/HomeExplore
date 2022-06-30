
<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

$em = $ps= "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
if(!empty($_POST['email'] || $_POST['password']))
{

    $em1 = $_POST['data1'];
$em = $_POST['email'];
$ps = $_POST['password'];
$servername = "localhost";
$username = "root";
$password = "";
$database = "HomeExplore";
$conn = mysqli_connect($servername, $username, $password,
$database);
if (!$conn) {
 die("Connection failed!");
}
$sql = "SELECT Email, Password FROM createaccount WHERE
Email='$em' && Password = '$ps'";

$result = mysqli_query($conn, $sql);
if(!$result) {
 echo "Error: " . mysqli_error($conn);
}
else {
$row = mysqli_fetch_assoc($result);
$match_em = $row["Email"];
$match_ps = $row["Password"];
if(!(strcasecmp($match_em, $em) && strcmp($match_ps,
$ps))) {
echo "Login Success!";

}
else {
echo "Incorrect Email or Password! $em1";
}
}
mysqli_close($conn);
}
else{
echo "Empty Email or Password!";
}
}
?>