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
		if (strpos($url,'countriesadd') !== false || strpos($url,'countriesupdate') !== false) { 
		    echo "<script src='../js/select2.full.min.js'></script>";
			echo "<link rel='stylesheet' type='text/css' href='../css/select2.min.css'>";
		}
	?>

  </body>
</html>