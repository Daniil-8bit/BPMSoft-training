 namespace BPMSoft.Configuration
{
	// В данном пространстве имен находится атрибут Override. 
	using BPMSoft.Core.Factories;
	
	/// <summary>
	/// Замещающий (производный) класс.
	/// </summary>
	
	// Атрибут Override указывается для построения дерева зависимостей замещающих и замещаемых типов.
	// Атрибут указывает на то, что данный класс являются замещающим.
	[Override]
	public class DanBpmCalculator : DanBaseCalculator
	{
		/// <summary>
		/// Коэффициент.
		/// </summary>
		public virtual int Rate { get; private set; }
		
		/// <summary>
		/// Конструктор замещающего класса.
		/// </summary>
		public DanBpmCalculator(int rateValue)
		{
			Rate = rateValue;
		}
		
		/// <summary>
		/// Замещенный метод. Возвращает сумму двух чисел умноженную на коэффициент.
		/// </summary>
		public override int GetAmount(int firstNumber, int secondNumber)
		{
			return (firstNumber + secondNumber) * Rate;
		}
	}
}