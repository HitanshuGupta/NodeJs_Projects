var billAmount = document.getElementById("billAmount");
var serviceQuality = document.getElementById("serviceQuality");
var totalPeople = document.getElementById("totalPeople");

axios.get(`http://localhost:3000/getoptionList`).then((response) => {
	const serviceQuality = document.getElementById("serviceQuality");	
	response.data.forEach(option => {
		console.log(option);
		const optionTag = document.createElement('option');
		optionTag.value = option.value;
		optionTag.text = option.text;
		serviceQuality.appendChild(optionTag);
	});
}).catch((err) => {
	console.log(err);
});

function calculateTip() {
	console.log(billAmount.value, serviceQuality.value, totalPeople.value);
	
	if(billAmount.value == "" || billAmount.value < 0){
		window.alert("Please enter bill amount");
		return;
	}
	if(totalPeople.value =="" || totalPeople.value <= 1) {
		window.alert("Please enter people value and it should be greater then or equal to 1");
		return;
	}
	if( serviceQuality.value == 0){
		window.alert("Please choose the valid service option");
		return;
	}
	axios
		.get(
			`http://localhost:3000/calulateBill?billAmount=${billAmount.value}&serviceQuality=${serviceQuality.value}&totalPeople=${totalPeople.value}`
		)
		.then((result) => {
			console.log(result.data.value);
            document.getElementById("totalTip").style.display = "block";
            document.getElementById('eachTip').innerHTML = result.data.value;
		})
		.catch((err) => {
			console.log(err);
		});
}
            document.getElementById("totalTip").style.display = "none";
