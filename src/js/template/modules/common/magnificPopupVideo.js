/**
 * Модуль "Magnific Popup для видео"
 */

export const magnificPopupVideo = async () => {
	await import(/* webpackChunkName: "magnific-popup" */ 'magnific-popup');

	$('.js-mp-video').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
};
