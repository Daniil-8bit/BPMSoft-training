[
	{
		"operation": "insert",
		"name": "settings",
		"values": {
			"entitySchemaName": "DanApplicants",
			"details": [],
			"columnSets": [],
			"localizableStrings": {
				"SocialMessageDetailCaptionDanApplicants_caption": "Лента",
				"primaryColumnSetDanApplicants_caption": "Основная информация"
			},
			"settingsType": "RecordPage",
			"operation": "insert"
		}
	},
	{
		"operation": "insert",
		"name": "SocialMessageDetailV2StandardDetail",
		"values": {
			"caption": "SocialMessageDetailCaptionDanApplicants_caption",
			"entitySchemaName": "SocialMessage",
			"showForVisibleModule": true,
			"filter": {
				"detailColumn": "EntityId",
				"masterColumn": "Id"
			},
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "details",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "primaryColumnSet",
		"values": {
			"items": [],
			"rows": 1,
			"entitySchemaName": "DanApplicants",
			"caption": "primaryColumnSetDanApplicants_caption",
			"position": 0,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "2a8cf7d5-09de-4805-9b3d-5b5d9b655d9b",
		"values": {
			"row": 0,
			"content": "Имя",
			"columnName": "DanApplicantName",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "07aaf91e-ccde-4b31-b100-4481cc2bef10",
		"values": {
			"row": 1,
			"content": "Фамилия",
			"columnName": "DanApplicantSurname",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "b69188bb-68de-4718-ba9f-32b6d9dfa0b6",
		"values": {
			"row": 2,
			"content": "Отчетство",
			"columnName": "DanApplicantMiddlename",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 2
	}
]