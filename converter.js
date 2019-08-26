function Convert(){
	a = Conversion();
 
	b = document.getElementById("value1").value;
 
	if(b == ""){
		document.getElementById("value2").value = "";
	}else{
		switch(a){
			case "Dollar":
				document.getElementById("value2").value = b * 71.51;
			break;
 
			case "Pound":
				document.getElementById("value2").value = b * 87.81;
			break;
 
			case "Euro":
				document.getElementById("value2").value = b * 80.38;
			break;
 
			case "Dinar":
				document.getElementById("value2").value = b * 237.14;
			break;
 
			case "Rand":
				document.getElementById("value2").value = b * 4.69;
			break;

                        case "Ruble":
				document.getElementById("value2").value = b * 1.08;
			break;                         

                        case "Yuan":
				document.getElementById("value2").value = b * 10.08;
			break;

                        case "Yen":
				document.getElementById("value2").value = b * 0.68;
			break;
		}
	}
}

function Conversion(){
		a = document.getElementById("converter").value;
		return a;
	}