namespace BPMSoft.Configuration
{
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using System.Web.SessionState;
	 
	/// 
	/// Пользовательский веб-сервис.
	/// 
	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class DanGreetingService : IReadOnlySessionState
	{
		/// 
		/// Возвращает строку «Hello».
		/// 
		[OperationContract]
		[WebInvoke(Method = "GET", UriTemplate = "SayHello", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		public string SayHello()
		{
			return "Hello";
		}
	}
}