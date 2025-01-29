namespace BPMSoft.Configuration
{

	using BPMSoft.Common;
	using BPMSoft.Core;
	using BPMSoft.Core.Configuration;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;

	#region Class: OpenIdSysUserInRoleEventListenerSchema

	/// <exclude/>
	public class OpenIdSysUserInRoleEventListenerSchema : BPMSoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public OpenIdSysUserInRoleEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public OpenIdSysUserInRoleEventListenerSchema(OpenIdSysUserInRoleEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("1924c96a-4424-4b42-8958-8df3c4ce8fee");
			Name = "OpenIdSysUserInRoleEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("5daf09f1-167a-4d95-90ab-547ed370e530");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,0,3,229,85,193,110,26,49,16,61,131,148,127,152,110,47,139,132,150,123,66,144,18,154,166,72,161,169,2,201,165,234,193,172,7,214,237,174,189,178,189,164,180,226,223,59,182,119,55,144,130,144,210,99,37,132,196,120,222,204,123,51,207,70,178,2,77,201,82,132,235,47,211,153,90,218,100,172,228,82,172,42,205,172,80,50,185,47,81,78,248,85,101,179,179,238,239,179,110,167,50,66,174,96,182,49,22,139,139,246,247,11,182,40,148,60,20,215,152,220,72,43,172,64,115,226,56,185,89,163,180,199,178,62,178,212,42,93,87,161,207,123,141,43,226,9,227,156,25,115,14,129,46,209,123,52,168,39,242,65,229,232,203,221,9,34,44,81,159,117,9,243,213,183,218,236,29,196,179,52,195,130,125,166,113,192,37,68,123,21,162,222,55,66,149,213,34,23,41,164,174,209,201,62,112,14,215,204,96,104,116,255,76,145,87,52,58,110,152,78,64,171,96,138,54,83,156,52,124,209,202,98,106,145,55,25,101,19,128,181,208,182,98,57,172,149,224,48,206,48,253,49,102,114,170,184,88,110,28,133,41,22,11,146,18,186,130,217,99,231,99,61,240,109,59,107,166,161,114,103,156,196,30,200,75,110,209,206,55,37,242,177,202,171,66,62,177,188,194,225,109,37,248,40,110,71,195,163,222,69,91,76,19,244,141,197,30,60,116,183,152,99,70,46,148,164,217,13,230,112,209,199,189,164,23,240,154,229,130,51,242,8,225,188,41,130,99,60,139,225,36,236,205,149,25,103,76,174,240,169,201,30,197,53,1,177,132,248,93,91,36,161,249,134,204,23,2,241,62,191,126,61,201,126,61,132,94,51,100,79,7,181,86,122,138,198,176,149,51,150,196,103,184,83,41,149,255,197,22,57,206,172,38,135,191,42,152,60,160,81,149,78,233,84,105,130,245,33,148,235,68,167,92,23,245,33,250,171,186,113,26,108,48,201,85,94,4,159,120,62,137,95,69,212,75,230,170,38,82,207,160,99,51,173,158,61,217,155,159,41,150,142,85,188,171,164,206,219,186,239,109,107,100,148,60,120,249,184,181,253,29,242,151,176,51,24,12,96,104,170,162,96,122,51,250,196,36,207,209,0,6,235,78,36,9,180,238,242,163,211,151,12,7,77,98,139,44,153,102,5,72,186,175,151,145,161,206,164,126,228,135,1,225,23,97,124,202,97,4,70,163,121,134,212,31,17,82,141,203,203,104,126,126,228,53,242,140,174,113,73,81,95,255,74,175,76,4,131,17,8,105,44,147,244,114,166,74,90,38,164,163,107,51,108,250,121,230,64,46,98,123,84,234,103,68,173,105,158,130,99,184,202,247,178,85,28,171,197,119,242,65,173,162,15,7,251,3,54,38,91,208,43,147,236,194,27,92,179,163,163,175,68,253,76,244,2,32,100,111,79,175,230,3,230,248,95,109,166,17,252,182,197,180,232,127,221,203,145,59,182,173,255,6,119,226,20,130,238,31,12,82,42,103,216,7,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateCantModifyAlmRoleMessageLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateCantModifyAlmRoleMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("0ce50dac-8e62-7139-ffcb-c63dc6a1c41e"),
				Name = "CantModifyAlmRoleMessage",
				CreatedInPackageId = new Guid("5daf09f1-167a-4d95-90ab-547ed370e530"),
				CreatedInSchemaUId = new Guid("1924c96a-4424-4b42-8958-8df3c4ce8fee"),
				ModifiedInSchemaUId = new Guid("1924c96a-4424-4b42-8958-8df3c4ce8fee")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("1924c96a-4424-4b42-8958-8df3c4ce8fee"));
		}

		#endregion

	}

	#endregion

}

