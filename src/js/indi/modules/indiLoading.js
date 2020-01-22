/**
 * Модуль индикатора загрузки
 */

const template = `
	<div class="loading-layer"></div>
	<div class="loading-icon">
		${$('#loading-indicator-template').html()}
	</div>
`;

export const indiLoading = function (selector) {

	/**
	 * Показывает индикатор загрузки
	 *
	 * @return void
	 */
	this.show = function () {
		$(selector)
			.addClass('loading-indicator')
			.append(template);
	};

	/**
	 * Скрывает индикатор загрузки
	 *
	 * @return void
	 */
	this.hide = function () {
		$(selector)
			.removeClass('loading-indicator')
			.find('> .loading-layer, > .loading-icon').remove();
	};

	selector = selector || 'body';

	this.show();
};
