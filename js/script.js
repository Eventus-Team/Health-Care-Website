countBMI = () => {
    let weight = document.getElementById("Weight").value;
    let height = document.getElementById("Height").value;
    let valuebmi = document.getElementById("valuebmi")

    let value=weight/((height/100)**2)

    valuebmi.innerHTML = "Your BMI is "+value.toFixed(0);
}

function autors()
{
	document.getElementById("authors").innerHTML="Autors: Michał Bej, Szymon Janiak, Miłosz Stachowiak";
}
