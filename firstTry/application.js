jQuery(document).ready(function() {
	$('button').on('click', function() {
		var bored = $('<br><br><a href="http://2048game.com/">Well go play 2048 then!</a>');
		$('body').append(bored);
		$('button').remove();
	})
}
