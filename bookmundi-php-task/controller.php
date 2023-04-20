<?php

// Check if the request method is POST.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  // Check if the required parameters are present.
  if (isset($_POST['id']) && isset($_POST['value'])) {

    // Validate the parameters.
    $id = filter_var($_POST['id'], FILTER_VALIDATE_INT);
    $value = filter_var($_POST['value'], FILTER_SANITIZE_STRING);

    // Check if the validation was successful.
    if ($id !== false && $value !== false) {

      // Perform some action with the validated parameters.
      // ...

      // Return the output in JSON format.
      $output = array('success' => true, 'message' => 'Action completed successfully.');
      echo json_encode($output);
    } else {

      // Validation failed. Return an error message in JSON format.
      $output = array('success' => false, 'message' => 'Invalid input parameters.');
      echo json_encode($output);
    }
  } else {

    // Required parameters are missing. Return an error message in JSON format.
    $output = array('success' => false, 'message' => 'Missing input parameters.');
    echo json_encode($output);
  }
} else {

  // Request method is not POST. Return an error message in JSON format.
  $output = array('success' => false, 'message' => 'Invalid request method.');
  echo json_encode($output);
}
