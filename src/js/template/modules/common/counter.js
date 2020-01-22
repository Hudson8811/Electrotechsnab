/**
 * Модуль "Счетчик"
 */

class Counter {
	constructor(initialValue, minValue) {
		this.value = initialValue;
		this.minValue = minValue;
	}

	inc() {
		this.value++;
	}

	dec() {
		if (this.value > this.minValue) {
			this.value--;
		}
	}
}

class CounterInput extends Counter {
	constructor($inputSelector) {
		super();

		this.$inputSelector = $inputSelector;
		this.value = this.$inputSelector.val();
		this.minValue = this.$inputSelector.data('min');
	}

	set inputValue(value) {
		if (value >= this.minValue) {
			this.value = value;
			this.$inputSelector.val(this.value);
		}
	}

	inc() {
		super.inc();
		this.inputValue = this.value;
	}

	dec() {
		super.dec();
		this.inputValue = this.value;
	}
}

export const counter = () => {
	$('.js-counter').each(function () {
		const $container = $(this);
		const $input = $container.find('.counter-input');
		const $plus = $container.find('.counter-plus');
		const $minus = $container.find('.counter-minus');

		const counter = new CounterInput($input);

		$plus.on('click', function () {
			counter.inc();
		});

		$minus.on('click', function () {
			counter.dec();
		});

		$input.on('input', function (e) {
			if (e.target.value.match(/[^0-9]/g)) {
				e.target.value = e.target.value.replace(/[^0-9]/g, '');
			}

			if (e.target.value === '' || e.target.value < $(this).data('min')) {
				e.target.value = $(this).data('min');
			}

			counter.inputValue = e.target.value;
		});
	});
};
