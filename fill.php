<?php
$aim = array(1, 1, 1, 1, 1.5, 1.5, 1.5, 2, 2, 1);
$file = '/home/kid0725/temp/dqx_haglemon/temp.csv';
$counts = explode(',', file_get_contents($file));
for ($i = 0; $i < 10; $i++) {
	$counts[$i] = trim($counts[$i]);
	if (empty($counts[$i])) {
		$counts[$i] = $aim[$i] * 1000000;
	}
}
file_put_contents($file, implode(',', $counts)."\r\n");
