/**
 * Модуль "Selectize"
 */

export const selectize = async () => {
	await import(/* webpackChunkName: "selectize" */ 'selectize');

	$('.js-select:not([multiple])').selectize();
	$('.js-select[multiple]').selectize({
		plugins: ['remove_button']
	});
	$('.selectize-input input').prop('readonly', true);
};
