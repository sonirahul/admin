<!-- /page content -->
<script src="../js/validator.min.js"></script>

<!-- validator -->
<script>
	// initialize the validator function
	validator.message.date = 'not a real date';

	// validate a field on "blur" event, a 'select' on 'change' event & a '.reuired' classed multifield on 'keyup':
	$('form')
			.on('blur', '*.required, input[required], input.optional, select.required', validator.checkField)
			.on('change', 'select.required, *.required', validator.checkField);
			
	$('.multi.required').on('keyup blur', 'input', function() {
		validator.checkField.apply($(this).siblings().last()[0]);
	});
	
	$('form').submit(function(e) {
		e.preventDefault();
		
		// added this condition for flags page.
		if (typeof $(this).attr("dontValidate") === 'undefined') {
			var submit = true;
			
			$("textarea.required").attr("required","required");
			for (instance in CKEDITOR.instances) {
				CKEDITOR.instances[instance].updateElement();
			}
			// evaluate the form using generic validaing
			if (!validator.checkAll($(this))) {
				submit = false;
			}

			if (submit) {

			this.action.value=actionUrl;
			this.submit();
			return true;
			}
		}
					//this.submit();

		//$("textarea.required").css("display","none");
		return false;
 });
</script>

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