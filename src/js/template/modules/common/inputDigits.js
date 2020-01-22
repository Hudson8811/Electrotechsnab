/**
 * Модуль "Ввод цифр в input"
 */

export const inputDigits = () => {
	$('.js-input-digits').on('keypress', function (e) {
		if (!/\d/.test(e.key)) {
			e.preventDefault();
		}
	});
};
