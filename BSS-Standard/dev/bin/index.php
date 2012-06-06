<?php
	define( 'IS_DEV', true );
?>
<!DOCTYPE html>
<html>
	<head>
		<title>${project_name}</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link rel="stylesheet" type="text/css" media="screen" href="includes/css/master.css" />

		<script type="text/javascript" src="includes/js/libs/modernizr.js"></script>
		<script type="text/javascript">
			Modernizr.load({
				test: Modernizr.csstransitions,
				nope: [
					'includes/js/libs/jquery.min.js',
					'includes/js/libs/jquery.easing.js'
				],
				load: [
					'includes/js/libs/jquery.min.js',
					<?php if( IS_DEV ): ?>'includes/js/${project_name}.js'
					<?php else: ?>'includes/js/${project_name}.min.js'
					<?php endif; ?>

				],
				complete: function()
				{
					${project_name}.init();
				}
			});
		</script>
</head>

	<body>
		<div id="container">
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
