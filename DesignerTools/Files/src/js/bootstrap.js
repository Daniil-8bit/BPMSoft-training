(function() {
	require.config({
		paths: {
			"page-wizard-component": BPMSoft.getFileContentUrl("DesignerTools", "src/js/page-wizard-component.js")
		},
		shim: {
			"page-wizard-component": {
				deps: ["ng-core"]
			}
		}
	});
}());
