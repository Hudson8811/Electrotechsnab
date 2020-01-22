/**
 * Модуль "Bootstrap Datepicker"
 */

export const datepicker = async () => {
	await import(/* webpackChunkName: "bootstrap-datepicker" */ 'bootstrap-datepicker');
	await import(/* webpackChunkName: "bootstrap-datepicker.ru" */ 'bootstrap-datepicker/js/locales/bootstrap-datepicker.ru');
	await import(/* webpackChunkName: "jquery.inputmask" */ 'inputmask/dist/inputmask/jquery.inputmask');

	$('.js-datepicker').datepicker({
		format: 'dd.mm.yyyy',
		todayHighlight: true,
		autoclose: true,
		language: 'ru'
	}).inputmask('99.99.9999');
};
