<?php

use League\Csv\Reader;
use League\Csv\Statement;

$data = Reader::createFromPath('../../../football.csv','r');
$records = $data->process($data);
echo $records;