/**
 * Модуль "Мобильное меню"
 */

export const mobileMenu = () => {
	const $menuBar = $('.js-menu-bar');
	const togglingClass = 'mobile-menu_active';
	const activeClass = 'active';
	const $body = $('body');

	$(document).on('click', '.js-menu-bar, .mobile-menu__backdrop', function () {
		$body.toggleClass(togglingClass);
		$menuBar.toggleClass(activeClass);
	});

	$(window).on('resize', function () {
		if ($body.hasClass(togglingClass)) {
			if ($(this).width() >= 992) {
				$body.removeClass(togglingClass);
				$menuBar.removeClass(activeClass);
			}
		}
	});
};
