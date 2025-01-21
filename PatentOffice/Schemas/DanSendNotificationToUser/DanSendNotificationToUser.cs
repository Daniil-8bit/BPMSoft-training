namespace BPMSoft.Core.Process.Configuration
{

	using BPMSoft.Common;
	using BPMSoft.Core;
	using BPMSoft.Core.Configuration;
	using BPMSoft.Core.DB;
	using BPMSoft.Core.Entities;
	using BPMSoft.Core.Process;
	using BPMSoft.UI.WebControls.Controls;
	using Newtonsoft.Json;
	using Newtonsoft.Json.Linq;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;

	#region Class: DanSendNotificationToUser

	/// <exclude/>
	public partial class DanSendNotificationToUser
	{

		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context) {
			
			// Получаем схему Reminding.
			var remindingSchema = UserConnection.EntitySchemaManager.GetInstanceByName("Reminding");

			// Создаем экземпляр объекта Reminding.
			var reminding = remindingSchema.CreateEntity(UserConnection);

			// Заполнение полей по умолчанию.
			reminding.SetDefColumnValues();

			// Идентификатор уведомления в таблице.
			reminding.SetColumnValue("Id", Guid.NewGuid());

			// Автор уведомления.
			reminding.SetColumnValue("AuthorId", UserConnection.CurrentUser.ContactId);

			// Получатель уведомления.
			reminding.SetColumnValue("ContactId", BpmNotificationReceiver);

			// Идентификатор из таблицы RemindingSource, указывающий на автора уведомления.
			reminding.SetColumnValue("SourceId", new Guid("a66d08e1-2e2d-e011-ac0a-00155d043205"));

			// Время отправки уведомления.
			reminding.SetColumnValue("RemindTime", UserConnection.CurrentUser.GetCurrentDateTime());

			// Содержание уведомления.
			reminding.SetColumnValue("SubjectCaption", "Тестовое уведомление для пользователя!");

			// Заголовок уведомления.
			reminding.SetColumnValue("PopupTitle", "Заголовок уведомления");

			// Идентификатор таблицы (схемы) раздела, данное значение взято из имеющихся в таблице Reminding примеров уведомления.
			// При реализации примера на своих стендах замените данное значение.
			reminding.SetColumnValue("SysEntitySchemaId", new Guid("1BAB9DCF-17D5-49F8-9536-8E0064F1DCE0"));

			// Сохраняем запись.
			reminding.Save();

			// При возвращении значения true, действие процесса завершает работу, устанавливается статус «Выполнено».
			// Сам бизнес-процесс продолжают работу.
			return true;
		}

		#endregion

		#region Methods: Public

		public override bool CompleteExecuting(params object[] parameters) {
			return base.CompleteExecuting(parameters);
		}

		public override void CancelExecuting(params object[] parameters) {
			base.CancelExecuting(parameters);
		}

		public override string GetExecutionData() {
			return string.Empty;
		}

		public override ProcessElementNotification GetNotificationData() {
			return base.GetNotificationData();
		}

		#endregion

	}

	#endregion

}

