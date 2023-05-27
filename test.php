<?php  
$name = $_POST['name'];
$phone_number = $_POST['phone_number'];
$fav_drinks = $_POST['fav_drinks'];
$fav_foods = $_POST['fav_foods'];
$thoughts = $_POST['thoughts'];
$post = $_POST['post_ig'];


$all .="$fav_drinks\
";
$all .="$fav_foods\
";
$all .="$thoughts\
";
$all .="$post\
";

$conn = new mysqli('localhost','root', '', 'db_xinxing');
if ($conn->connect_error) {
    die("connection failed:".$conn->connect_error);
    header("location: failed.html");
} else {
    $stmt = $conn->prepare("insert into form(name, phone_number, fav_drinks, fav_foods, thoughts, post_ig) values(?,?,?,?,?,?)");
    $stmt->bind_param("sissss", $name, $phone_number, $fav_drinks, $fav_foods, $thoughts, $post);
    $stmt->execute();
    header("location: success.html");


    /* tried to use fail to fail check whether or not the data gets to the database
    if(!empty($name) && !empty($phone_number) && !empty($fav_drinks) && !empty($fav_foods) && !empty($thoughts) && !empty($post)){
        if(mail($name,$phone_number,$all)){
            header("location: success.html");
        } else{
            header("location: failed.html");
        }
    }else{
        header("location : index.html");
    }
    */
    $stmt->close();
    $conn->close();
}






    
    
/*
$servername = "localhost";
$username = "username";
$password = "password";
$dbname ="database_name";

//create connection
$conn = new mysqli($servername, $username, $password, $dbname);

//check connection
if ($conn->connect_error) {
    die("connection failed:".$conn-> connect_error);
}

$sqlquery = "INSERT INTO table VALUES('John', 'Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
    echo "record inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
*/


?>




