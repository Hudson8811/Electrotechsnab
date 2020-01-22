/**
 * Модуль "Переключение текста при клике"
 */

export const toggleText = () => {
	$('.js-toggle-text').on('click', function () {
		const text = $(this).data('text');
		$(this).data('text', $(this).text());
		$(this).text(text);
	});
};
