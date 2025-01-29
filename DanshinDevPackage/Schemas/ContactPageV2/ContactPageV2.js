 define("ContactPageV2", ["DanLimitedNumber"],
	function() {
		return {
			entitySchemaName: "Contact",
			attributes:{
				/* Атрибут, который привязан к минимальному значению UsrScore. */
				"DanScoreMin": {
					"dataValueType": this.BPMSoft.DataValueType.INTEGER,
					"type": this.BPMSoft.ViewModelColumnType.VIRTUAL_COLUMN,
					"value": 0
				},
				/* Атрибут, который привязан к максимальному значению UsrScore. */
				"DanScoreMax": {
					"dataValueType": this.BPMSoft.DataValueType.INTEGER,
					"type": this.BPMSoft.ViewModelColumnType.VIRTUAL_COLUMN,
					"value": 1000
				}
		    },
			details: /**SCHEMA_DETAILS*/{
				
			}/**SCHEMA_DETAILS*/,
			methods:{
				usrScoreValidator: function() {
					/* Variable for storing a validation error message. */
					let invalidMessage = "";
					let score = this.get("UsrScore");
					let max = this.get("DanScoreMaxLimit");
					let min = this.get("DanScoreMinLimit");
					if (score  < min || score  > max) {
						invalidMessage = "Значение " + score + " не входит в рекомендуемый диапазон [" + min + ", " + max + "]";
					}
					return {
						invalidMessage: invalidMessage
					};
				},
				setValidationConfig: function() {
					this.callParent(arguments);
					this.addColumnValidator("DanScore", this.usrScoreValidator);
				},
				getMinLimit: function() {
					return this.get("DanScoreMin");
				},
				getMaxLimit: function() {
					return this.get("DanScoreMax");
				}
			},
			diff: /**SCHEMA_DIFF*/[
				{
				/* Операция добавления подписи к компоненту на страницу. */
				"operation": "insert",
				/* Мета-имя родительского контейнера, в который добавляется надпись. */
				"parentName": "ContactGeneralInfoBlock",
				/* Надпись добавляется в коллекцию компонентов родительского элемента. */
				"propertyName": "items",
				"name": "DanScoresLabel",
				"values": {
					/* Тип элемента — надпись. */
					"contentType": BPMSoft.ContentType.LABEL,
					/* Локализуемая строка с названием для поля элемента управления. */
					"caption": {"bindTo": "Resources.Strings.LimitNumberCaption"},
					/* Свойства расположения надписи в контейнере. */
					"layout": {
						"colSpan": 3,
						"rowSpan": 1,
						"column": 0,
						"row": 10
					}
				}
				},
				{
					/* Операция добавления компонента на страницу. */
					"operation": "insert",
					/* Мета-имя родительского контейнера, в который добавляется поле. */
					"parentName": "ContactGeneralInfoBlock",
					/* Поле добавляется в коллекцию компонентов родительского элемента. */
					"propertyName": "items",
					/* Имя колонки схемы, к которой привязан компонент. */
					"name": "DanScore",
					"values": {
						/* Тип элемента — компонент. */
						"itemType": BPMSoft.ViewItemType.COMPONENT,
						/* Название класса. */
						"className": "BPMSoft.DanLimitedNumber",
						/* Свойство value компонента связано с колонкой UsrScores. */
						"value": { "bindTo": "DanScore" },
						/* Значения свойства minLimit для нижней границы значения поля. */
						"minLimit": { "bindTo": "getMinLimit" },
						/* Значения свойства maxLimit для верхней границы значения поля. */
						"maxLimit": { "bindTo": "getMaxLimit" },
						/* Свойства расположения компонента в контейнере. */
						"layout": {
							"colSpan": 4,
							"rowSpan": 1,
							"column": 3,
							"row": 10
						}
					},
				}
			]/**SCHEMA_DIFF*/
		};
	});
