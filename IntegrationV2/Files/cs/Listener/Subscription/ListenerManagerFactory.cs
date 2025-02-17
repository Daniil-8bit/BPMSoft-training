namespace IntegrationV2.Listener.Subscription
{
	using IntegrationApi.Interfaces;
	using BPMSoft.Configuration;
	using BPMSoft.Core;
	using BPMSoft.Core.Factories;

	#region Class: ListenerManagerFactory

	[DefaultBinding(typeof(IListenerManagerFactory))]
	public class ListenerManagerFactory : IListenerManagerFactory
	{

		#region Methods: Public

		/// <inheritdoc cref="IListenerManagerFactory.GetExchangeListenerManager(UserConnection)"/>
		public IExchangeListenerManager GetExchangeListenerManager(UserConnection userConnection) {
			return ClassFactory.Get<IExchangeListenerManager>(
				new ConstructorArgument("userConnection", userConnection));
		}

		#endregion

	}

	#endregion

}
