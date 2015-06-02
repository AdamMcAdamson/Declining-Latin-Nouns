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
	neuter = $('#neuter').is(':checked');
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
		
		if(declension == 1){
			declensionChart.nomPl = stem + declension1.nomPl;
			declensionChart.genPl = stem + declension1.genPl;
			declensionChart.datS = stem + declension1.datS;
			declensionChart.datPl = stem + declension1.datPl;
			declensionChart.accS = stem + declension1.accS;
			declensionChart.accPl = stem + declension1.accPl;
			declensionChart.ablS = stem + declension1.ablS;
			declensionChart.ablPl = stem + declension1.ablPl;			
		}
		if(declension == 2){
			declensionChart.nomPl = stem + declension2.nomPl;
			declensionChart.genPl = stem + declension2.genPl;
			declensionChart.datS = stem + declension2.datS;
			declensionChart.datPl = stem + declension2.datPl;
			declensionChart.accS = stem + declension2.accS;
			declensionChart.accPl = stem + declension2.accPl;
			declensionChart.ablS = stem + declension2.ablS;
			declensionChart.ablPl = stem + declension2.ablPl;			

		}
		if(declension == 3){
			declensionChart.nomPl = stem + declension3.nomPl;
			declensionChart.genPl = stem + declension3.genPl;
			declensionChart.datS = stem + declension3.datS;
			declensionChart.datPl = stem + declension3.datPl;
			declensionChart.accS = stem + declension3.accS;
			declensionChart.accPl = stem + declension3.accPl;
			declensionChart.ablS = stem + declension3.ablS;
			declensionChart.ablPl = stem + declension3.ablPl;			

		}
		if(declension == 4){
			declensionChart.nomPl = stem + declension4.nomPl;
			declensionChart.genPl = stem + declension4.genPl;
			declensionChart.datS = stem + declension4.datS;
			declensionChart.datPl = stem + declension4.datPl;
			declensionChart.accS = stem + declension4.accS;
			declensionChart.accPl = stem + declension4.accPl;
			declensionChart.ablS = stem + declension4.ablS;
			declensionChart.ablPl = stem + declension4.ablPl;			

		}
		if(declension == 5){
			declensionChart.nomPl = stem + declension5.nomPl;
			declensionChart.genPl = stem + declension5.genPl;
			declensionChart.datS = stem + declension5.datS;
			declensionChart.datPl = stem + declension5.datPl;
			declensionChart.accS = stem + declension5.accS;
			declensionChart.accPl = stem + declension5.accPl;
			declensionChart.ablS = stem + declension5.ablS;
			declensionChart.ablPl = stem + declension5.ablPl;			

		}
		

		if(neuter && (declension != 1 || declension != 5)){
			declensionChart.accS = declensionChart.nomS;
			if(declension == 4){
				declensionChart.nomPl = stem + "ua";
			}
			else{
				declensionChart.nomPl = stem + "a";
			}
			declensionChart.accPl = declensionChart.nomPl;			
		}

		
		display();

	}
}

display = function(){
	
	$("#nom-s").html(declensionChart.nomS.toString());
	$("#nom-pl").html(declensionChart.nomPl.toString());

	$("#gen-s").html(declensionChart.genS.toString());
	$("#gen-pl").html(declensionChart.genPl.toString());

	$("#dat-s").html(declensionChart.datS.toString());
	$("#dat-pl").html(declensionChart.datPl.toString());

	$("#acc-s").html(declensionChart.accS.toString());
	$("#acc-pl").html(declensionChart.accPl.toString());

	$("#abl-s").html(declensionChart.ablS.toString());
	$("#abl-pl").html(declensionChart.ablPl.toString());
	
}

