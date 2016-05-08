<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Mawaredhouse Admin</title>
    <!-- Bootstrap -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../css/font-awesome.min.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="css/custom.css" rel="stylesheet">
  <style type="text/css">
    a.site_title img {
      height: 50px;
    }
    </style>
  
  <script>
    function count(maxlimit,place)
        {
          if(place.value.length > maxlimit) place.value = place.value.substring(0,maxlimit);
        }
    //-------------------------------
    function checknum(strng,place) 
    {
      var stripped = strng.match(/^\d+$/);
        if (stripped==null) 
        {
        place.value='';
        }
    }
    //-------------------
    function checkMail(chmail)
    {
      var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!filter.test(chmail)) 
      {
        return false;
      }else{
        return true;
      }
    }

    //-------------------
  </script>
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a href="index.php" class="site_title"><img src="images/logo.png" /> <span>Mawared House</span></a>
            </div>

            <div class="clearfix"></div>

            <!-- menu profile quick info -->
            <div class="profile">
              <div class="profile_pic">
                <i class="fa fa-user fa-3x img-circle profile_img" aria-hidden="true" ></i>
              </div>
              <div class="profile_info">
                <span>Welcome,</span>
                <h2><?php echo $_SESSION['LoginAdminName'] ?></h2>
              </div>
            </div>
            <!-- /menu profile quick info -->

            <br />

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <h3>General</h3>
                <ul class="nav side-menu">
                  <li><a href="index.php?model=content&contentid=1&action=contentupdate" title="Manage Home"><i class="fa fa-home"></i> Home</a></li>
                  <li><a><i class="fa fa-cc-visa"></i> About Us<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="index.php?model=content&contentid=2&action=contentupdate" title="Manage Welcome ">Welcome</a>
                      </li>
                      <li><a href="index.php?model=content&contentid=3&action=contentupdate" title="Manage Philosophy ">Philosophy</a>
                      </li>
                      <li><a href="index.php?model=about" title="Manage Management Team">Management Team</a>
                      </li>
                      </li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-edit"></i>Strategic Business Units<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="index.php?model=content&contentid=4&action=contentupdate" title="Manage Visa Application Centres ">Visa Application Centres</a>
                      </li>
                      <li><a href="index.php?model=content&contentid=5&action=contentupdate" title="Manage Travel Club ">Travel Club</a>
                      </li>
                      <li><a href="index.php?model=content&contentid=6&action=contentupdate" title="Manage Al Rayes Travel Services ">Al Rayes Travel Services</a>
                      </li>
                      <li><a href="index.php?model=content&contentid=7&action=contentupdate" title="Manage Sanan Residential Project">Sanan Residential Project</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="index.php?model=countries" title="Manage Countries of Operation"><i class="fa fa-globe" aria-hidden="true"></i> Countries of Operation</a></li>
                  <li><a><i class="fa fa-file-image-o"></i> Gallery <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="index.php?model=gallary" title="Manage Our People ">Our People</a>
                      </li>
                      <li><a href="index.php?model=gallary2" title="Manage 5th Anniversary">5th Anniversary</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="index.php?model=news" title="Manage News"><i class="fa fa-newspaper-o"></i> News</a></li>
                  <li><a href="index.php?model=content&contentid=8&action=contentupdate" title="Manage Site Map"><i class="fa fa-sitemap"></i> Site Map</a></li>
                  <li><a href="index.php?model=content&contentid=9&action=contentupdate" title="Manage Contact Us"><i class="fa fa-phone"></i> Contact Us</a></li>
                  <li><a href="index.php?model=flags" title="Manage Flags"><i class="fa fa-flag"></i> Flags</a></li>
                  <li><a href="index.php?model=uploading" title="Manage Uploading"><i class="fa fa-upload"></i> Uploading</a></li>
                  <li><a href="index.php?model=mhf" title="Manage Shared Files"><i class="fa fa-file-text"></i> Shared Files</a></li>
                </ul>
              </div>
            </div>
            <!-- /sidebar menu -->
          </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">

          <div class="nav_menu">
            <nav class="" role="navigation">
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>

              <ul class="nav navbar-nav navbar-right">
                <li class="">
                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-user" aria-hidden="true" ></i> <?php echo $_SESSION['LoginAdminName'] ?>
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="index.php?model=changepwd" title="Change Password">  Change Password</a>
                    </li>
                    <li><a href="logout.php"><i class="fa fa-sign-out pull-right"></i> Log Out</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->


