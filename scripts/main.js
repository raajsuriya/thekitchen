const myHeading = document.querySelector("h1");
myHeading.textContent = "Inventory";

let vegetables=["Broccoli","Cabbage","Tomato","Celery","Sugar Snaps","Chilli","Coriander Leaves",
				"Cucumber","Rocket Leaves","Spinach","Kale","Potato","Turnips","Raddish",
				"Carrot","Edemame","Zucchini","Peas","Sweet Potato"]
let fruits=["Figs","Lemon","Apple","Pears","Banana","Kiwi","Grapes","Passion Fruit","Orange",
			"Grapefruit","Watermelon","Papaya","Strawberry","Blueberry","Raspberry","Blackberry",
			"Plums","Tamarind"]
let botanicals=["Coriander Seeds","Fenugreek Seeds","Cloves","Cumin Seeds","Mustard Seeds",
				"Cardomons","Sesame Seeds","Cinnamon","Fennel Seeds","Nigella Seeds","Tumeric",
				"Chia Seeds","Black Pepper","Salt"]
let grains=["Rice","Yellow Lentil","Pinhead Oats","Rolled Oats","Oat Flakes","Red Kidney Beans",
			"Black Beans","Green Gram"]


let table_head=["Vegetables","#","£/u","Fruits","#","£/u","Botanicals","#","£/u","Grains","#","£/u"]

// for(var i=0;i<7;i++){
// 	botanicals.push("")
// }
// for(var i=0;i<12;i++){
// 	grains.push("")
// }

function equalize(){
	let all_type_food=[vegetables,fruits,botanicals,grains];
	var max=vegetables.length;
	for(let foodtype of all_type_food){
		// max < foodtype.length ? max=foodtype.length : max;
		if(max<foodtype.length){
			max=foodtype.length;
		}
	}
	for(let foodtype of all_type_food){
		if(foodtype.length<max){
			var diff = max - foodtype.length
			for(var k=0;k<diff;k++){
				foodtype.push("");
			}
		}
	}
}

equalize()
var table='';
table+='<tr>';
for(let head of table_head){
	table+='<th>'+head+'</th>';
}
table+='</tr>';

for(var i=0;i<grains.length;i++){
	table+='<tr>';
		table+='<td>'+vegetables[i]+'</td>';
		table+='<td>'+' '+'</td>';
		table+='<td>'+' '+'</td>';
		table+='<td>'+fruits[i]+'</td>';
		table+='<td>'+' '+'</td>';
		table+='<td>'+' '+'</td>';
		table+='<td>'+botanicals[i]+'</td>';
		table+='<td>'+' '+'</td>';
		table+='<td>'+' '+'</td>';
		table+='<td>'+grains[i]+'</td>';
		table+='<td>'+' '+'</td>';
		table+='<td>'+' '+'</td>';
	table+='</tr>';
}
document.write("<div class='center'><table class='center'>"+table+"</table></div>")