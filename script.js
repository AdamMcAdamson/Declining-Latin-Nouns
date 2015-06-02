var principle1 = null;
var principle2 = null;
var neuter = null;
var declinsion = null;
var declensionChart = {nomS: null, nomPl: null, genS: null, genPl: null, datS: null, datPl: null, accS: null, accPl: null, ablS: null, ablPl: null};
var declension1 = {nomPl: "ae", genPl: "arum", datS: "ae", datPl: "is", accS: "am", accPl: "as", ablS: "a", ablPl: "is"};
var declension2 = {nomPl: "i", genPl: "orum", datS: "o", datPl: "is", accS: "um", accPl: "os", ablS: "o", ablPl: "is"};
var declension3 = {nomPl: "es", genPl: "um", datS: "i", datPl: "ibus", accS: "em", accPl: "es", ablS: "e", ablPl: "ibus"};
var declension4 = {nomPl: "us", genPl: "uum", datS: "ui", datPl: "ibus", accS: "um", accPl: "us", ablS: "u", ablPl: "ibus"};
var declension5 = {nomPl: "es", genPl: "erum", datS: "ei", datPl: "ebus", accS: "em", accPl: "es", ablS: "e", ablPl: "ebus"};

$('#submit').click(function(){
	principle1 = $('#principle1').val().toLowerCase().trim();
	principle2 = $('#principle2').val().toLowerCase().trim();
	neuter = $('#neuter').val();
	decline(principle1, principle2, neuter);
})


decline = function(p1, p2, n){

	var ending = p2.substring(p2.length-2);
	var cont = true;

	if(ending == "ae"){
		declension = 1;
	}
	else if(ending == "is"){
		declension = 3;
	}
	else if(ending == "us"){
		declension = 4;
	}
	else if(ending == "ei"){
		declension = 5; 
	}
	else if(ending.substring(1) == "i"){
		ending = "i";
		declension = 2;
	}
	else{
		alert("Not a Regular Noun!");
		cont = false;
	}	

	if(cont){
		declensionChart.nomS = p1;
		declensionChart.genS = p2;

		var stem = p2.substring(0, p2.length-ending.length);


		if(declinsion == 1){

			
		}






	}
}