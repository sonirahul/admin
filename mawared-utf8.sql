-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mawar_mawared
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `about`
--

DROP TABLE IF EXISTS `about`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `about` (
  `about_id` int(10) NOT NULL DEFAULT '0',
  `about_title_ar` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `about_title_en` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `about_jobtitle_ar` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `about_jobtitle_en` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `about_desc_ar` longtext COLLATE utf8_unicode_ci,
  `about_desc_en` longtext COLLATE utf8_unicode_ci,
  `about_image` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `about_team_type` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`about_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about`
--

LOCK TABLES `about` WRITE;
/*!40000 ALTER TABLE `about` DISABLE KEYS */;
INSERT INTO `about` VALUES (1, 'طارق الرشدان', 'Tareq Al Rashdan', 'الرئيس التنفيذي', 'Founder CEO', 'طارق الرشدان بدأ مسيرته مع الخطوط الجوية الكويتية في عام 1992 بعد حصولة على المؤهل العلمي في إدارة الأعمال من المملكة المتحدة. وقد كان له دور فعال في تنفيذ مشروع دناتا الكويت وكان مديرها العام حتى يوليو 2004. وقد قاده حبه للنمو إلى إنشاء شركته الخاصة في عام 2006 التي أصبح لها الآن دور عظيم في منطقة الشرق الأوسط وشمال أفريقيا في ظل قيادته ورؤيته الرشيدة. والسيد طارق له أساليب فريدة في إدارة الأعمال ومعه فريق أساسي والذي له دور القائد كما هو الآن.', 'Tareq Al Rashdan started his career with Kuwait Airways in 1992 armed with a degree in Business from UK. Moving on, he was instrumental in implementation of the Dnata Kuwait Project and was its General Manager till July 2004. His passion for growth led him to set up his own business in 2006 which has now set footprints in MENA region under his able leadership and vision . His unique ways in managing the business and his core team has made in the Leader as he is now.\r\n', 'Tareq_Al_Rashdan.jpg', 'management'),
(2, 'مشاري البنوان', 'Mishari A. Al Banwan', 'نائب الرئيس التنفيذي', 'Deputy CEO', 'بدأ مشاري البنوان حياته المهنية مع برنامج إعادة هيكلة القوى العاملة والجهاز التنفيذي كباحث في الإدارة في عام 2004. وهو الآن في مقدمة مركز الأعمال لشركة موارد هاوس، كما أنه يقود عملية التنمية في قسم الموارد البشرية في الكويت. وهو أيضا عضو منتخب في الجمعيات المحلية في الكويت ولديه اتصالات واسعة برؤساء الصناعة. ولديه خبرة ذات قيمة كبيرة، وهو يعد الوقود الذي يمد بالطاقة الجديدة لعمليات مركز الأعمال بالمجموعة.', 'Meshari Al Banwan started his career with Manpower Restructure and Development Authority as Management Researcher in 2004. He is now at the forefront of Mawared House&rsquo;s Business Centre concept and leads the Human Resources department in Kuwait. He&rsquo;s also an elected member of local Societies in Kuwait and has extensive connections with the industry heads. With invaluable experience,he fuels in new energy into the group&rsquo;s Business Centre operations.\r\n', 'Mishari_A._Al_Banwan.jpg', 'management'),
(3, 'كوشك جوش', 'Kaushik Ghosh', 'الرئيس التنفيذي للعمليات', 'Chief Operating Officer', 'هو عضو رئيسي في فريق الإدارة. ويقوم السيد/ كوشك بمعالجة كافة العمليات الخاصة بالشركة. وهو يشارك بنشاط في التخطيط للاستراتيجيات المستقبلية للنمو في هذه المنطقة، وإنشاء العلامة التجارية لشركة موارد هاوس.', 'As a key member of the Management team Kaushik handles the entire operations of the company . He is actively involved in planning future strategies for growth in this region and establishment of the brand of Mawared House. A Business Graduate, Kaushik brings his valuable experience from the Kuoni Travel Group and VFS Global Services from his earlier stints. He has more than a decade of experience across functions like Business Development, Projects Rollout and Operations which essentially enables him in creating value for Stakeholders at Mawared House.\r\n', 'Kaushik_Ghosh.jpg', 'management'),
(5, 'روزيل ديسوزا', 'Roselle Dsouza', 'مدير فرع، الكويت', 'Country Manager, Kuwait', 'إنني أستمتع بالعمل مع الأفراد هنا ولدينا إيمان قوي في أن عمل الفريق يحقق المزيد', 'I enjoy working with people here and strongly believe in the team factor &ndash;together everyone achieves more.\r\n', 'Roselle_Dsouza.jpg', 'employee'),
(6, 'محمد آصف الشيخ', 'Mohammed Asif Shaikh', 'مدير أول مشاريع', 'Senior Manager Projects', 'من أقواله \"لقد ساعدني إلهام ودعم شركة موارد هاوس في السعي نحو التميز', 'Mawared House, with its inspiration, support and gratitude has helped me to strive for excellence.\r\n', 'Mohammed_Asif_Shaikh.jpg', 'employee'),
(7, 'حامد عرب', 'Hamid Arab', 'مدير وحدة العمليات - الجزائر', 'Unit Manager&#8208;Operation Algeria', 'لقد وجدت هنا مدى واسع من الفرص للعمل في شركة متعددة الجنسيات والتطور في بيئة محترفة ومهنية حيث يعتبر التعلم جزء لا يتجزأ من سياسة الشركة', 'I found here a wide range of opportunities to work in a multinational and develop in a professional environment where learning is an integral part of company policy.\r\n', 'Hamid_Arab.jpg', 'employee'),
(8, 'محمد ريزا غجرية', 'Mohammadreza Ghajariyeh', 'المدير العام - إيران (أروشة جاشت باريش)', 'Managing Director &#8208; Iran (Aroosha Gasht Parseh)', 'من دواعي سروري العمل في شركة تنمو في الاتجاه الصحيح مما يعطيني المرونة والتحفيز والرضا الوظيفي', 'It is a pleasure to work for a company that is growing in right direction and gives me flexibility, motivation and satisfaction.\r\n', 'Mohammadreza_Ghajariyeh.jpg', 'employee'),
(4, 'محمد أسلم', 'Mohamed Aslam', 'الرئيس المالي', 'CFO', 'تخصص في دارسة التجارة من جامعة كولومبو، وعضو زميل في معهد المحاسبين القانونيين المعتمدين (سري لانكا) وجمعية المحاسبين الإداريين المعتمدين (سري لانكا)، أسلم يقوم بإدارة الأعمال المالية بالكامل في شركة موارد هاوس. وعلى مدى أكثر 15عاماً من الخبرة يقوم الآن بتطبيقها فيما يتعلق بالتمويل والعمليات الإدارية في منصبه الحالي. وهو يعمل بفعالية من أجل تنفيذ العمليات الضرورية لتسهيل العمليات التجارية وتعزيز القيمة التي يحصل عليها العميل.', 'A Commerce Major from the University of Colombo, and a fellow member of ICAI (Sri Lanka) and Society of Certified Management Accountants (Sri Lanka), Aslam manages the overall financial responsibilities at Mawared House. With over more than 15 years of experience Aslam infuses his valuable expertise in the subject of finance and administrative operations in his current role. He is instrumental in creating the necessary processes for easing business operations and enhancing client deliverable value.\r\n', 'Mohamed_Aslam.jpg', 'management'),
(9, 'زهري صفوان', 'Zuhrie Safwan', 'مراقب مالي', 'Financial Controller', 'شركة موارد هاوس أمدتني بفرصة لتنمية نفسي ومواجهة التحديات', 'Mawared provided me the opportunity to grow myself beyond number crunching.\r\n', 'Zuhrie_Safwan.jpg', 'employee'),
(16, 'سرفراز احمد', 'Sarfaraz Ahmed', 'المدير المالي، الكويت', 'Finance Manager, Kuwait', 'اعتبر نفسي جزءا من شركة موارد هاوس وأنا فخور بأن أكون جزءا من هذه المنظمة التي تقدر أفكاري ومساهماتي', 'I considered myself part of Mawared House and I am proud to be part of this organization which value my ideas and contributions.', 'Sarfaraz_Ahmed.jpg', 'employee'),
(10, 'دينا الغول', 'Dina El Ghoul', 'مدير وحدة - لبنان', 'Unit Manager &#8208; Lebanon', 'لأنني أريد أن أكون جزءا من قصة نجاح', 'I want to be a part of a successful story\r\n', 'Dina_El_Ghoul.jpg', 'employee'),
(11, 'زاهر صعب', 'Zaher Saab', 'مدير العمليات الإقليمي', 'Regional Operations Manager', 'أني  أعيش التجربة الأكثر نشاطاً وطاقة ومكافأة في مسيرتي المهنية. يشرفني بكل تواضع أن أكون عضوا في هذا \" البيت \" الرائع', 'I&#39;m living the most Energizing and Rewarding experience of my professional career . I&#39;m humbly honored to be a member of this wonderful &quot;HOUSE&quot;\r\n', 'Zaher_Saab.jpg', 'employee'),
(13, 'فاطمة الزهراء بوراشد', 'Fatima Zohra Berrached', 'مدير العمليات، الجزائر', 'Operations Manager, Algeria', 'أنني أحب العمل هنا نظرا لبيئة العمل المريحة.', 'I like to work here because of the comfortable working environment.', 'Fatima_Zohra_Berrached.jpg', 'employee'),
(15, 'نائل صدقة', 'Nael Sadaqa', 'المدير العام', 'General Manager', 'انه لشرف عظيم لي العمل مع زملاء مخلصين وفي ظل منظمة مشهورة تعمل كلها تحت مظلة دبلوماسية', 'It is a great honor for me to work with sincere colleagues and famous organization all under diplomatic umbrella.\r\n', 'Nael_Sadaqa.jpg', 'employee'),
(17, 'محمد هلال', 'Mohammed Hilal', 'مشرف الموارد البشرية والإدارة , الكويت', 'HR & Admin Supervisor, Kuwait', 'أنا فخور بأني كنت مع موارد هاوس منذ بدايتها', 'I am proud that I am with Mawared House Since beginning.\r\n', 'Mohammed_Hilal.jpg', 'employee'),
(18, 'ابوبكر أيت بولمنازل', 'Aboubakre Ait Boulmanzil', 'مسؤول عن وحدة', 'Unit manager', 'وراء كل خدمات ممتازة، تجد شركة رائدة موارد هاوس', 'Behind Great service lies great company Mawaredhouse', 'Aboubakre_Ait_Boulmanzil.jpg', 'employee'),
(19, 'التهامي الشامي', 'Thami Ech chami', 'مسؤول عن وحدة', 'Unit manager', 'مع شركة موارد هاوس ، تعلمت ان خدمة الزبائن موقف شخصي وليس مصلحة ادارية', 'With Mawaredhouse I learnt that Customer service is an attitude not a department.', 'Thami_Ech_chami.jpg', 'employee');
/*!40000 ALTER TABLE `about` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adminlog`
--

DROP TABLE IF EXISTS `adminlog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adminlog` (
  `admin_id` int(10) NOT NULL DEFAULT '0',
  `admin_log` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `admin_password` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adminlog`
--

LOCK TABLES `adminlog` WRITE;
/*!40000 ALTER TABLE `adminlog` DISABLE KEYS */;
INSERT INTO `adminlog` VALUES (1,'Admin','m@85%h');
/*!40000 ALTER TABLE `adminlog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `content`
--

DROP TABLE IF EXISTS `content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `content` (
  `content_id` int(10) NOT NULL DEFAULT '0',
  `content_title_ar` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content_title_en` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content_desc_ar` longtext COLLATE utf8_unicode_ci,
  `content_desc_en` longtext COLLATE utf8_unicode_ci,
  `content_photo` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`content_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content`
--

LOCK TABLES `content` WRITE;
/*!40000 ALTER TABLE `content` DISABLE KEYS */;
INSERT INTO `content` VALUES 
(3,'مرحبا بكم في موارد هاوس','About Us','<p>لم يكن غريبا استخدامنا لاسم \" موارد \" كعنوان للشركة ؛ فالموارد البشرية هي جوهر تخصصنا ؛ من مراكز تقديم التأشيرات الى خدماتنا في مجال السياحة والسفر يلعب العنصر البشري لدينا دوما دورا فعالا . بتأسيسها في 2006 بدأت \" موارد هاوس للتجارة العامة والمقاولات\" مشوارها لتقديم أفضل الخدمات لعملائها حول العالم.</p><p>بفترة قصيرة استطاعت \"موارد هاوس\" أن تخطو خطوات واسعة لتنشر وجودها في سبعة دول داخل الشرق الاوسط وشمال افريقيا ؛ ولن نتوقف هنا ؛ في موارد هاوس نحن دوما نبحث عن فرص جديدة للتوسع الاقليمي.</p>','<p>The word &#39;Mawared&#39; in Arabic means &#39;resources&#39;. And this is exactly what we&#39;re all about - providing an unmatched array of services ranging from Visa Application facilities, Business Centre&#39;s to Travel and Leisure Services. Established in Kuwait in 2006, Mawared House Trading and Contracting is on a constant endeavor to provide our customers with practical solutions and state-of-the-art services that works seamlessly towards the cause of enhancing their businesses and making their lives much simpler and better. In just a short span Mawared House has put its footprint across seven countries in the Middle East and North African (MENA) Region. And no, we&#39;re not stopping at that. At Mawared House we&#39;re actively pursuing opportunities across the globe. Armed with passion, skill and the will to succeed, we&#39;re ready to meet challenges, and foray head on into the hands of tomorrow.</p>\r\n','about_1.jpg'),
(4,'فلسفة الشركة','Philosophy','نحن نؤمن أن منظمتنا تستطيع النمو فقط اذا كانت جذورها عميقة في الارض ؛ على مدى السنين عملنا جاهدين أن تكون عملياتنا شفافة ونزيهة لنضع نصب أعيننا دائما الرؤية التي أرتضينا حين بدأنا هذه الشركة . في جميع عملياتنا ومشاريعنا ظللنا على الدوام مصرين على على أداء عملياتنا على الوجه الاكمل والافضل .','We wholeheartedly believe that an organization can grow only if its roots are well grounded. Through the years, we have made sure we maintain <strong>transparency</strong> and <strong>integrity</strong> so that never once we lose sight of the vision with which this organization was started. In all our dealings and projects, we have always remained focused on our deliveries to create value propositions and never hesitated to go that extra mile to give our clients only the best.\r','about_3.jpg'),
(1,'مراكز تقديم الطلبات','Visa Application Centres','<p>تفخر شركة موارد هاوس بأنه قد أوكل إليها من شركة VFS العالمية مهمة إدارة وتشغيل مراكز طلب التأشيرات لعدة  بعثات دبلوماسيه في منطقة الشرق الأوسط وشمال إفريقيا. ومنذ قرابة عقد من الزمن تمكنت شركة موارد هاوس وبنجاح ساحق من إدارة وتشغيل مراكز طلب التأشيرة للبعثات الدبلوماسيه في جميع أنحاء المنطقه بالاستعانه بالموارد الخارجيه التي مكنتهم من التركيز على المهمه الأساسيه في تقييم جودة العمل.</p><p>ومع مرور الوقت تمكنت شركتنا من معالجة الحاجه المتزايده في توفير خدمات الدعم لشركائنا VFS العالمية والبعثات الدبلوماسيه بالأخذ بعين الاعتبار المسائل المتعلقه بمعايير الأمن والسلامة والجودة وذلك بفاعلية الإستعانة بحلول الموارد الخارجية، وأدى ذلك إلى إنشاء خدمة عملاء استثنائية إمتدت لساعات عمل طويله لمساعدة المتقدمين لطلب التأشيرة لتصبح عملية خدمة تقديم طلبات التأشيرات أكثر سهوله وسرعة الوصول إلى المعلومات المطلوبه.</p><p>ويشرفنا بأن نكون الشركاء الموثوق بهم للعمل مع VFS للخدمات العالمية والتي تخدم مايقرب من 50 بعثة دبلوماسية في 124 بلداً في جميع أنحاء العالم بما يتجاوز 22 مليون طلب تأشيرة سنوياً. ونحن حالياً نتولى عملية إتمام أكثر من 800,000 طلب تأشيرة سنوياً بعدد موظفين يصل إلى 500 موظف في 15 مدينة و7 دول بإجمالي 5 ملايين دولار أمريكي.</p><p>وعلى مدى السنوات التسع الماضية،  تم تقديم خدمات معالجة شاملة وتشغيل مراكز تقديم طلبات التأشيرة لشركة VFS العالمية بنجاح في منطقة الشرق الأوسط وشمال أفريقيا.</p><p><a href=\"http://www.vfsglobal.com\"><img alt=\"visa application center\" src=\"images/others/vfs-global-logo.png\" /></a></p>','<p>Mawared House is proud to have been assigned the task of management of VFS Global acquired contracts and operate Visa application Centre&#39;s for various diplomatic missions in the MENA Region. For nearly a decade Mawared House successfully implemented and managed visa application centers for diplomatic missions across the region.<br />World over, Diplomatic Missions are keen to outsource the time consuming administrative, non-judgmental parts of the passport &amp; visa application process which enables them to focus on the key task of assessing applications.</p><p>Over time, our organization has been addressing this need of providing support services with great efficiency for our partners VFS Global and Diplomatic Missions keeping in mind and addressing concerns regarding security, integrity, quality and efficacy on the outsourced solution of the business. This resulted in exceptional customer service for applicants- from easy visa application processes, extended operational hours and easy access to requisite information.</p><p>We are honored to be the Trusted Partners of VFS Global Services, which serves the interests of 50 diplomatic missions in 124 countries worldwide and processes in excess of 22 million visa applications annually.<br/>We currently process over 800,000 visa applications per year, with 500 employees, in 15 cities and in 7 countries, with a total turnover of USD 5 million. For the past 9years, we have been providing comprehensive processing services and successfully running Visa Application Centers for VFS Global in the MENA region.</p><p><a href=\"http://www.vfsglobal.com\"><img alt=\"visa application center\" src=\"images/others/vfs-global-logo.png\" style=\"border-bottom:0px solid; border-left:0px solid; border-right:0px solid; border-top:0px solid\" /></a></p>','about_4.jpg'),
(8,'اتصل بنا','Contact Us ','<div class=\"col-md-7 nopadding\"><div class=\"col-sm-6 nopadding\"><div class=\"contact-col nopadding\"><div class=\"contact-col-icon pull-right\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></div><div class=\"contact-col-content\"><div class=\"cc-title\"><h3>الكويت</h3></div><p class=\"cc-desc\">الكويت مركز الراية<br/>الطابق 31<br/>شارع الشهداء<br/>مدينة الكويت<br/>العاصمة الكويتية</p></div></div><div class=\"contact-col nopadding\"><div class=\"contact-col-icon pull-right\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></div><div class=\"contact-col-content\"><div class=\"cc-title\"><h3>العنوان البريدي</h3></div><p class=\"cc-desc\">صندوق بريد 1112 سالميه 22012<br/>الكويت</p></div></div></div><div class=\"col-sm-6 nopadding\"><div class=\"contact-col nopadding\"><div class=\"contact-col-icon quick-contact pull-right\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></div><div class=\"contact-col-content\"><div class=\"cc-title pull-right\" style=\"direction: ltr;\"><p> +965 2297 1100</p></div></div></div><div class=\"contact-col nopadding\"><div class=\"contact-col-icon quick-contact pull-right\"><i class=\"fa fa-fax\" aria-hidden=\"true\"></i></div><div class=\"contact-col-content\"><div class=\"cc-title pull-right\" style=\"direction: ltr;\"><p>+965 2249 5787</p></div></div></div><div class=\"contact-col nopadding\"><div class=\"contact-col-icon quick-contact pull-right\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></div><div class=\"contact-col-content\"><div class=\"cc-title\"><p>info@mawaredhouse.com</p></div></div></div></div></div>','<div class=\"col-md-7 nopadding\"><div class=\"col-sm-6 nopadding\"><div class=\"contact-col nopadding\"><div class=\"contact-col-icon\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></div><div class=\"contact-col-content\"><div class=\"cc-title\"><h3>Kuwait</h3></div><p class=\"cc-desc\">Kuwait Arraya Centre<br/>31st Floor<br/>Al Shuhada Street<br/>Kuwait City<br/>Capital Governorate, Kuwait</p></div></div><div class=\"contact-col nopadding\"><div class=\"contact-col-icon\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></div><div class=\"contact-col-content\"><div class=\"cc-title\"><h3>Mailing address</h3></div><p class=\"cc-desc\">P.O.Box 1112 Salmiya 22012<br/>Kuwait</p></div></div></div><div class=\"col-sm-6 nopadding\"><div class=\"contact-col nopadding\"><div class=\"contact-col-icon quick-contact\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></div><div class=\"contact-col-content\"><div class=\"cc-title\"><p> +965 2297 1100</p></div></div></div><div class=\"contact-col nopadding\"><div class=\"contact-col-icon quick-contact\"><i class=\"fa fa-fax\" aria-hidden=\"true\"></i></div><div class=\"contact-col-content\"><div class=\"cc-title\"><p>+965 2249 5787</p></div></div></div><div class=\"contact-col nopadding\"><div class=\"contact-col-icon quick-contact\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></div><div class=\"contact-col-content\"><div class=\"cc-title\"><p>info@mawaredhouse.com</p></div></div></div></div></div>','about_9.jpg'),
(5,'المهمة','Mission','أن نكون الشريك الاكثر ثقة والاكثر شفافية لجميع حلفائنا حول العالم','To be the most Trusted &amp; Transparent solutions delivery partner to all our stakeholders across the globe.',NULL),
(7,'الرؤية','Vision','أداء عملياتنا وواجبتنا تجاه شركائنا بكل جودة و رقي','To deliver value and quality services to all our stakeholders through our expertise and experience.',NULL),
(6,'الالتزام','Commitment','التزامنا الدائم هو بتقديم الخدمة الافضل لعملائنا حول العالم ؛ فلسفة عملياتنا اليومية تقوم على الحوز على رضا العميل عن طريق طاقمنا الوظيفي المدرب ؛ و التكنولوجيا الحديثه التي نستخدمها ؛ إضافة الى مواردنا العالمية الهائلة عبر شركائنا الاستراتيجيين','Our commitment is to drive world class service to our customers through a foundation built on trust, integrity and loyalty. The philosophy of our day-to-day business is to attain customer delight with the help of trained professionals, state-of-the-art technology, enormous global resources and an efficient partner network.',NULL),
(2,'Singapore Airlines','Singapore Airlines','<div id=\"sa-img\"><img src=\"images/others/sa.svg\"></div><br><p>تم تأسيس شركة الريس لخدمات السفر عام 1978 و منذ ذلك الوقت و هي تعمل كوكيل عام لمبيعات الخطوط الجوية السنغافورية بدولة الكويت.<br><br>تقوم الخطوط الجوية السنغافورية و وكيلها الإقليمي سيلك آير بخدمة ما يزيد عن 700 ارتباط اسبوعي الى ما يزيد عن 50 وجهة  عبر آسيا و المحيط الهادي يومياً بالإضافة إلى رحلات 777- 300 الى دبي بأربع درجات الأولى ، رجال الأعمال ، السياحية المتميزة و السياحية. يمكن للمسافرين من دولة الكويت السفر على الخطوط الجوية الكويتية / فلاي دبي الى دبي للالتحاق بالخطوط الجوية السنغافورية.<br><br>مدينة التنوع، سنغافورة حديثة و نشطة مع خليط فريد من الأجناس ، الثقافات ، الأطعمة و المعتقدات المختلفة. سوف يتمكن المسافر السياحي  من الاستمتاع بمجموعة من الأنشطة و الأماكن على هذه الجزيرة، طوال العام، حتى ان كان فقط عبور . يتطلع الزوار الكويتيين الى انتقالات بدون فواصل الى دول مثل ماليزيا، اندونيسيا و تايلاند، او حتى الى استراليا و نيوزيلاند بعد التوقف هنا في سنغافورة.</p><br><br><div id=\"singapore-info\" class=\"row text-center\"><div class=\"col-md-4\"><p><i class=\"fa fa-globe fa-2x\" aria-hidden=\"true\"></i><br><a href=\"http://www.singaporeair.com/kw\">www.singaporeair.com/kw</a></p></div><div class=\"col-md-4\" style=\"direction: ltr;\"><p><i class=\"fa fa-phone fa-2x\" aria-hidden=\"true\"></i><br><a href=\"#\">(+965) 2297 1104</a></p></div><div class=\"col-md-4\" style=\"direction: ltr;\"><p><i class=\"fa fa-fax fa-2x\" aria-hidden=\"true\"></i><br><a href=\"#\">(+965) 2249 5787</a></p></div></div>','<div id=\"sa-img\"><img src=\"images/others/sa.svg\"></div><br><p>Al Rayes Travel Services was established in 1978 and since then representing as General Sales Agent for Singapore Airlines in Kuwait.<br><br>Singapore Airlines and its regional carrier Silk Air serve over 700 weekly connections to more than 50 destinations across Asia Pacific besides daily 777-300 aircraft to Dubai with 4 cabins, First, Business, Premium Economy and Economy classes.  Passengers from Kuwait can travel on Kuwait Airways/Fly Dubai to Dubai to connect Singapore Airlines.<br><br>A city of diversity, Singapore is modern and dynamic with a unique mix of different races, cultures, foods and religions.  The leisure traveler will be able to enjoy the array of activities and places to visit on this island, all year around, even if only on transit.  Kuwaiti visitors can look forward to seamless connections to countries like Malaysia, Indonesia and Thailand, or even Australia and New Zealand after making stopover here in Singapore. </p><br><br><div id=\"singapore-info\" class=\"row text-center\"><div class=\"col-md-4\"><p> <i class=\"fa fa-globe fa-2x\" aria-hidden=\"true\"></i><br> <a href=\"http://www.singaporeair.com/kw\">www.singaporeair.com/kw</a> </p></div><div class=\"col-md-4\"><p> <i class=\"fa fa-phone fa-2x\" aria-hidden=\"true\"></i><br> <a href=\" (+965) 2297 1104\">(+965) 2297 1104</a> </p></div><div class=\"col-md-4\"><p> <i class=\"fa fa-fax fa-2x\" aria-hidden=\"true\"></i> <br>  <a href=\"http://www.singaporeair.com/kw\">(+965) 2249 5787</a> </p></div></div>',NULL);
/*!40000 ALTER TABLE `content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `countries` (
  `countries_id` int(11) NOT NULL AUTO_INCREMENT,
  `countries_title_en` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `countries_flag` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `countries_client_visible` int(1) NOT NULL DEFAULT '0',
  `countries_title_ar` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `countries_photo` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `countries_operation` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`countries_id`),
  UNIQUE KEY `countries_title_en_UNIQUE` (`countries_title_en`)
) ENGINE=MyISAM AUTO_INCREMENT=248 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'afghanistan','afghanistan.png',0,'أفغانستان',NULL,0),
(2,'aland islands','aland_islands.png',0,'جزر آلاند',NULL,0),
(3,'albania','albania.png',0,'ألبانيا',NULL,0),
(4,'algeria','algeria.png',0,'الجزائر','countries_7.jpg',1),
(5,'american samoa','american_samoa.png',0,'ساموا الأمريكية',NULL,0),
(6,'andorra','andorra.png',0,'أندورا',NULL,0),
(7,'angola','angola.png',0,'أنغولا',NULL,0),
(8,'anguilla','anguilla.png',0,'أنغيلا',NULL,0),
(9,'antarctica','antarctica.png',0,'القطب الجنوبي',NULL,0),
(10,'antigua barbuda','antigua_barbuda.png',0,'أنتيغوا بربودا',NULL,0),
(11,'argentina','argentina.png',0,'الأرجنتين',NULL,0),
(12,'armenia','armenia.png',0,'أرمينيا',NULL,0),
(13,'aruba','aruba.png',0,'أروبا',NULL,0),
(14,'australia','australia.png',1,'أستراليا',NULL,0),
(15,'austria','austria.png',0,'النمسا',NULL,0),
(16,'azerbaijan','azerbaijan.png',0,'أذربيجان',NULL,0),
(17,'bahamas','bahamas.png',0,'جزر البهاما',NULL,0),
(18,'bahrain','bahrain.png',0,'البحرين',NULL,0),
(19,'bangladesh','bangladesh.png',0,'بنغلاديش',NULL,0),
(20,'barbados','barbados.png',0,'بربادوس',NULL,0),
(21,'belarus','belarus.png',0,'روسيا البيضاء',NULL,0),
(22,'belgium','belgium.png',1,'بلجيكا',NULL,0),
(23,'belize','belize.png',0,'بليز',NULL,0),
(24,'benin','benin.png',0,'بنين',NULL,0),
(25,'bermuda','bermuda.png',0,'برمودا',NULL,0),
(26,'bhutan','bhutan.png',0,'بوتان',NULL,0),
(27,'bolivia','bolivia.png',0,'بوليفيا',NULL,0),
(28,'bosnia herzegovina','bosnia_herzegovina.png',0,'البوسنة الهرسك',NULL,0),
(29,'botswana','botswana.png',0,'بوتسوانا',NULL,0),
(30,'brazil','brazil.png',0,'البرازيل',NULL,0),
(31,'british indian ocean territory','british_indian_ocean_territory.png',0,'إقليم المحيط البريطاني الهندي',NULL,0),
(32,'british virgin islands','british_virgin_islands.png',0,'جزر فيرجن البريطانية',NULL,0),
(33,'brunei','brunei.png',0,'بروناي',NULL,0),
(34,'bulgaria','bulgaria.png',1,'بلغاريا',NULL,0),
(35,'burkina faso','burkina_faso.png',0,'بوركينا فاسو',NULL,0),
(36,'burundi','burundi.png',0,'بوروندي',NULL,0),
(37,'cambodia','cambodia.png',0,'كمبوديا',NULL,0),
(38,'cameroon','cameroon.png',0,'الكاميرون',NULL,0),
(39,'canada','canada.png',0,'كندا',NULL,0),
(40,'canary islands','canary_islands.png',0,'جزر الكناري',NULL,0),
(41,'cape verde','cape_verde.png',0,'الرأس الأخضر',NULL,0),
(42,'caribbean netherlands','caribbean_netherlands.png',0,'منطقة البحر الكاريبي هولندا',NULL,0),
(43,'cayman islands','cayman_islands.png',0,'جزر كايمان',NULL,0),
(44,'central african republic','central_african_republic.png',0,'جمهورية افريقيا الوسطى',NULL,0),
(45,'chad','chad.png',0,'تشاد',NULL,0),
(46,'chile','chile.png',0,'تشيلي',NULL,0),
(47,'china','china.png',0,'الصين',NULL,0),
(48,'christmas island','christmas_island.png',0,'جزيرة الكريسماس',NULL,0),
(49,'cocos islands','cocos_islands.png',0,'جزر كوكوس',NULL,0),
(50,'colombia','colombia.png',0,'كولومبيا',NULL,0),
(51,'comoros','comoros.png',0,'جزر القمر',NULL,0),
(52,'congo brazzaville','congo_brazzaville.png',0,'الكونغو برازافيل',NULL,0),
(53,'congo kinshasa','congo_kinshasa.png',0,'جمهورية الكونغو الديموقراطية',NULL,0),
(54,'cook islands','cook_islands.png',0,'جزر كوك',NULL,0),
(55,'costa rica','costa_rica.png',0,'كوستا ريكا',NULL,0),
(56,'cote divoire','cote_divoire.png',0,'كوت ديفوار',NULL,0),
(57,'croatia','croatia.png',1,'كرواتيا',NULL,0),
(58,'cuba','cuba.png',0,'كوبا',NULL,0),
(59,'curacao','curacao.png',0,'كوراكاو',NULL,0),
(60,'cyprus','cyprus.png',1,'قبرص',NULL,0),
(61,'czech republic','czech_republic.png',0,'جمهورية التشيك',NULL,0),
(62,'denmark','denmark.png',1,'الدنمارك',NULL,0),
(63,'djibouti','djibouti.png',0,'جيبوتي',NULL,0),
(64,'dominica','dominica.png',0,'دومينيكا',NULL,0),
(65,'dominican republic','dominican_republic.png',0,'جمهورية الدومنيكان',NULL,0),
(66,'ecuador','ecuador.png',0,'الاكوادور',NULL,0),
(67,'egypt','egypt.png',0,'مصر',NULL,0),
(68,'el salvador','el_salvador.png',0,'السلفادور',NULL,0),
(69,'equatorial guinea','equatorial_guinea.png',0,'غينيا الإستوائية',NULL,0),
(70,'eritrea','eritrea.png',0,'إريتريا',NULL,0),
(71,'estonia','estonia.png',0,'استونيا',NULL,0),
(72,'ethiopia','ethiopia.png',0,'أثيوبيا',NULL,0),
(73,'european union','european_union.png',0,'الإتحاد الأوربي',NULL,0),
(74,'falkland islands','falkland_islands.png',0,'جزر فوكلاند',NULL,0),
(75,'faroe islands','faroe_islands.png',0,'جزر صناعية',NULL,0),
(76,'fiji','fiji.png',0,'فيجي',NULL,0),
(77,'finland','finland.png',0,'فنلندا',NULL,0),
(78,'france','france.png',0,'فرنسا',NULL,0),
(79,'french guiana','french_guiana.png',0,'غيانا الفرنسية',NULL,0),
(80,'french polynesia','french_polynesia.png',0,'بولينيزيا الفرنسية',NULL,0),
(81,'french southern territories','french_southern_territories.png',0,'المناطق الجنوبية لفرنسا',NULL,0),
(82,'gabon','gabon.png',0,'الغابون',NULL,0),
(83,'gambia','gambia.png',0,'غامبيا',NULL,0),
(84,'georgia','georgia.png',0,'جورجيا',NULL,0),
(85,'germany','germany.png',0,'ألمانيا',NULL,0),
(86,'ghana','ghana.png',0,'غانا',NULL,0),
(87,'gibraltar','gibraltar.png',0,'جبل طارق',NULL,0),
(88,'greece','greece.png',1,'اليونان',NULL,0),
(89,'greenland','greenland.png',0,'الأرض الخضراء',NULL,0),
(90,'grenada','grenada.png',0,'غرينادا',NULL,0),
(91,'guadeloupe','guadeloupe.png',0,'جوادلوب',NULL,0),
(92,'guam','guam.png',0,'غوام',NULL,0),
(93,'guatemala','guatemala.png',0,'غواتيمالا',NULL,0),
(94,'guernsey','guernsey.png',0,'غيرنسي',NULL,0),
(95,'guinea','guinea.png',0,'غينيا',NULL,0),
(96,'guinea bissau','guinea_bissau.png',0,'غينيا بيساو',NULL,0),
(97,'guyana','guyana.png',0,'غيانا',NULL,0),
(98,'haiti','haiti.png',0,'هايتي',NULL,0),
(99,'honduras','honduras.png',0,'هندوراس',NULL,0),
(100,'hong kong','hong_kong.png',0,'هونغ كونغ',NULL,0),
(101,'hungary','hungary.png',0,'هنغاريا',NULL,0),
(102,'iceland','iceland.png',0,'أيسلندا',NULL,0),
(103,'india','india.png',1,'الهند',NULL,0),
(104,'indonesia','indonesia.png',0,'أندونيسيا',NULL,0),
(105,'iran','iran.png',0,'إيران','countries_6.jpg',1),
(106,'iraq','iraq.png',0,'العراق',NULL,0),
(107,'ireland','ireland.png',1,'أيرلندا',NULL,0),
(108,'isle of man','isle_of_man.png',0,'جزيرة آيل أوف مان',NULL,0),
(109,'israel','israel.png',0,'إسرائيل',NULL,0),
(110,'italy','italy.png',0,'إيطاليا',NULL,0),
(111,'jamaica','jamaica.png',0,'جامايكا',NULL,0),
(112,'japan','japan.png',0,'اليابان',NULL,0),
(113,'jersey','jersey.png',0,'جيرسي',NULL,0),
(114,'jordan','jordan.png',0,'الأردن','countries_4.jpg',1),
(115,'kazakhstan','kazakhstan.png',0,'كازاخستان',NULL,0),
(116,'kenya','kenya.png',0,'كينيا',NULL,0),
(117,'kiribati','kiribati.png',0,'كيريباس',NULL,0),
(118,'kosovo','kosovo.png',0,'كوسوفو',NULL,0),
(119,'kuwait','kuwait.png',0,'الكويت','countries_1.jpg',1),
(120,'kyrgyzstan','kyrgyzstan.png',0,'قيرغيزستان',NULL,0),
(121,'laos','laos.png',0,'لاوس',NULL,0),
(122,'latvia','latvia.png',0,'لاتفيا',NULL,0),
(123,'lebanon','lebanon.png',0,'لبنان','countries_5.jpg',1),
(124,'lesotho','lesotho.png',0,'ليسوتو',NULL,0),
(125,'liberia','liberia.png',0,'ليبيريا',NULL,0),
(126,'libya','libya.png',0,'ليبيا',NULL,0),
(127,'liechtenstein','liechtenstein.png',0,'ليختنشتاين',NULL,0),
(128,'lithuania','lithuania.png',0,'ليتوانيا',NULL,0),
(129,'luxembourg','luxembourg.png',0,'لوكسمبورغ',NULL,0),
(130,'macau','macau.png',0,'ماكاو',NULL,0),
(131,'macedonia','macedonia.png',0,'مقدونيا',NULL,0),
(132,'madagascar','madagascar.png',0,'مدغشقر',NULL,0),
(133,'malawi','malawi.png',0,'ملاوي',NULL,0),
(134,'malaysia','malaysia.png',0,'ماليزيا',NULL,0),
(135,'maldives','maldives.png',0,'جزر المالديف',NULL,0),
(136,'mali','mali.png',0,'مالي',NULL,0),
(137,'malta','malta.png',0,'مالطا',NULL,0),
(138,'marshall islands','marshall_islands.png',0,'جزر مارشال',NULL,0),
(139,'martinique','martinique.png',0,'المارتينيك',NULL,0),
(140,'mauritania','mauritania.png',0,'موريتانيا',NULL,0),
(141,'mauritius','mauritius.png',0,'موريشيوس',NULL,0),
(142,'mayotte','mayotte.png',0,'مايوت',NULL,0),
(143,'mexico','mexico.png',0,'المكسيك',NULL,0),
(144,'micronesia','micronesia.png',0,'ميكرونيزيا',NULL,0),
(145,'moldova','moldova.png',0,'مولدوفا',NULL,0),
(146,'monaco','monaco.png',0,'موناكو',NULL,0),
(147,'mongolia','mongolia.png',0,'منغوليا',NULL,0),
(148,'montenegro','montenegro.png',0,'الجبل الأسود',NULL,0),
(149,'montserrat','montserrat.png',0,'مونتسيرات',NULL,0),
(150,'morocco','morocco.png',1,'المغرب','countries_2.jpg',1),
(151,'mozambique','mozambique.png',0,'موزمبيق',NULL,0),
(152,'myanmar','myanmar.png',0,'ميانمار',NULL,0),
(153,'namibia','namibia.png',0,'ناميبيا',NULL,0),
(154,'nauru','nauru.png',0,'ناورو',NULL,0),
(155,'nepal','nepal.png',0,'نيبال',NULL,0),
(156,'netherlands','netherlands.png',1,'هولندا',NULL,0),
(157,'new caledonia','new_caledonia.png',0,'كاليدونيا الجديدة',NULL,0),
(158,'new zealand','new_zealand.png',0,'نيوزيلاندا',NULL,0),
(159,'nicaragua','nicaragua.png',0,'نيكاراغوا',NULL,0),
(160,'niger','niger.png',0,'النيجر',NULL,0),
(161,'nigeria','nigeria.png',0,'نيجيريا',NULL,0),
(162,'niue','niue.png',0,'نيوي',NULL,0),
(163,'norfolk island','norfolk_island.png',0,'جزيرة نورفولك',NULL,0),
(164,'northern mariana islands','northern_mariana_islands.png',0,'جزر مريانا الشمالية',NULL,0),
(165,'north korea','north_korea.png',0,'كوريا الشمالية',NULL,0),
(166,'norway','norway.png',1,'النرويج',NULL,0),
(167,'oman','oman.png',0,'سلطنة عمان',NULL,0),
(168,'pakistan','pakistan.png',0,'باكستان',NULL,0),
(169,'palau','palau.png',0,'بالاو',NULL,0),
(170,'palestinian territories','palestinian_territories.png',0,'الاراضي الفلسطينية',NULL,0),
(171,'panama','panama.png',0,'بناما',NULL,0),
(172,'papua new guinea','papua_new_guinea.png',0,'بابوا غينيا الجديدة',NULL,0),
(173,'paraguay','paraguay.png',0,'باراغواي',NULL,0),
(174,'peru','peru.png',0,'بيرو',NULL,0),
(175,'philippines','philippines.png',0,'الفلبين',NULL,0),
(176,'pitcairn islands','pitcairn_islands.png',0,'جزر بيتكيرن',NULL,0),
(177,'poland','poland.png',0,'بولندا',NULL,0),
(178,'portugal','portugal.png',1,'البرتغال',NULL,0),
(179,'puerto rico','puerto_rico.png',0,'بورتوريكو',NULL,0),
(180,'qatar','qatar.png',0,'قطر',NULL,0),
(181,'reunion','reunion.png',0,'جمع شمل',NULL,0),
(182,'romania','romania.png',0,'رومانيا',NULL,0),
(183,'russia','russia.png',0,'روسيا',NULL,0),
(184,'rwanda','rwanda.png',0,'رواندا',NULL,0),
(185,'samoa','samoa.png',0,'ساموا',NULL,0),
(186,'san marino','san_marino.png',0,'سان مارينو',NULL,0),
(187,'sao tome principe','sao_tome_principe.png',0,'ساو تومي برينسيبي',NULL,0),
(188,'saudi arabia','saudi_arabia.png',0,'المملكة العربية السعودية',NULL,0),
(189,'senegal','senegal.png',0,'السنغال',NULL,0),
(190,'serbia','serbia.png',0,'صربيا',NULL,0),
(191,'seychelles','seychelles.png',0,'سيشيل',NULL,0),
(192,'sierra leone','sierra_leone.png',0,'سيرا ليون',NULL,0),
(193,'singapore','singapore.png',0,'سنغافورة',NULL,0),
(194,'sint maarten','sint_maarten.png',0,'سانت مارتن',NULL,0),
(195,'slovakia','slovakia.png',0,'سلوفاكيا',NULL,0),
(196,'slovenia','slovenia.png',1,'سلوفينيا',NULL,0),
(197,'solomon islands','solomon_islands.png',0,'جزر سليمان',NULL,0),
(198,'somalia','somalia.png',0,'الصومال',NULL,0),
(199,'south africa','south_africa.png',0,'جنوب أفريقيا',NULL,0),
(200,'south georgia south sandwich islands','south_georgia_south_sandwich_islands.png',0,'جورجيا الجنوبية جزر ساندويتش الجنوبية',NULL,0),
(201,'south korea','south_korea.png',0,'كوريا الجنوبية',NULL,0),
(202,'south sudan','south_sudan.png',0,'جنوب السودان',NULL,0),
(203,'spain','spain.png',0,'إسبانيا',NULL,0),
(204,'sri lanka','sri_lanka.png',0,'سيريلانكا',NULL,0),
(205,'st barthelemy','st_barthelemy.png',0,'ش بارتيليمي',NULL,0),
(206,'st helena','st_helena.png',0,'سانت هيلين',NULL,0),
(207,'st kitts nevis','st_kitts_nevis.png',0,'سانت كيتس نيفيس',NULL,0),
(208,'st lucia','st_lucia.png',0,'شارع لوسيا',NULL,0),
(209,'st pierre miquelon','st_pierre_miquelon.png',0,'شارع بيير ميكلون',NULL,0),
(210,'st vincent grenadines','st_vincent_grenadines.png',0,'جزر غرينادين سانت فنسنت',NULL,0),
(211,'sudan','sudan.png',0,'سودان',NULL,0),
(212,'suriname','suriname.png',0,'سورينام',NULL,0),
(213,'swaziland','swaziland.png',0,'سوازيلاند',NULL,0),
(214,'sweden','sweden.png',0,'السويد',NULL,0),
(215,'switzerland','switzerland.png',1,'سويسرا',NULL,0),
(216,'syria','syria.png',0,'سوريا','countries_3.jpg',1),
(217,'taiwan','taiwan.png',0,'تايوان',NULL,0),
(218,'tajikistan','tajikistan.png',0,'طاجيكستان',NULL,0),
(219,'tanzania','tanzania.png',0,'تنزانيا',NULL,0),
(220,'thailand','thailand.png',0,'تايلند',NULL,0),
(221,'timor leste','timor_leste.png',0,'تيمور الشرقية',NULL,0),
(222,'togo','togo.png',0,'توغو',NULL,0),
(223,'tokelau','tokelau.png',0,'توكيلاو',NULL,0),
(224,'tonga','tonga.png',0,'تونغا',NULL,0),
(225,'trinidad tobago','trinidad_tobago.png',0,'ترينيداد وتوباجو',NULL,0),
(226,'tunisia','tunisia.png',0,'تونس',NULL,0),
(227,'turkey','turkey.png',1,'ديك رومي',NULL,0),
(228,'turkmenistan','turkmenistan.png',0,'تركمانستان',NULL,0),
(229,'turks caicos islands','turks_caicos_islands.png',0,'جزر تركس كايكوس',NULL,0),
(230,'tuvalu','tuvalu.png',0,'توفالو',NULL,0),
(231,'uganda','uganda.png',0,'أوغندا',NULL,0),
(232,'ukraine','ukraine.png',0,'أوكرانيا',NULL,0),
(233,'united arab emirates','united_arab_emirates.png',1,'الإمارات العربية المتحدة',NULL,0),
(234,'united kingdom','united_kingdom.png',1,'المملكة المتحدة',NULL,0),
(235,'united states','united_states.png',0,'الولايات المتحدة',NULL,0),
(236,'uruguay','uruguay.png',0,'أوروغواي',NULL,0),
(237,'us virgin islands','us_virgin_islands.png',0,'جزر العذراء الأمريكية',NULL,0),
(238,'uzbekistan','uzbekistan.png',0,'أوزبكستان',NULL,0),
(239,'vanuatu','vanuatu.png',0,'فانواتو',NULL,0),
(240,'vatican city','vatican_city.png',0,'مدينة الفاتيكان',NULL,0),
(241,'venezuela','venezuela.png',0,'فنزويلا',NULL,0),
(242,'vietnam','vietnam.png',0,'فيتنام',NULL,0),
(243,'wallis futuna','wallis_futuna.png',0,'فوتونا اليس',NULL,0),
(244,'western sahara','western_sahara.png',0,'الصحراء الغربية',NULL,0),
(245,'yemen','yemen.png',0,'اليمن',NULL,0),
(246,'zambia','zambia.png',0,'زامبيا',NULL,0),
(247,'zimbabwe','zimbabwe.png',0,'زيمبابوي',NULL,0);
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries_content`
--

DROP TABLE IF EXISTS `countries_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `countries_content` (
  `countries_content_id` int(11) NOT NULL AUTO_INCREMENT,
  `countries_id` int(11) NOT NULL,
  `countries_mission_en` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `countries_website_en` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`countries_content_id`),
  UNIQUE KEY `countries_content_id_UNIQUE` (`countries_content_id`)
) ENGINE=MyISAM AUTO_INCREMENT=48 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries_content`
--

LOCK TABLES `countries_content` WRITE;
/*!40000 ALTER TABLE `countries_content` DISABLE KEYS */;
INSERT INTO `countries_content` VALUES 
(54, 4, '156', 'http://www.vfsglobal.com/netherlands/algeria'),
(2, 150, '15', 'http://www.vfsglobal.com/Austria/Morocco/'),
(3, 150, '178', 'http://www.vfsglobal.com/portugal/morocco/'),
(4, 150, '39', 'http://www.vfsglobal.ca/Canada/Morocco/'),
(5, 150, '214', 'https://www.vfsglobal.se/Morocco/index.html'),
(6, 150, '57', 'http://www.vfsglobal.com/croatia/morocco/'),
(7, 150, '156', 'http://www.vfsglobal.com/netherlands/morocco/'),
(9, 4, '88', 'http://www.vfsglobal.com/Greece/Algeria'),
(10, 4, '137', 'http://www.vfsglobal.com/Malta/Algeria'),
(11, 4, '39', 'http://www.vfsglobal.ca/Canada/Algeria'),
(12, 4, '57', 'http://www.vfsglobal.com/Croatia/Algeria'),
(13, 4, '15', 'http://www.vfsglobal.com/Austria/Algeria'),
(14, 4, '227', 'http://www.vfsglobal.com/Turkey/Algeria'),
(15, 4, '101', 'http://www.vfsglobal.com/Hungary/Algeria'),
(16, 114, '57', 'http://www.vfsglobal.com/croatia/Jordan'),
(17, 114, '60', 'http://www.vfsglobal.com/cyprus/jordan'),
(18, 114, '61', 'http://www.vfsglobal.com/czechrepublic/Jordan'),
(19, 114, '88', 'http://www.vfsglobal.com/greece/Jordan'),
(20, 114, '103', 'http://www.vfsglobal.com/india/Jordan'),
(21, 114, '166', 'http://www.vfsglobal.com/norway/Jordan'),
(52, 114, '233', 'http://www.dubaivisa.net/jordan/'),
(23, 114, '214', 'http://www.vfsglobal.se/Jordan'),
(24, 105, '234', 'http://www.vfsglobal.co.uk/iran/'),
(25, 105, '233', 'http://www.dubaivisa.net/'),
(50, 123, '15', 'http://www.vfsglobal.com/austria/lebanon/'),
(27, 123, '88', 'http://www.vfsglobal.com/greece/lebanon'),
(28, 123, '166', 'http://www.vfsglobal.com/Norway/Lebanon'),
(29, 123, '15', 'http://www.vfsglobal.com/Austria/lebanon'),
(30, 123, '156', 'http://www.vfsglobal.com/Netherlands/Lebanon'),
(31, 123, '60', 'http://www.vfsglobal.com/cyprus/lebanon'),
(32, 123, '39', 'http://www.vfsglobal.ca/Canada/Lebanon'),
(33, 123, '233', 'http://www.dubaivisa.net/lebanon'),
(34, 123, '214', 'http://www.vfsglobal.se/lebanon'),
(35, 123, '57', 'http://www.vfsglobal.com/croatia/Lebanon'),
(36, 119, '14', 'http://www.vfsglobal.com/Australia/GCC/'),
(37, 119, '15', 'http://vfsglobal.com/austria/kuwait/'),
(38, 119, '39', 'http://www.vfsglobal.ca/canada/Kuwait/index.html'),
(39, 119, '57', 'http://vfsglobal.com/croatia/kuwait/'),
(40, 119, '61', 'http://www.vfsglobal.com/czechrepublic/kuwait/'),
(41, 119, '88', 'http://vfsglobal.com/greece/kuwait/'),
(42, 119, '101', 'http://vfsglobal.com/hungary/kuwait/'),
(43, 119, '156', 'http://vfsglobal.com/netherlands/kuwait/'),
(44, 119, '196', 'http://www.vfsglobal.com/slovenia/kuwait/'),
(48, 119, '107', 'http://www.vfsglobal.com/ireland/kuwait/'),
(46, 119, '215', 'https://www.vfsglobal.ch/switzerland/kuwait/index.html'),
(47, 119, '234', 'https://www.vfsglobal.co.uk/kuwait/'),
(49, 119, '', ''),
(51, 123, '166', 'http://www.vfsglobal.com/norway/lebanon/'),
(53, 114, '', ''),
(55, 4, '', ''),
(56, 150, '', '');
/*!40000 ALTER TABLE `countries_content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery`
--

DROP TABLE IF EXISTS `gallery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gallery` (
  `gallery_id` int(10) NOT NULL,
  `gallery_name_ar` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gallery_name_en` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gallery_photo` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gallery_thumb` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gallery_type` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`gallery_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery`
--

LOCK TABLES `gallery` WRITE;
/*!40000 ALTER TABLE `gallery` DISABLE KEYS */;
INSERT INTO `gallery` VALUES (1, 'Algeria team mates in Swiss trip 2015', 'Algeria team mates in Swiss trip 2015', 'Algeria_team_mates_in_Swiss_trip_2015.jpg', 'Algeria_team_mates_in_Swiss_trip_2015.jpg', 1),
(2, 'Annual picnic in Kuwait 2016 1', 'Annual picnic in Kuwait 2016 1', 'Annual picnic in Kuwait 2016 (1).jpg', 'Annual picnic in Kuwait 2016 (1).jpg', 1),
(3, 'Annual picnic in Kuwait 2016 2', 'Annual picnic in Kuwait 2016 2', 'Annual picnic in Kuwait 2016 (2).jpg', 'Annual picnic in Kuwait 2016 (2).jpg', 1),
(4, 'Annual picnic in Kuwait 2016 3', 'Annual picnic in Kuwait 2016 3', 'Annual picnic in Kuwait 2016 (3).jpg', 'Annual picnic in Kuwait 2016 (3).jpg', 1),
(5, 'Annual picnic in Kuwait 2016 4', 'Annual picnic in Kuwait 2016 4', 'Annual picnic in Kuwait 2016.jpg', 'Annual picnic in Kuwait 2016.jpg', 1),
(6, ' MH team with Hungary MFA officials', ' MH team with Hungary MFA officials', '1472399203.jpg', '1472399203.jpg', 1),
(7, 'Swiss Trip 2014', 'Swiss Trip 2014', 'Swiss Trip 2014.jpg', 'Swiss Trip 2014.jpg', 1),
(8, 'Swiss Trip 2015', 'Swiss Trip 2015', 'Swiss Trip 2015.jpg', 'Swiss Trip 2015.jpg', 1),
(9, 'Swiss Trip 2015', 'Swiss Trip 2015', 'Swiss Trip 2015 (2).jpg', 'Swiss Trip 2015 (2).jpg', 1),
(10, 'Team dinner in Lebanon with Cyprus Embassy', 'Team dinner in Lebanon with Cyprus Embassy', 'Team dinner in Lebanon with Cyprus Embassy.jpg', 'Team dinner in Lebanon with Cyprus Embassy.jpg', 1),
(11, 'Team dinner in Lebanon', 'Team dinner in Lebanon', 'Team dinner in Lebanon.jpg', 'Team dinner in Lebanon.jpg', 1),
(12, 'Women power in Mawared House', 'Women power in Mawared House', 'Women power in Mawared House.jpg', 'Women power in Mawared House.jpg', 1),
(14, 'Coffee Time', 'Coffee Time', 'Coffee Time.jpg', 'Coffee Time.jpg', 1),
(15, 'Gala Dinner', 'Gala Dinner', 'Gala Dinner.jpg', 'Gala Dinner.jpg', 1),
(16, 'Gala Dinner(1)', 'Gala Dinner(1)', 'Gala Dinner(1).jpg', 'Gala Dinner(1).jpg', 1),
(17, 'Get Set for the boat Trip', 'Get Set for the boat Trip', 'Get Set for the boat Trip.jpg', 'Get Set for the boat Trip.jpg', 1),
(18, 'Iran Team', 'Iran Team', 'Iran Team.jpg', 'Iran Team.jpg', 1),
(19, 'Joint VAC opening - Kuwait', 'Joint VAC opening - Kuwait', 'Joint VAC opening - Kuwait.jpg', 'Joint VAC opening - Kuwait.jpg', 1),
(20, 'Jordan Team', 'Jordan Team', 'Jordan Team.jpg', 'Jordan Team.jpg', 1),
(21, 'Kabayan Team', 'Kabayan Team', 'Kabayan Team.jpg', 'Kabayan Team.jpg', 1),
(22, 'Khai Island', 'Khai Island', 'Khai Island.jpg', 'Khai Island.jpg', 1),
(23, 'Ladies In RED', 'Ladies In RED', 'Ladies In RED.jpg', 'Ladies In RED.jpg', 1),
(24, 'Managment Team', 'Managment Team', 'Managment Team.jpg', 'Managment Team.jpg', 1),
(25, 'Mawared Team', 'Mawared Team', 'Mawared Team.jpg', 'Mawared Team.jpg', 1),
(26, 'MH @ Chalong Temple', 'MH @ Chalong Temple', 'MH @ Chalong Temple.jpg', 'MH @ Chalong Temple.jpg', 1),
(27, 'MH in a row', 'MH in a row', 'MH in a row.jpg', 'MH in a row.jpg', 1),
(28, 'Phi Phi Island', 'Phi Phi Island', 'Phi Phi Island.jpg', 'Phi Phi Island.jpg', 1),
(29, 'Ready for the Island Trip', 'Ready for the Island Trip', 'Ready for the Island Trip.jpg', 'Ready for the Island Trip.jpg', 1),
(30, 'Team Lebanon', 'Team Lebanon', 'Team Lebanon.jpg', 'Team Lebanon.jpg', 1),
(31, 'Team Mawared Services', 'Team Mawared Services', 'Team Mawared Services.jpg', 'Team Mawared Services.jpg', 1),
(32, 'Team Morroco', 'Team Morroco', 'Team Morroco.jpg', 'Team Morroco.jpg', 1),
(33, 'Top of the Temple', 'Top of the Temple ', 'Top of the Temple .jpg', 'Top of the Temple .jpg', 1),
(13, 'Algeria Team', 'Algeria Team', 'Algeria Team.jpg', 'Algeria Team.jpg', 1);
/*!40000 ALTER TABLE `gallery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `news_id` int(10) NOT NULL DEFAULT '0',
  `news_date` varchar(50) COLLATE utf8_unicode_ci DEFAULT '0',
  `news_title_ar` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `news_title_en` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `news_desc_ar` longtext COLLATE utf8_unicode_ci,
  `news_desc_en` longtext COLLATE utf8_unicode_ci,
  `news_photo` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES
(12, '0', 'Ireland Visa Application Centre', 'Ireland Visa Application Centre', '<p>First&nbsp;<a href=\"https://www.facebook.com/hashtag/ireland?source=feed_text&amp;story_id=1249911858409445\">Ireland</a>&nbsp;VAC in the Middle East opens in Kuwait. The new centre co -located with UK and Australian visa application centres was opened by the Ambassador of Ireland to the UAE, <strong><u>H.E Patrick Henessey</u></strong>.</p>\r\n', '<p>First&nbsp;<a href=\"https://www.facebook.com/hashtag/ireland?source=feed_text&amp;story_id=1249911858409445\">Ireland</a>&nbsp;VAC in the Middle East opens in Kuwait. The new centre co -located with UK and Australian visa application centres was opened by the Ambassador of Ireland to the UAE, <u><strong>H.E Patrick Henessey.</strong></u></p>\r\n', 'news_12.jpg'),
(13, '0', 'مركز طلبات تأشيرات هولندا - الجزائر العاصمة', 'Netherlands Visa Application Center - Algiers', '<p>مركز تأشيرات هولندا في الجزائر العاصمة. أطلقت رسميا من قبل <سترونغ> صاحب السعادة. روبرت فان إمبدن. </ سترونغ> سفير هولندا في الجزائر</p>\r\n', '<p>The Netherlands visa centre in Algiers . Officially launched by the <strong>H.E. Robert Van Embden.</strong> The Ambassador of Netherlands in Algeria</p>\r\n', 'news_13.jpg'),
(7, '0', 'مركز التأشيرات االنرويج يفتتح أبوابه في الاردن', 'Norway Visa Centre opens in Amman- Jordan ', 'مركز التأشيرات االنرويج', '										Mawared House in collaboration with VFS Global announces the opening of the Norway Visa Service Centre in Amman on 1st June 2015 to cater to the visa requirements of people residing in Jordan and planning to visit Norway. The VAC was inaugurated by Her Exellency Sissel Breie, Norwegian ambassador to Jordan and Iraq .									', '3.jpg'),
(10, '0', 'مركز تطبيقات هولندا يفتح في المغرب - الرباط', 'Netherlands Application Centre opens in Morocco - Rabat', 'أعلنت مؤسسة "مواريد هاوس" بالتعاون مع "في إف إس جلوبال" عن افتتاح مركز طلبات تأشيرات هولندا في الرباط، المغرب في 22 يونيو 2015 لتلبية متطلبات التأشيرة المستمرة للأشخاص المقيمين في المغرب والتخطيط لزيارة هولندا.<br />\r\nوافتتح المركز <strong>S.E.M. Ronald Gerard (Ron)</strong> سفير هولندا لدى المغرب.', 'Mawared House in collaboration with VFS Global announces the opening of the Netherlands Visa Application Centre in Rabat, MOROCCO on the 22nd June 2015 to cater to Continue visa requirements of people residing in MOROCCO and planning to visit Netherlands.<br />\r\nThe centre was inaugurated by <strong>S.E.M. Ronald Gerard (Ron)</strong> Ambassador of Netherlands to MOROCCO.', '5.jpg'),
(11, '0', 'مركز طلبات تأشيرة قبرص - الأردن', 'Cyprus Visa Application Centre - Jordan','شركة "مواريد هاوس" بالتعاون مع "في إف إس جلوبال" تعلن عن افتتاح مركز طلب تأشيرة قبرص في الأردن في 15 سبتمبر 2016 لتلبية متطلبات التأشيرة للأشخاص المقيمين في الأردن والتخطيط لزيارة قبرص.<br/>\r\nوافتتح المركز <strong>H. E. Nafsika Krousti سفير قبرص لدى الأردن</strong>.', 'Mawared House in collaboration with VFS Global announces the opening of the Cyprus Visa Application Centre in Jordan, On the 15th September 2016 to cater the visa requirements of people residing in Jordan and planning to visit Cyprus.<br/>\r\nThe centre was inaugurated by <strong>H. E. Nafsika Krousti Ambassador of Cyprus to Jordan</strong>.', 'news_11.jpg');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statistics`
--

DROP TABLE IF EXISTS `statistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `statistics` (
  `statistics_id` int(11) NOT NULL AUTO_INCREMENT,
  `statistics_name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `statistics_value` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`statistics_id`),
  UNIQUE KEY `idstatistics_id_UNIQUE` (`statistics_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statistics`
--

LOCK TABLES `statistics` WRITE;
/*!40000 ALTER TABLE `statistics` DISABLE KEYS */;
INSERT INTO `statistics` VALUES (1,'Countries','7'),(2,'Cities','15'),(3,'Offices','22'),(4,'Visas/year','800000'),(5,'Employees','500');
/*!40000 ALTER TABLE `statistics` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-21 23:05:10
