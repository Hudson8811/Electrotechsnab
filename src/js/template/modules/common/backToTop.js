/**
 * Модуль "Возврат наверх"
 */

export const backToTop = () => {
	const $backToTop = $('.js-back-to-top');
	const shownClass = 'shown';
	let lastScrollTop = 0;

	$backToTop.on('click', function () {
		$('body, html').animate({scrollTop: 0}, 500, 'swing');
	});

	$(window).on('scroll', function () {
		const scrollTop = $(this).scrollTop();

		if (scrollTop > 1000) {
			if (lastScrollTop > scrollTop) {
				$backToTop.addClass(shownClass);
			} else {
				$backToTop.removeClass(shownClass);
			}
		} else {
			$backToTop.removeClass(shownClass);
		}

		lastScrollTop = scrollTop;
	});
};
