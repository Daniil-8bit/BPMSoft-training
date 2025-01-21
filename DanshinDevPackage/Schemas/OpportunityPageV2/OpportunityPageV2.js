 define("OpportunityPageV2", ["LeadConfigurationConst", "OpportunityPageV2Resources",
		"CreateLeadForEntityUtilities", "BusinessRuleModule"],
	function(LeadConfigurationConst, BusinessRuleModule) {
		return {
			entitySchemaName: "Opportunity",
			details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
			attributes: {
				"Amount": {
					dataValueType: this.BPMSoft.DataValueType.FLOAT,
					type: this.BPMSoft.ViewModelColumnType.RESOURCE_COLUMN,
					"isRequired": true,
					"value": "Amount"
				}
			},
			modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "StatisticsContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "MetricsContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "LablelMetricsContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "move",
				"name": "LablelMetricsContainer",
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "OpportunityClient",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "remove",
				"name": "OpportunityClient",
				"properties": [
					"tip"
				]
			},
			{
				"operation": "merge",
				"name": "BantProfileHeaderContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "BantIcon",
				"values": {
					"layout": {
						"colSpan": 3,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "BantHeaderCaption",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 3,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityBudget",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityDecisionMaker",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityLeadType",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "move",
				"name": "OpportunityLeadType",
				"parentName": "BantProfile",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "OpportunityDueDate",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4
					}
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 8
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "OpportunityTitle",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "Amount",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "ResponsibleDepartment",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "move",
				"name": "ResponsibleDepartment",
				"parentName": "OpportunityPageGeneralContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "Probability",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "Owner",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 4
					}
				}
			},
			{
				"operation": "merge",
				"name": "Category",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 4
					}
				}
			},
			{
				"operation": "merge",
				"name": "CloseReason",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 7
					}
				}
			},
			{
				"operation": "move",
				"name": "CloseReason",
				"parentName": "OpportunityPageGeneralContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "merge",
				"name": "Source",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 5
					}
				}
			},
			{
				"operation": "merge",
				"name": "Type",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 5
					}
				}
			},
			{
				"operation": "move",
				"name": "Type",
				"parentName": "OpportunityPageGeneralContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "merge",
				"name": "CreatedOn",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 6
					}
				}
			},
			{
				"operation": "merge",
				"name": "Partner",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 7
					}
				}
			},
			{
				"operation": "insert",
				"name": "STRING3ce85e24-97fd-4cdf-928d-19a83702f634",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "OpportunityPageGeneralContainer"
					},
					"bindTo": "DanOpportunityINN",
					"enabled": true
				},
				"parentName": "OpportunityPageGeneralContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "merge",
				"name": "Description",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeadTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "merge",
				"name": "TacticAndCompetitorTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "CheckDate",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "ProductsTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "HistoryAccountTab",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "merge",
				"name": "NotesTab",
				"values": {
					"order": 7
				}
			},
			{
				"operation": "move",
				"name": "IsPrimary",
				"parentName": "OpportunityPageGeneralContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/,
			mixins: {},
			messages: {},
			methods: {},
			rules: {
					/*"Amount": {
						"BindParameterRequiredAmount": {
							"ruleType": BusinessRuleModule.enums.RuleType.BINDPARAMETER,
							"property": BusinessRuleModule.enums.Property.REQUIRED,
							"conditions": [
								{
									"leftExpression": {
										"type": BusinessRuleModule.enums.ValueType.CONSTANT,
										"value": "1"
									},
									"comparisonType": BPMSoft.ComparisonType.EQUAL,
									"rightExpression": {
										"type": BusinessRuleModule.enums.ValueType.CONSTANT,
										"value": "1"
									}
								}
							]
						},
					},*/
			},
			userCode: {}
		};
	});
