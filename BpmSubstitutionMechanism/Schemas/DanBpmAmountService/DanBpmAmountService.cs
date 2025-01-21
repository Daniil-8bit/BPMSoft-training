 namespace BPMSoft.Configuration
{
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using BPMSoft.Web.Common;
	using BPMSoft.Core.Factories;
	using System;
	
	/// <summary>
	/// Пользовательский сервис.
	/// </summary>
	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class DanBpmAmountService : BaseService
	{
		/// <summary>
		/// Возвращает строку с результатом вызова методов GetAmount замещающего и замещаемого классов.
		/// </summary>
		[OperationContract]
		[WebGet(RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json)]
		public string GetAmount(int firstNumber, int secondNumber)
		{
			try
			{
				/* Создание экземпляра замещаемого класса. */
				var bpmBaseCalculator = new DanBaseCalculator();
				/* Создание экземпляра замещающего класса через фабрику замещаемых объектов. */
				var bpmCalculator = ClassFactory.Get<DanBaseCalculator>(new ConstructorArgument("rateValue", 2));
				/* Получение результата работы метода GetAmount(). Будет вызван метод исходного класса BpmBaseCalculator без замещения. */
				int baseCalculatorResult = bpmBaseCalculator.GetAmount(firstNumber, secondNumber);
				/* Получение результата работы метода GetAmount(). Будет вызван метод класса BpmCalculator, который замещает BpmBaseCalculator. */
				int bpmCalculatorResult = bpmCalculator.GetAmount(firstNumber, secondNumber);
				/* Отображение на странице результата выполнения. */
				return string.Format("Результат замещаемого класса: {0}; Результат замещающего класса : {1}", baseCalculatorResult.ToString(), bpmCalculatorResult.ToString());
			}
			catch (Exception ex)
			{
				throw new Exception($"В пользовательском сервисе возникла ошибка:{ex} {ex.Message}");
			}
		}
	}
}