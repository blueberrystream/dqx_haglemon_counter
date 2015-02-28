#!/bin/bash
apiurl=https://www.kimonolabs.com/api/csv/9pn2b9la?apikey=1a17768d2f8eca95b7f67fdc5d65c0b6
dest=/home/kid0725/temp/dqx_haglemon/count.csv
temp=/home/kid0725/temp/dqx_haglemon/temp.csv

echo -n "`date +%s`000," >> $dest
curl --silent --request GET $apiurl | sed -n 3p | sed -E 's/,//g' | sed -E 's/""/,/g' | sed -E 's/"//g' > $temp
php /home/kid0725/temp/dqx_haglemon/fill.php
cat $temp >> $dest
