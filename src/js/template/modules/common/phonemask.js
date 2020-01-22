/**
 * Модуль "Инициализация маски для телефонов"
 */

export const phonemask = async () => {
	await import(/* webpackChunkName: "jquery.inputmask" */ 'inputmask/dist/inputmask/jquery.inputmask');

	$('input[type="tel"]').inputmask('+7 (999) 999-99-99', {
		showMaskOnHover: false
	});
};
