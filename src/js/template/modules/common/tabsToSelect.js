/**
 * Модуль "Табы на мобильном (в селект)"
 */

export const tabsToSelect = () => {
	$('.js-tab-select').on('change', function () {
		$(`[data-toggle="tab"][href="${$(this).val()}"]`).trigger('click');
	});
};
