[
	{
		"operation": "insert",
		"name": "settings",
		"values": {
			"entitySchemaName": "DanApplications",
			"details": [],
			"columnSets": [],
			"localizableStrings": {
				"SocialMessageDetailCaptionDanApplications_caption": "Лента",
				"primaryColumnSetDanApplications_caption": "Основная информация"
			},
			"settingsType": "RecordPage",
			"operation": "insert"
		}
	},
	{
		"operation": "insert",
		"name": "SocialMessageDetailV2StandardDetail",
		"values": {
			"caption": "SocialMessageDetailCaptionDanApplications_caption",
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
			"entitySchemaName": "DanApplications",
			"caption": "primaryColumnSetDanApplications_caption",
			"position": 0,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "904b23a0-30e1-4768-9fb9-e992a992bff1",
		"values": {
			"row": 0,
			"content": "Номер заявки",
			"columnName": "DanApplicationNumber",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "ce9e3fc3-b697-44af-a91e-3bba14fec2ac",
		"values": {
			"row": 1,
			"content": "Тип заявки",
			"columnName": "DanApplicationType",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "d61025a0-82df-424b-9455-0f1009277a8b",
		"values": {
			"row": 2,
			"content": "Описание заявки",
			"columnName": "DanApplicationDescription",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 2
	}
]