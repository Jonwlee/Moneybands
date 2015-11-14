//Globals
var stepGoal; 
var heartRateGoal;
var donationAmount;

document.addEventListener('DOMContentLoaded', //this is one big parameter
    function handlers() {
        document.getElementById('submitInputs').addEventListener('click', submit); //event handlers

    });

function submit(){
	stepGoal = document.getElementById("stepGoal").value;
	heartRateGoal = document.getElementById("heartRateGoal").value;
	donationAmount = document.getElementById("donationAmount").value;

}
