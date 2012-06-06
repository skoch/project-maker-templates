<?php

	session_name( "${project_name}" );
	session_start();
	$session_id = session_id();

	$baseurl = "./";

	define( 'IS_DEV', true );

?>
<!DOCTYPE html>
<html>
	<head>
		<title>${project_name}</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link rel="stylesheet" type="text/css" media="screen" href="includes/css/master.css" />

		<script src="./includes/js/swfobject-2.2.js" type="text/javascript"></script>
		<script type="text/javascript">

			var swfDiv = "swfContainer";

			function onSwfObjectLoad()
			{
				document.getElementById( swfDiv ).style.display = "block";
			};
			function embedSWF()
			{
				var attributes = {
					id:swfDiv,
					name:swfDiv
				};
				var flashvars = {
					session_id : "<?php echo $session_id; ?>",
					baseurl : "<?php echo $baseurl; ?>"
				};
				var params = {
					menu:false,
					scale : "noscale",
					quality:"high",
					allowScriptAccess : "always",
					wmode:"opaque"
				};
				swfobject.embedSWF( "main.swf", swfDiv, "640", "480", "10", "", flashvars, params, attributes, onSwfObjectLoad );
			};
		</script>
</head>

	<body onload="embedSWF();">
		<div id="main">
			<div id="flashContainer">
				<div id="swfContainer">
					<img src="includes/img/bss_logo.png" alt="No Flash" />
				</div>
				<noscript> Get Flash and/or enable Javascript. </noscript>
			</div>
		</div>

		<script type="text/javascript">
			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', '${GA_account}']);
			_gaq.push(['_trackPageview']);
			_gaq.push(['_trackPageLoadTime']);

			(function() {
				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();
		</script>

	</body>
</html>
