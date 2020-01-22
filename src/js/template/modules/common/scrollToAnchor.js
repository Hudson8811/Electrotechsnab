/**
 * Модуль "Плавный переход к якорю"
 */

export const scrollToAnchor = () => {
	$('.js-to-anchor').on('click', function (e) {
		e.preventDefault();

		const id = $(this).attr('href');
		const top = $(id).offset().top - ($(this).data('offset') || 0);

		$('body, html').animate({scrollTop: top}, 600, 'swing');
	});
};
