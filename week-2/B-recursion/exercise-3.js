/*
   Write a function that adds up all the population values to get the total. 
 */

var population = {
	counties: [
		{
			name: "Yorkshire",
			cities: [
				{
					name: "Leeds",
					population: 774060
				},
				{
					name: "Sheffield",
					population: 569737
				},
				{
					name: "Bradford",
					population: 531176
				},
				],
			towns: [
				{
					name: "Harrogate",
					population: 74426
				}
				]
		},
		{
			name: "Cheshire",
			towns: [
				{
					name: "Warrington",
					population: 165456
				},
				{
					name: "Chester",
					population: 86011
				},
				{
					name: "Crewe",
					population: 71722
				},
				]
		}
	]
};

function census(data)
{
	var total = 0;
	/*
	   Write your code here.	
	 */
 	return total;
}

console.log(census(population));

/*
   EXPECTED OUTPUT:

   2272588
 */
