/**
 * Модуль "Selectize"
 */

export const selectize = async () => {
	await import(/* webpackChunkName: "selectize" */ 'selectize');

	$('.js-select').selectize();
	$('.selectize-input input').prop('readonly', true);
};
