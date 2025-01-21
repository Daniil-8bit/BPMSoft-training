define("DanApplicants1Page", [], function() {
	return {
		entitySchemaName: "DanApplicants",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{
			"Indicator8c427b96-003b-4e62-9f37-b356f417839c": {
				"moduleId": "Indicator8c427b96-003b-4e62-9f37-b356f417839c",
				"moduleName": "CardWidgetModule",
				"config": {
					"parameters": {
						"viewModelConfig": {
							"widgetKey": "Indicator8c427b96-003b-4e62-9f37-b356f417839c",
							"recordId": "773ab73b-a8b2-482d-8428-65948f63a8b0",
							"primaryColumnValue": {
								"getValueMethod": "getPrimaryColumnValue"
							}
						}
					}
				}
			},
			"Indicator38bef1b0-2b12-4586-bc36-f7ae171e8eea": {
				"moduleId": "Indicator38bef1b0-2b12-4586-bc36-f7ae171e8eea",
				"moduleName": "CardWidgetModule",
				"config": {
					"parameters": {
						"viewModelConfig": {
							"widgetKey": "Indicator38bef1b0-2b12-4586-bc36-f7ae171e8eea",
							"recordId": "773ab73b-a8b2-482d-8428-65948f63a8b0",
							"primaryColumnValue": {
								"getValueMethod": "getPrimaryColumnValue"
							}
						}
					}
				}
			},
			"Indicatorc099abfa-6160-4db9-801a-1f6722d09585": {
				"moduleId": "Indicatorc099abfa-6160-4db9-801a-1f6722d09585",
				"moduleName": "CardWidgetModule",
				"config": {
					"parameters": {
						"viewModelConfig": {
							"widgetKey": "Indicatorc099abfa-6160-4db9-801a-1f6722d09585",
							"recordId": "773ab73b-a8b2-482d-8428-65948f63a8b0",
							"primaryColumnValue": {
								"getValueMethod": "getPrimaryColumnValue"
							}
						}
					}
				}
			},
			"Indicator447ff939-3944-4bb9-8deb-dae00230c246": {
				"moduleId": "Indicator447ff939-3944-4bb9-8deb-dae00230c246",
				"moduleName": "CardWidgetModule",
				"config": {
					"parameters": {
						"viewModelConfig": {
							"widgetKey": "Indicator447ff939-3944-4bb9-8deb-dae00230c246",
							"recordId": "773ab73b-a8b2-482d-8428-65948f63a8b0",
							"primaryColumnValue": {
								"getValueMethod": "getPrimaryColumnValue"
							}
						}
					}
				}
			},
			"Indicator610f5283-71f4-4e3b-b37f-26bb0641290f": {
				"moduleId": "Indicator610f5283-71f4-4e3b-b37f-26bb0641290f",
				"moduleName": "CardWidgetModule",
				"config": {
					"parameters": {
						"viewModelConfig": {
							"widgetKey": "Indicator610f5283-71f4-4e3b-b37f-26bb0641290f",
							"recordId": "773ab73b-a8b2-482d-8428-65948f63a8b0",
							"primaryColumnValue": {
								"getValueMethod": "getPrimaryColumnValue"
							}
						}
					}
				}
			},
			"WebPaged32141d3-4341-4477-aff4-9c87f4b8f783": {
				"moduleId": "WebPaged32141d3-4341-4477-aff4-9c87f4b8f783",
				"moduleName": "CardWidgetModule",
				"config": {
					"parameters": {
						"viewModelConfig": {
							"widgetKey": "WebPaged32141d3-4341-4477-aff4-9c87f4b8f783",
							"recordId": "773ab73b-a8b2-482d-8428-65948f63a8b0",
							"primaryColumnValue": {
								"getValueMethod": "getPrimaryColumnValue"
							}
						}
					}
				}
			},
			"Gauge43d4d914-128c-4c5b-9e82-e6682fed5ed3": {
				"moduleId": "Gauge43d4d914-128c-4c5b-9e82-e6682fed5ed3",
				"moduleName": "CardWidgetModule",
				"config": {
					"parameters": {
						"viewModelConfig": {
							"widgetKey": "Gauge43d4d914-128c-4c5b-9e82-e6682fed5ed3",
							"recordId": "773ab73b-a8b2-482d-8428-65948f63a8b0",
							"primaryColumnValue": {
								"getValueMethod": "getPrimaryColumnValue"
							}
						}
					}
				}
			},
			"Chartc6d1decc-b633-46c7-878c-32646d77b935": {
				"moduleId": "Chartc6d1decc-b633-46c7-878c-32646d77b935",
				"moduleName": "CardWidgetModule",
				"config": {
					"parameters": {
						"viewModelConfig": {
							"widgetKey": "Chartc6d1decc-b633-46c7-878c-32646d77b935",
							"recordId": "773ab73b-a8b2-482d-8428-65948f63a8b0",
							"primaryColumnValue": {
								"getValueMethod": "getPrimaryColumnValue"
							}
						}
					}
				}
			}
		}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "DanApplicantsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "DanApplicants"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Gauge43d4d914-128c-4c5b-9e82-e6682fed5ed3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 3,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer",
						"useFixedColumnHeight": true
					},
					"itemType": 4,
					"classes": {
						"wrapClassName": [
							"card-widget-grid-layout-item"
						]
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGe9bf519c-054c-4ea3-b3a5-6104469f13c4",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "DanApplicantSurname",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebPaged32141d3-4341-4477-aff4-9c87f4b8f783",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 7,
						"column": 0,
						"row": 10,
						"layoutName": "Header",
						"useFixedColumnHeight": true
					},
					"itemType": 4,
					"classes": {
						"wrapClassName": [
							"card-widget-grid-layout-item"
						]
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING2916559e-094f-4037-b0a3-56f6b0db426a",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "DanApplicantName",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING458fdc95-eab9-4bbb-abf9-31253e6366cb",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "DanApplicantMiddlename",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Chartc6d1decc-b633-46c7-878c-32646d77b935",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 6,
						"column": 0,
						"row": 3,
						"layoutName": "Header",
						"useFixedColumnHeight": true
					},
					"itemType": 4,
					"classes": {
						"wrapClassName": [
							"card-widget-grid-layout-item"
						]
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Indicator8c427b96-003b-4e62-9f37-b356f417839c",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 3,
						"column": 13,
						"row": 0,
						"layoutName": "Header",
						"useFixedColumnHeight": true
					},
					"itemType": 4,
					"classes": {
						"wrapClassName": [
							"card-widget-grid-layout-item"
						]
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Indicator38bef1b0-2b12-4586-bc36-f7ae171e8eea",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 3,
						"column": 13,
						"row": 3,
						"layoutName": "Header",
						"useFixedColumnHeight": true
					},
					"itemType": 4,
					"classes": {
						"wrapClassName": [
							"card-widget-grid-layout-item"
						]
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Indicatorc099abfa-6160-4db9-801a-1f6722d09585",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 3,
						"column": 20,
						"row": 3,
						"layoutName": "Header",
						"useFixedColumnHeight": true
					},
					"itemType": 4,
					"classes": {
						"wrapClassName": [
							"card-widget-grid-layout-item"
						]
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Indicator610f5283-71f4-4e3b-b37f-26bb0641290f",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 3,
						"column": 13,
						"row": 6,
						"layoutName": "Header",
						"useFixedColumnHeight": true
					},
					"itemType": 4,
					"classes": {
						"wrapClassName": [
							"card-widget-grid-layout-item"
						]
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Indicator447ff939-3944-4bb9-8deb-dae00230c246",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 3,
						"column": 20,
						"row": 6,
						"layoutName": "Header",
						"useFixedColumnHeight": true
					},
					"itemType": 4,
					"classes": {
						"wrapClassName": [
							"card-widget-grid-layout-item"
						]
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "DanNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 1
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
