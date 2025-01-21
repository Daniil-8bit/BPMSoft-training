 define("CasePageV2", ["FormatUtils", "NetworkUtilities", "BusinessRuleModule",
		"ConfigurationEnums", "CasesEstimateLabel", "ServiceDeskConstants", "CasePageUtilitiesV2",
		"css!CasePageV2CSS", "css!CasesEstimateLabel", "css!MiniPageViewGeneratorCSS"],
	function(FormatUtils, NetworkUtilities, BusinessRuleModule, Enums, CasesEstimateLabel, ServiceDeskConstants) {
		return {
			entitySchemaName: "Case",
			mixins: {

			},
			messages: {
				
			},
			attributes: {
				
			},
			details: /**SCHEMA_DETAILS*/{
				
			}/**SCHEMA_DETAILS*/,
			diff: /**SCHEMA_DIFF*/[
				{
					"operation": "insert",
					"name": "DanCaseNumberValue",
					"values": {
						"layout": {
							"column": 0,
							"row": 1,
							"colSpan": 11,
							"rowSpan": 1
						},
						"bindTo": "DanCaseNumberValue"
					},
					"parentName": "CaseParameters_gridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "DanCaseTextValue",
					"values": {
						"layout": {
							"column": 0,
							"row": 2,
							"colSpan": 11,
							"rowSpan": 1
						},
						"bindTo": "DanCaseTextValue"
					},
					"parentName": "CaseParameters_gridLayout",
					"propertyName": "items"
				},
				{
					"operation": "insert",
					"name": "DanCaseColorValue",
					"values": {
						"layout": {
							"column": 0,
							"row": 3,
							"colSpan": 11,
							"rowSpan": 1
						},
						"bindTo": "DanCaseColorValue"
					},
					"parentName": "CaseParameters_gridLayout",
					"propertyName": "items"
				},
				
			]/**SCHEMA_DIFF*/,
			methods: {
				
			},
			rules: {
			}
		};
	});
