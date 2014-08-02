$(document).ready(function() {
	$("script[type='text/works-gallery']").each(function(index, value) {
		console.log(index);
		var $container = $(this),
			$widget,
			content = $container.text(),
			eachrow = 7,
			row = 0;

		content.trim();
		content = JSON.parse(content);
		var html = '';
		for (var i in content['works']) {
			var item = content['works'][i],
				tag = '',
				header = '',
				inner = '',
				links = '';
			header = '<a class="image" style="background-image: url(' + item.cover + ')"></a>';
			header = '<div class="header">' + header + '</div>';
			inner = '<h3>' + item.title + '</h3><hr/>';
			inner += '<p class="description">' + item.description + '</p>';
			if (item.demo) {
				for (var j in item.demo)
					links += '<li><a href="' + item.demo[j] + '">Demo</a></li>';
			}
			if (item.video) {
				for (var j in item.video)
					links += '<li><a href="' + item.video[j] + '">Video</a></li>';
			}
			if (item.download) {
				for (var j in item.download)
					links += '<li><a href="' + item.download[j] + '">Download</a></li>';
			}
			if (item.link) {
				for (var j in item.link)
					links += '<li><a href="' + item.link[j] + '">Link</a></li>';
			}
			links = '<ul class="links">' + links + '</ul>';
			inner += links;
			inner = '<div class="inner">' + inner + '<div>';
			tag = header + inner;
			tag = '<li>' + tag + '</li>';
			html += tag;
		}
		html = '<ul class="wg-item">' + html + '</ul>';
		html = '<div class="wg-container"><hr/>' + html + '</div>';

		$widget = $(html);

		$container.after($widget);
	});
});