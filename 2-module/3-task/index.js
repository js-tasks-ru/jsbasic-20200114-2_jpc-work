let calculator = {
  // ваш код
  read:function (a, b) {this.a = a; this.b = b;},
  sum:function () {
  	if(this.a === undefined || this.b === undefined)
  		return 0;

  	return this.a + this.b;
  },
  mul: function () {
	if(this.a === undefined || this.b === undefined)
  		return 0;

  	return this.a * this.b;  	
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
