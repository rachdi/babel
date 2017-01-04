let tab=[];

let btn1 = document.getElementById('clickme');
let btn2 = document.getElementById('cherche');
let nom = document.getElementById('nom').value;
let alpha = document.getElementById('insensiv').value;
let i=0;

btn1.onclick = ()=>{
	let nom = document.getElementById('nom').value;
	if(nom=== ""){
		document.getElementById("name").innerHTML = "Bonjour Père Noël !";
	}
	else{

		document.getElementById("name").innerHTML=`bonjour ${nom}`;
		document.getElementById("affiche1").appendChild(document.createElement('li')).innerHTML = nom;
		tab.push(nom);
		console.log(tab);

		btn2.onclick = ()=>{
			// console.log(alpha);
			
			let élément=document.getElementById('insensiv').value;
			for (i=0 ; i<tab.length ; i++){

				
				
				let idx = tab[i].indexOf(élément);
				
				if(idx === 0) {
					console.log(tab[i]);
					document.getElementById("affiche2").appendChild(document.createElement('li')).innerHTML = tab[i];
				}
				// console.log(tableau);
			}



		}
	}

};



