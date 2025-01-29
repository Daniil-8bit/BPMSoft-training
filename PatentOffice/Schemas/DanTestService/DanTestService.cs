 namespace BPMSoft.Configuration.DanTestService
{
	using System.ServiceModel;
	using System.ServiceModel.Web;
	using System.ServiceModel.Activation;
	using BPMSoft.Core;
	using BPMSoft.Web.Common;
	using BPMSoft.Core.Entities;
	using System.Linq;
	/// <summary>
	/// Сервис расчета стоимости товаров в предложении дня.
	/// </summary>
	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class DanTestService : BaseService
	{
		/// <summary>
		/// Возвращает сумму товаров в предложении дня.
		/// </summary>
		/// <param name="offerName">Название предложения дня</param>
		[OperationContract]
		[WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json)]
		public string GetApplicantName(string applicantName)
		{
			if (string.IsNullOrWhiteSpace(applicantName))
			{
				return null;
			}
			// Создаем экземпляр EntitySchemaQuery для создания запроса к объекту BpmProductInDeal
			//var esqOfferOfTheDay = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "BpmProductInDeal");
			// Добавляем в результирующую выборку колонку BpmProductPrice объекта BpmProduct
			//var price = esqOfferOfTheDay.AddColumn("BpmProduct.BpmProductPrice").Name;
			// Создаем фильтр записи "Продукт в предложении дня" по имени предложения дня
			//var offerNameFilter = esqOfferOfTheDay.CreateFilterWithParameters(
			//FilterComparisonType.Equal, "BpmDealsOfDay.BpmDealName", applicantName);
			// Применяем созданный фильтр к выборке
			//esqOfferOfTheDay.Filters.Add(offerNameFilter);
			// Получаем коллекцию записей
			//var resultCollection = esqOfferOfTheDay.GetEntityCollection(UserConnection);
			/*if (resultCollection.Count() > 0)
			{
				decimal amount = 0;
				foreach (var entity in resultCollection)
				{
					// Суммируем цену продуктов из выборки
					amount += entity.GetTypedColumnValue<decimal>(price);
				}
				return amount;
			}*/
			return applicantName;
		}
	}
}