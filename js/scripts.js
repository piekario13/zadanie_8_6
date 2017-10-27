alert('Mamy takie rownanie: (a * a) - (2 * a * b) + (b * b)');
var a = prompt('wpisz liczbę \"a\"');
var b = prompt('wpisz liczbę \"b\"');
var value = (a * a) - (2 * a * b) + (b * b);
console.log((a * a) - (2 * a * b) + (b * b));
if (value > 0) {
	console.log('wynik dodatni');
} if (value < 0) {
	console.log('wynik ujemny');
} if (value == 0) {
	console.log('wynik to zero');
	alert('Wynik to zero');
} 