<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">

		<?php
			$countFromDB=14;
			$boxes = intval($countFromDB/3);
			
			$widthEachBox = 2;
			$totalWidth = 12;
			$total = ($countFromDB + $boxes) * $widthEachBox;
			
			$multFactor = fmod($total,$totalWidth);
			$missingCount = 0;

			if ($multFactor == 0) {
				$multFactor = intval($total/$totalWidth);
			}

			else {
				$multFactor = intval($total/$totalWidth) + 1;
				$missingCount = intval((($totalWidth * $multFactor) - $total)/$widthEachBox);
			}
			$boxes = $missingCount + $boxes;

			//echo "count from db: $countFromDB total of $multFactor rows, and $boxes coloured boxes.";
			
			if ($boxes == 4) {
				$coloredBoxes=array("1:#ff5d72","10:#f1c824","14:#43c696","18:#45b1cc");
			}
			if ($boxes == 5) {
				$coloredBoxes=array("2:#ff5d72","5:#f1c824","7:#43c696","15:#45b1cc","18:#ff5d72");
			}
			if ($boxes == 6) {
				$coloredBoxes=array("2:#ff5d72","5:#f1c824","7:#43c696","10:#45b1cc","15:#f1c824","18:#43c696");
			}
			if ($boxes == 7) {
				$coloredBoxes=array("1:#ff5d72","5:#f1c824","8:#43c696","12:#45b1cc","13:#f1c824","15:#45b1cc","17:#43c696");
			}
			if ($boxes == 8) {
				$coloredBoxes=array("2:#ff5d72","4:#f1c824","6:#43c696","7:#45b1cc","9:#43c696","11:#ff5d72","14:#f1c824","16:#45b1cc");
			}
			
		?>
		<div class="row">
			<? 
			for ($i=0; $i<=7;$i++) {
				
				$var=explode (":",$coloredBoxes[$i]); ?>
				<div class="col-sm-2" style="background-color:<? echo "$var[1]"; ?>"><? echo "$var[0]"; ?></div>
			<?}?>
			
			
		</div>

</div>

</body>
</html>

