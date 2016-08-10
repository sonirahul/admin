 <!-- footer content -->
        <!--<style>
		body { padding-bottom: 49px; }
		</style>
		
		<footer class="navbar-fixed-bottom">-->
		<footer>
          <div class="pull-right">
            <i class="fa fa-copyright" aria-hidden="true"></i><?php echo date("Y"); ?> All Copy Right Reserved for mawaredhouse.com
          </div>
          <div class="clearfix"></div>

        </footer>
		
        <!-- /footer content -->
      </div>
    </div>

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
    <!-- Bootstrap -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <!-- FastClick -->
    <script src="../js/fastclick.js"></script>
    <!-- NProgress -->
    <script src="../js/nprogress.js"></script>
    <!-- validator -->
	<script type="text/javascript" src="../js/datatables.js"></script>

    <!-- Custom Theme Scripts -->
    <script src="js/custom.js"></script>

	<?php 
		$url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
		if (strpos($url,'countriesadd') !== false) { 
		    echo "<script src='../js/select2.full.min.js'></script>";
			echo "<link rel='stylesheet' type='text/css' href='../css/select2.min.css'>";
		}
	?>

  </body>
</html>