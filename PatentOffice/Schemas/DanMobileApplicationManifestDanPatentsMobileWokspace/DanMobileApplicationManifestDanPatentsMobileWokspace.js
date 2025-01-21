{
	"SyncOptions": {
		"SysSettingsImportConfig": [
			"DefaultMessageLanguage"
		],
		"ModelDataImportConfig": [
			{
				"Name": "Contact",
				"SyncColumns": [
					"Name"
				]
			},
			{
				"Name": "SysLanguage",
				"SyncColumns": []
			},
			{
				"Name": "SocialMessage",
				"SyncColumns": [
					"EntityId"
				]
			},
			{
				"Name": "Account",
				"SyncColumns": [
					"Name"
				]
			},
			{
				"Name": "Activity",
				"SyncColumns": [
					"Title",
					"StartDate",
					"DueDate",
					"Priority",
					"ActivityCategory",
					"Status"
				]
			},
			{
				"Name": "ActivityPriority",
				"SyncColumns": []
			},
			{
				"Name": "ActivityType",
				"SyncColumns": []
			},
			{
				"Name": "ActivityCategory",
				"SyncColumns": []
			},
			{
				"Name": "ActivityStatus",
				"SyncColumns": []
			},
			{
				"Name": "CallDirection",
				"SyncColumns": []
			},
			{
				"Name": "DanApplicants",
				"SyncColumns": [
					"DanApplicantName",
					"DanApplicantSurname",
					"DanApplicantMiddlename"
				]
			},
			{
				"Name": "DanApplications",
				"SyncColumns": [
					"DanApplicationNumber",
					"DanApplicationType",
					"DanApplicationDescription"
				]
			},
			{
				"Name": "DanApplicationTypes",
				"SyncColumns": []
			}
		]
	},
	"Modules": {
		"Contact": {
			"Group": "main",
			"Model": "Contact",
			"Position": 0,
			"isStartPage": false,
			"Title": "ContactSectionTitle",
			"Hidden": true
		},
		"Account": {
			"Group": "main",
			"Model": "Account",
			"Position": 1,
			"isStartPage": false,
			"Title": "AccountSectionTitle",
			"Hidden": true
		},
		"Activity": {
			"Group": "main",
			"Model": "Activity",
			"Position": 2,
			"isStartPage": false,
			"Title": "ActivitySectionTitle",
			"Hidden": true
		},
		"SocialMessage": {
			"Group": "main",
			"Model": "SocialMessage",
			"Position": 3,
			"isStartPage": false,
			"Title": "SocialMessageSectionTitle",
			"Hidden": true
		},
		"DanApplicants": {
			"Group": "main",
			"Model": "DanApplicants",
			"Position": 5,
			"isStartPage": false,
			"Title": "DanApplicantsSectionTitle",
			"Hidden": false
		},
		"DanApplications": {
			"Group": "main",
			"Model": "DanApplications",
			"Position": 6,
			"isStartPage": false,
			"Title": "DanApplicationsSectionTitle",
			"Hidden": false
		},
		"SysDashboard": {
			"Hidden": true
		}
	},
	"Models": {
		"Contact": {
			"RequiredModels": [
				"Contact",
				"SysLanguage",
				"SocialMessage"
			],
			"ModelExtensions": [],
			"PagesExtensions": []
		},
		"Account": {
			"RequiredModels": [
				"Account",
				"SocialMessage"
			],
			"ModelExtensions": [],
			"PagesExtensions": []
		},
		"Activity": {
			"RequiredModels": [
				"Activity",
				"ActivityPriority",
				"ActivityType",
				"ActivityCategory",
				"ActivityStatus",
				"CallDirection",
				"SocialMessage"
			],
			"ModelExtensions": [],
			"PagesExtensions": []
		},
		"SocialMessage": {
			"RequiredModels": [],
			"ModelExtensions": [],
			"PagesExtensions": []
		},
		"DanApplicants": {
			"RequiredModels": [
				"DanApplicants",
				"SocialMessage"
			],
			"ModelExtensions": [],
			"PagesExtensions": [
				"DanMobileDanApplicantsActionsSettingsDanPatentsMobileWokspace",
				"DanMobileDanApplicantsGridPageSettingsDanPatentsMobileWokspace",
				"DanMobileDanApplicantsRecordPageSettingsDanPatentsMobileWokspace"
			]
		},
		"DanApplications": {
			"RequiredModels": [
				"DanApplications",
				"SocialMessage",
				"DanApplicationTypes"
			],
			"ModelExtensions": [],
			"PagesExtensions": [
				"DanMobileDanApplicationsActionsSettingsDanPatentsMobileWokspace",
				"DanMobileDanApplicationsGridPageSettingsDanPatentsMobileWokspace",
				"DanMobileDanApplicationsRecordPageSettingsDanPatentsMobileWokspace"
			]
		}
	},
	"ModuleGroups": {
		"main": {}
	},
	"UseUTC": true
}