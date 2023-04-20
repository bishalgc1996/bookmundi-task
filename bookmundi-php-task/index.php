<?php

$url = "http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml";

// Get the XML data from the URL
$xmlData = file_get_contents($url);

// Convert the XML data to a SimpleXMLElement object
$xml = new SimpleXMLElement($xmlData);

// Convert the SimpleXMLElement object to an array
$json = json_encode($xml, JSON_PRETTY_PRINT);

// Output the JSON data
echo $json;
