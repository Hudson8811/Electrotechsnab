/**
 * Модуль "Переключатель для поля ввода пароля"
 */

const toggle = ($field, $state) => {
	const togglingClass = 'icon-eye-closed';
	const fieldState = {
		shown: 'text',
		hidden: 'password'
	};

	if ($state.hasClass(togglingClass)) {
		$field.prop('type', fieldState.hidden);
	} else {
		$field.prop('type', fieldState.shown);
	}

	$state.toggleClass(togglingClass);
};

export const dropEye = () => {
	$('.js-drop-eye').on('click', function () {
		const $dropEyeIcon = $(this).find('.icon-eye');
		const $passwordField = $dropEyeIcon.closest('.input-group').find('input');
		toggle($passwordField, $dropEyeIcon);
	});
};
