/**
 * Модуль "Magnific Popup для изображений"
 */

export const magnificPopupImage = async () => {
	await import(/* webpackChunkName: "magnific-popup" */ 'magnific-popup');

	$('.js-mp-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
	});
};
