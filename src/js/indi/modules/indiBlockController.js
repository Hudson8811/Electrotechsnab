/**
 * Модуль контроллера блоков, управляющего загрузкой js-кода,
 * необходимого для DOM элементов текущей страницы
 */

export const indiBlockController = {

	/**
	 * Аккумулятор контроллера блоков
	 */
	blocks: {},

	/**
	 * Метод проверки существования элемента DOM на текущей странице
	 * @param domElement
	 * @returns {boolean|number}
	 */
	exist(domElement) {
		return document.querySelectorAll(domElement).length;
	},

	/**
	 * Метод инициализации блока контроллера
	 * @param domElement
	 */
	init(domElement) {
		if (this.exist(domElement)) {
			this.blocks[domElement]();
		}
	},

	/**
	 * Метод переинициализации всех блоков контроллера
	 */
	initAll() {
		for (let block in this.blocks) {
			this.init(block);
		}
	},

	/**
	 * Метод добавления блока в контроллер
	 * @param block
	 * @param domElement
	 */
	add(block, domElement) {
		if (block && domElement) {
			this.blocks = {
				...this.blocks,
				[domElement]: block
			};
		}
	}
};
