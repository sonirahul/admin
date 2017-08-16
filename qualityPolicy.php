<?php include "header.php";?>
<?php
$SQLforCoo="select * from countries where countries_operation = 1 order by countries_title_en asc";
$allCooData=select_query($link,$SQLforCoo,0,0);
?>
<style type="text/css">


body{padding-bottom:0;padding-top:50px}
#qualityPolicyCon {
    box-shadow: 0 0 10px #aaa;
    margin:auto;
    margin-bottom: 10px;
    margin-top: 75px;
    padding-bottom: 1px;
    background-color: white;
}
#qualityPolicy {
        margin-bottom: 50px;
    }
#qpHeading {
    padding: 0 10px 0 5px;
    margin-bottom: 30px;
    border-bottom: 10px solid #f99f1c;
}
#qFooter {
    margin-top: 60px;
    overflow: auto;
}
#qFooter img{
    width: 100%;
}

body,.footer{background-color: #f0f0f0;}


@media only screen and (min-width : 320px) and (max-width:480px){

}

@media only screen and (min-width:360px) and (max-width: 480px){

}

@media only screen and (min-width:390px) and (max-width: 480px){
}

@media only screen and (min-width:410px) and (max-width: 480px){

}

@media only screen and (min-width:481px) and (max-width: 1199px){

}

@media only screen and (min-width:600px) and (max-width: 1199px){
    #qFooter>div{
        width: 40%;
    }
}

@media only screen and (min-width:768px) and (max-width: 1199px) {
    #qualityPolicy {
        margin: 20px;
    }
}

@media only screen and (min-width:992px) and (max-width: 1199px){
    #qualityPolicy {
        margin: 20px;
    }
}

@media only screen and (min-width:1200px) and (max-width: 1823px) {
    #qualityPolicy {
        margin: 20px;
    }
    #qFooter>div{
        width: 30%;
    }
}

@media only screen and (min-width:1824px){
    #qualityPolicy {
        margin: 20px;
    }
    #qFooter>div{
        width: 25%;
    }
}


</style>

<div id="qualityPolicyCon" class="container">
    <div id="qualityPolicy" class="section">
        <div id="qpHeading" class="row">
            <div class="col-sm-3 col-xs-6">
                <img class="img-responsive" src="./images/others/white-male-2064872_640.jpg" style="max-height: 150px;">
            </div>
            <div class="col-sm-offset-2 col-sm-7 col-xs-6">
                <h2 style="text-align: left; padding-top: 1em">Quality Policy </h2>
            </div>

        </div>
        <div id="qpBody" class="">

            <p>Mawared House is specialized in providing Visa application services, including biometric enrolment, for diplomatic missions.</p>

            <p>We are committed to:</p>
            <div style="padding-top: 25px; padding-left: 20px">
                <div class="slideanim row slide">
                    <div class="col-xs-2 col-md-1">
                        <i class="fa fa-telegram fa-lg fa-2x" aria-hidden="true"></i>
                    </div>
                    <div class="col-xs-10 col-md-11">
                        Providing excellent services to our valued clients by fulfilling their requirements and complying with the benchmark standard level agreements.
                    </div>
                </div>
                <div class="slideanim row slide" style="padding-top: 25px">
                    <div class="col-xs-2 col-md-1">
                        <i class="fa fa-telegram fa-lg fa-2x" aria-hidden="true" style="padding-top: 10px"></i>
                    </div>
                    <div class="col-xs-10 col-md-11">
                        Utilizing appropriate resources including skilled personnel & facilities for fulfilling client’s needs and customer expectations.
                    </div>
                </div>
                <div class="slideanim row slide" style="padding-top: 25px">
                    <div class="col-xs-2 col-md-1">
                        <i class="fa fa-telegram fa-lg fa-2x" aria-hidden="true" style="padding-top: 10px"></i>
                    </div>
                    <div class="col-xs-10 col-md-11">
                        Identify all major external and internal issues, risks and opportunities related to the Quality Management System and take steps to mitigate these issues & risks.
                    </div>
                </div>
                <div class="slideanim row slide" style="padding-top: 25px">
                    <div class="col-xs-2 col-md-1">
                        <i class="fa fa-telegram fa-lg fa-2x" aria-hidden="true" style="padding-top: 10px"></i>
                    </div>
                    <div class="col-xs-10 col-md-11">
                        Ensuring that all employees are competent and appropriately trained to provide the desired output expected out of them in order to improve operational efficiency and achieve customer satisfaction.
                    </div>
                </div>
                <div class="slideanim row slide" style="padding-top: 25px">
                    <div class="col-xs-2 col-md-1">
                        <i class="fa fa-telegram fa-lg fa-2x" aria-hidden="true"></i>
                    </div>
                    <div class="col-xs-10 col-md-11">
                        Striving for continual improvement in effectiveness of the established Quality Management System, demonstrated through setting and reviewing of Quality Objectives for all key functions.
                    </div>
                </div>
                <div class="slideanim row slide" style="padding-top: 25px">
                    <div class="col-xs-2 col-md-1">
                        <i class="fa fa-telegram fa-lg fa-2x" aria-hidden="true"></i>
                    </div>
                    <div class="col-xs-10 col-md-11">
                        Adhering to all relevant statutory and regulatory requirements.
                    </div>
                </div>
            </div>

        </div>
        <div id="qFooter" class="">
            <div class="pull-right">
                <img src="images/others/iso_logo.jpg">
            </div>
        </div>
    </div>
</div>

<?php include "footer.php";?>

<!-- navbar -->
<script type="text/javascript">
    $(function(){
        $(".nav-bar .identity").addClass("responsive");
        $(".nav-bar").css("position","fixed").fadeIn();
        $("section.nav-bar").addClass("hide-nav");
        $("#langForm").addClass("when-slided");
    });
</script>


</body>
</html>
