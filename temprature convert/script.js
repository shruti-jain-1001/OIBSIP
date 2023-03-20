function converter() {
	var a = parseFloat(document.getElementById("temp-input").value);
	var b = document.getElementById("temp-type").value;

	if (b == "celsius") {
		var fah = (a * 1.8) + 32;
		var kel = a + 273.15;
		document.getElementById("result").innerHTML = a + "°C = " + fah.toFixed(2) + "°F = " + kel.toFixed(2) + "K";
	} else if (b == "fahrenheit") {
		var cel = (a - 32) / 1.8;
		var kel = ((a - 32) / 1.8) + 273.15;
		document.getElementById("result").innerHTML = a + "°F = " + cel.toFixed(2) + "°C = " + kel.toFixed(2) + "K";
	} else if (b == "kelvin") {
		var cel = a - 273.15;
		var fah = ((a - 273.15) * 1.8) + 32;
		document.getElementById("result").innerHTML = a + "K = " + cel.toFixed(2) + "°C = " + fah.toFixed(2) + "°F";
	}
}