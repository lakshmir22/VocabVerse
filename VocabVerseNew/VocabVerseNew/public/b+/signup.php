<?php
// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $firstname = $_POST['firstname'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Establish a database connection
    $db = new mysqli('localhost', 'root', '', 'mydb');

    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    } else {
        echo "Connected successfully!";
    }


    // Check the connection
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    } else {
        // Insert data into the database
        // $SELECT = "SELECT email From learners Where email = ? Limit 1";
        $sql = "INSERT INTO learners (firstname, email, password) VALUES (?, ?, ?)";
        $stmt = $db->prepare($sql);
        $stmt->bind_param("sss", $firstname, $email, $password);

        if ($stmt->execute()) {
            echo "Registered successful!";
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
        $db->close();
    }
}
?>
