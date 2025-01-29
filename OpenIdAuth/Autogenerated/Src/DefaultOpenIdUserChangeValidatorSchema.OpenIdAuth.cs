namespace BPMSoft.Configuration
{

	using BPMSoft.Common;
	using BPMSoft.Core;
	using BPMSoft.Core.Configuration;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;

	#region Class: DefaultOpenIdUserChangeValidatorSchema

	/// <exclude/>
	public class DefaultOpenIdUserChangeValidatorSchema : BPMSoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public DefaultOpenIdUserChangeValidatorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public DefaultOpenIdUserChangeValidatorSchema(DefaultOpenIdUserChangeValidatorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8ec53e46-ef7a-45a0-abd4-217bf5a8fdf0");
			Name = "DefaultOpenIdUserChangeValidator";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("cafc62fc-f7d7-4a5d-acf5-62f836ef940a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,0,3,141,83,203,106,235,48,16,93,39,208,127,152,235,110,108,8,254,128,190,32,113,154,226,69,218,128,219,110,74,185,40,214,216,22,216,146,209,163,96,66,254,253,202,146,155,198,151,132,102,169,25,157,199,204,145,128,147,6,85,75,114,132,197,102,157,137,66,199,137,224,5,43,141,36,154,9,30,191,180,200,83,58,55,186,186,154,238,174,166,19,163,24,47,33,235,148,198,230,246,112,254,193,74,60,93,141,31,185,102,154,161,58,211,94,145,92,11,233,251,246,198,181,196,210,202,67,82,19,165,110,96,137,5,49,181,246,102,222,20,202,164,34,188,196,119,82,51,74,44,206,97,62,134,91,11,198,169,229,15,117,215,162,40,194,244,44,42,138,62,45,172,53,219,154,229,144,247,74,191,10,193,13,156,231,179,100,59,231,228,96,127,141,186,18,212,14,176,113,34,190,57,8,110,133,168,33,33,220,147,244,116,161,227,20,156,99,222,239,30,204,232,56,3,183,194,14,84,167,230,180,97,252,141,51,189,22,148,21,12,105,4,125,56,147,201,147,97,212,225,82,10,247,39,111,198,79,168,95,237,102,104,34,106,211,112,107,222,224,93,15,123,8,131,148,6,209,173,227,249,34,18,84,94,97,67,44,205,216,135,79,178,203,92,119,77,56,41,81,246,164,41,87,154,240,28,23,221,179,125,83,97,144,29,137,143,104,143,234,189,71,199,19,39,18,137,70,79,29,142,5,7,172,210,210,166,250,241,9,127,115,231,92,189,138,21,234,188,178,28,59,8,92,40,203,204,108,131,25,4,115,139,251,194,0,246,30,201,10,8,255,28,203,198,14,184,146,162,89,46,194,81,195,79,21,111,36,107,136,236,252,138,226,126,158,217,176,213,217,255,242,209,247,234,39,18,181,145,28,180,52,232,117,247,7,117,239,61,78,213,179,169,235,23,249,216,180,118,202,145,240,169,84,60,202,230,242,51,92,116,153,220,165,185,247,111,208,242,15,251,138,224,126,252,102,46,193,252,230,103,40,23,164,86,190,190,31,190,8,114,234,127,137,59,251,234,184,184,135,233,63,84,240,175,232,160,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8ec53e46-ef7a-45a0-abd4-217bf5a8fdf0"));
		}

		#endregion

	}

	#endregion

}

