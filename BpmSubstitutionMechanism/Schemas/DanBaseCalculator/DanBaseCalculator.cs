 // Система позволяет использовать любое пространство имен в коде схемы «Исходный код».
// Выбор пространства имен зависит от команды разработки или регламентов компании.
// В данном пример воспользуемся пространством BPMSoft.Configuration. 
namespace BPMSoft.Configuration
{
	/// <summary>
	/// Замещаемый (базовый) класс.
	/// </summary>
	public class DanBaseCalculator
	{
		/// <summary>
		/// Базовый виртуальный метод, который будет переопределен в замещающем классе. Метод возвращает сумму двух чисел.
		/// </summary>
		public virtual int GetAmount(int firstNumber, int secondNumber)
		{
			return firstNumber + secondNumber;
		}
	}
}