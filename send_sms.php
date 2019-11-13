<?php 
$basic  = new \Nexmo\Client\Credentials\Basic('b557a9cc', 'tfWWztkU6Nn8GgYM');
$client = new \Nexmo\Client($basic);

// $message = $client->message()->send([
//     'to' => '918460090186',
//     'from' => 'Nexmo',
//     'text' => 'Hello from Nexmo'
// ]);

try {
    $message = $client->message()->send([
        'to' => 9924546005,
        'from' => 'Laravel',
        'text' => 'A text message sent using the Nexmo SMS API'
    ]);
    $response = $message->getResponseData();

    if($response['messages'][0]['status'] == 0) {
        echo "The message was sent successfully\n";
    } else {
        echo "The message failed with status: " . $response['messages'][0]['status'] . "\n";
    }
} catch (Exception $e) {
    echo "The message was not sent. Error: " . $e->getMessage() . "\n";
}
?>