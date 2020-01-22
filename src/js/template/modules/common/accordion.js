/**
 * Модуль "Аккордеон"
 */

export const accordion = () => {
	const $collapseBlocks = $('.js-accordion').find('.panel-collapse');
	const togglingClass = 'panel-shadow';

	$collapseBlocks.on('show.bs.collapse hide.bs.collapse', function () {
		$(this).closest('.panel').toggleClass(togglingClass);
	});
};
