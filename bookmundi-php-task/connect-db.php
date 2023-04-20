<?php

class ConnectDb
{

  private $db_host;
  private $db_name;
  private $db_user;
  private $db_password;
  private $db_connection;

  public function __construct($db_host, $db_name, $db_user, $db_password)
  {
    $this->db_host = $db_host;
    $this->db_name = $db_name;
    $this->db_user = $db_user;
    $this->db_password = $db_password;
  }

  private function connectToDatabase()
  {
    $this->db_connection = mysqli_connect($this->db_host, $this->db_user, $this->db_password, $this->db_name);
    if (mysqli_connect_errno()) {
      die("Failed to connect to database: " . mysqli_connect_error());
    }
  }

  public static function externalHelperFunction()
  {
    // This is an example of an external helper function that can be called outside the class.
    return "This is an example of an external helper function.";
  }

  private static function internalHelperFunction()
  {
    // This is an example of an internal helper function that can only be called inside the class.
    return "This is an example of an internal helper function.";
  }

  public function getOutput()
  {
    // Connect to the database.
    $this->connectToDatabase();

    // Call the internal helper function.
    $internal_output = self::internalHelperFunction();

    // Call the external helper function.
    $external_output = self::externalHelperFunction();

    // Close the database connection.
    mysqli_close($this->db_connection);

    // Return the output.
    return "Internal output: " . $internal_output . " External output: " . $external_output;
  }
}

$example = new ConnectDb("localhost", "bookmundi-test-db", "root", "root");
$output = $example->getOutput();
echo $output;
