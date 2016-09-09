<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
	<link  rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
</head>

<?php include "function.php";?>

<?php

$SQLforStaticContent="select * from static_content ";
$allStaticData=select_query($link,$SQLforStaticContent,0,0);

?>



<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th>S.no:</th>
			<th>Title</th>
			<th>English</th>
			<th>Arabic</th>
			<th>French</th>
		</tr>
	</thead>
	<tbody>
	<?php for($i=0;$i<count($allStaticData);$i++){?>
		<tr>
			<td><?php echo $allStaticData[$i]["id"] ?></td>
			<td><?php echo $allStaticData[$i]["title"] ?></td>
			<td><?php echo $allStaticData[$i]["en"] ?></td>
			<td><?php echo $allStaticData[$i]["ar"] ?></td>
			<td><?php echo $allStaticData[$i]["fr"] ?></td>
		</tr>
	<?php }?>
	</tbody>
</table>