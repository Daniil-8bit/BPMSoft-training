namespace BPMSoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using IntegrationApi.Interfaces;
	using IntegrationApi.MailboxDomain.Interfaces;
	using IntegrationApi.MailboxDomain.Model;
	using BPMSoft.Core;
	using BPMSoft.Core.Factories;
	using BPMSoft.IntegrationV2.Logging.Interfaces;

	#region Class: ListenerServiceFailHandler

	/// <summary>
	/// Re-creates subscription and starts synchronization for mailbox.
	/// </summary>
	public class ListenerServiceFailHandler : IJobExecutor
	{

		#region Constants: Private

		/// <summary>
		/// Integration action retry count.
		/// </summary>
		private const int _retryCount = 5;

		#endregion

		#region Fields: Private

		/// <summary>
		/// <see cref="ISynchronizationLogger"/> instance.
		/// </summary>
		private ISynchronizationLogger _log;

		#endregion
		
		#region Fields: Protected

		/// <summary>
		/// <see cref="ExchangeListenerManager"/> instance.
		/// </summary>
		private IExchangeListenerManager ListenerManager;

		/// <summary>
		/// <see cref="UserConnection"/> instance.
		/// </summary>
		protected UserConnection UserConnection;

		#endregion

		#region Methods: Private

		/// <summary>
		/// Returns mailbox model instance.
		/// </summary>
		/// <param name="mailboxId">Mailbox unique identifier.</param>
		/// <returns>Mailbox instance.</returns>
		private Mailbox GetMailbox(Guid mailboxId) {
			var mailboxService = ClassFactory.Get<IMailboxService>(new ConstructorArgument("uc", UserConnection));
			return mailboxService.GetMailbox(mailboxId, false);
		}

		private bool GetIsFeatureEnabled(string code) {
			var featureUtil = ClassFactory.Get<IFeatureUtilities>();
			return featureUtil.GetIsFeatureEnabled(UserConnection, code);
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Creates <see cref="ExchangeListenerManager"/> instance.
		/// </summary>
		protected IExchangeListenerManager GetExchangeListenerManager() {
			var managerFactory = ClassFactory.Get<IListenerManagerFactory>();
			return managerFactory.GetExchangeListenerManager(UserConnection);
		}

		/// <summary>
		/// Creates events subscription for mailbox.
		/// </summary>
		/// <param name="mailbox">Mailbox unique identifier.</param>
		protected void StartSubscription(Mailbox mailbox) {
			var tryCount = 0;
			while (tryCount < _retryCount) {
				try {
					if (ListenerManager.GetIsServiceAvaliable()) {
						ListenerManager.RecreateListener(mailbox.Id);
						return;
					}
				} catch (Exception e) {
					_log.ErrorFormat("Events listener subscription for {0} mailbox create failed, Try number {1}.", e, mailbox.Id, tryCount);
				}
				tryCount++;
			}
		}

		/// <summary>
		/// Starts email synchronization process for period.
		/// </summary>
		/// <param name="mailboxId">Mailbox unique identifier.</param>
		protected void StartPeriodSyncJob(Mailbox mailbox) {
			var tryCount = 0;
			while (tryCount < _retryCount) {
				try {
					var syncSession = ClassFactory.Get<ISyncSession>("Email", new ConstructorArgument("uc", UserConnection),
					new ConstructorArgument("senderEmailAddress", mailbox.SenderEmailAddress));
					syncSession.StartFailover();
					return;
				} catch (Exception e) {
					_log.ErrorFormat("Email synchronization process  for {0} mailbox not started, Try number {1}.", e, mailbox.Id, tryCount);
				}
				tryCount++;
			}
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Starts events subscription and email synchronization process for period.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="parameters">Parameters collection.</param>
		public void Execute(UserConnection userConnection, IDictionary<string, object> parameters) {
			_log = ClassFactory.Get<ISynchronizationLogger>();
			_log.DebugFormat("ListenerServiceFailHandler started");
			UserConnection = userConnection;
			if (GetIsFeatureEnabled("OldEmailIntegration")) {
				_log.DebugFormat("OldEmailIntegration feature enabled, ListenerServiceFailHandler ended");
				return;
			}
			ListenerManager = GetExchangeListenerManager();
			_log.DebugFormat("ExchangeListenerManager created");
			Guid mailboxId = (Guid)parameters["MailboxId"];
			var mailbox = GetMailbox(mailboxId);
			StartSubscription(mailbox);
			_log.DebugFormat("Events subscription for {0} mailbox created", mailboxId);
			StartPeriodSyncJob(mailbox);
			_log.DebugFormat("Email synchronization process for {0} mailbox created", mailboxId);
			_log.DebugFormat("ListenerServiceFailHandler ended");
		}

		#endregion

	}

	#endregion

}