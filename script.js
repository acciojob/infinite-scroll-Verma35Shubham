//your code here!

let ol = document.getElementById("infi-list")
let item = 20

for(let i=1;i<=item;i++){
	let li = document.createElement("li")
	li.innerText = "item "+i
	ol.append(li)
}