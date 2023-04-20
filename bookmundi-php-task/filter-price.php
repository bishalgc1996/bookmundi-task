<?php


function filterPrices(array $ids, array $prices, float $threshold): array
{
  $result = [];
  foreach ($prices as $key => $price) {
    if ($price > $threshold) {
      $result[$ids[$key]] = $price;
    }
  }
  return $result;
}

function getTotal(array $prices): float
{
  return array_sum($prices);
}


$ids = [1, 2, 3, 4, 5];
$prices = [10.99, 25.99, 7.99, 14.99, 30.99];

$filtered = filterPrices($ids, $prices, 15.0);
$total = getTotal($filtered);

print_r($filtered); // Outputs: Array ( [2] => 25.99 [5] => 30.99 )
echo "Total: $total"; // Outputs: Total: 56.98
