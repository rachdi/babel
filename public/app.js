'use strict';

var tab = [];

var btn1 = document.getElementById('clickme');
var btn2 = document.getElementById('cherche');
var nom = document.getElementById('nom').value;
var alpha = document.getElementById('insensiv').value;
var i = 0;

btn1.onclick = function () {
	var nom = document.getElementById('nom').value;
	if (nom === "") {
		document.getElementById("name").innerHTML = "Bonjour Père Noël !";
	} else {

		document.getElementById("name").innerHTML = 'bonjour ' + nom;
		document.getElementById("affiche1").appendChild(document.createElement('li')).innerHTML = nom;
		tab.push(nom);
		console.log(tab);

		btn2.onclick = function () {
			// console.log(alpha);

			var élément = document.getElementById('insensiv').value;
			for (i = 0; i < tab.length; i++) {

				var idx = tab[i].indexOf(élément);

				if (idx === 0) {
					console.log(tab[i]);
					document.getElementById("affiche2").appendChild(document.createElement('li')).innerHTML = tab[i];
				}
				// console.log(tableau);
			}
		};
	}
};
