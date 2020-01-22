/**
 * Модуль "Magnific Popup для галереи"
 */

export const magnificPopupGallery = async () => {
	await import(/* webpackChunkName: "magnific-popup" */ 'magnific-popup');

	$('.js-mp-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		}
	});
};
