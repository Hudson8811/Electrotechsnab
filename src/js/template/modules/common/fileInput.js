/**
 * Модуль "Bootstrap custom file input"
 */

export const fileInput = async () => {
	const {default: bsCustomFileInput} = await import(/* webpackChunkName: "bs-custom-file-input" */ 'bs-custom-file-input');

	bsCustomFileInput.init();
};
