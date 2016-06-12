var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
var filtered = numbers.filter(filtrar);  
console.log(filtered)

function filtrar (number)
{
	 return (number % 2 === 0);
}