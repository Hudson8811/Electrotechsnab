/**
 * Модуль "Отправка формы AJAX"
 */

import {indiBlockController, indiLoading} from '../../../indi';

export const ajaxForm = function () {
	const block = this;

	this.send = function (form) {
		const $form = form;
		const formData = new FormData($form[0]);
		const container = $form.closest('.js-ajax-form');
		const containerId = container.attr('id');

		const loading = new indiLoading();
		const action = container.data('action') ? container.data('action') : $form.attr('action');

		$.ajax({
			url: action,
			type: $form.attr('method'),
			processData: false,
			contentType: false,
			data: formData,
			success: function (result) {
				const html = $(result).find('#' + containerId).html();

				container.html(html);
				indiBlockController.initAll();
				loading.hide();

				const re = container.find('.g-recaptcha');

				if (re.length > 0) {
					const reId = re.attr('id');
					grecaptcha.render(reId, {
						'sitekey': container.find('.g-recaptcha').data('sitekey')
					});
				}

				if (container.find('.notification').length > 0) {
					$('html, body').animate({
						scrollTop: container.find('.notification').offset().top
					}, 'fast');
				}

			}
		});

		return false;
	};

	$('.js-ajax-form').on('submit submitFileForm', 'form', function () {
		block.send($(this));
		return false;
	});
};
