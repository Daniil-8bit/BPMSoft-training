 define("DanLimitedNumber", [], function () {
	/* Объявление класса элемента управления. */
	Ext.define("BPMSoft.controls.DanLimitedNumber", {
		/* Базовый класс. */
		extend: "BPMSoft.controls.IntegerEdit",
		/* Псевдоним (сокращенное название класса). */
		alternateClassName: "BPMSoft.DanLimitedNumber",
		/* Наименьшее допустимое значение (нижняя граница). */
		minLimit: -1000,
		/* Наибольшее допустимое значение (верхняя граница). */
		maxLimit: 1000,
		/**
	 	 * Метод проверки на вхождение в диапазон допустимых значений.
 		 * @param {number} numericValue – проверяемое значение
 		 * @returns {boolean} Входит ли число в диапазон допустимых значений
 		 */
		isOutOfLimits: function (numericValue) {
			return numericValue < this.minLimit || numericValue > this.maxLimit;
		},
		/**
		 * Переопределение метода-обработчика события нажатия клавиши.
		 */
		onKeyUp: function () {
			/* Вызов базовой функциональности. */
			this.callParent(arguments);
			/* Получение введенного значения. */
			let value = this.getTypedValue();
			/* Приведение к числовому типу. */
			let numericValue = this.parseNumber(value);
			/* Проверка на вхождение в диапазон допустимых значений. */
			if (this.isOutOfLimits(numericValue)) {
				/* Формирование предупреждающего сообщения. */
				let msg = "Значение " + numericValue + " не входит в рекомендуемый диапазон [" + this.minLimit + ", " + this.maxLimit + "]";
				/* Изменение конфигурационного объекта для показа предупреждающего сообщения. */
				this.validationInfo.isValid = false;
				this.validationInfo.invalidMessage = msg;
			}
			else{
				/* Изменение конфигурационного объекта для скрытия предупреждающего сообщения. */
				this.validationInfo.isValid = true;
				this.validationInfo.invalidMessage ="";
			}
			/* Вызов логики отображения предупреждающего сообщения. */
			this.setMarkOut();
		},
	});
});