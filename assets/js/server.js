//Globals
var stepGoalV; 
var heartRateGoalV;
var donationAmountV;

function submit(){
	stepGoalV = document.getElementById("stepGoal").value;
	console.log(stepGoalV);
	heartRateGoalV = document.getElementById("heartRateGoal").value;
	console.log(heartRateGoalV);
	donationAmountV = document.getElementById("donationAmount").value;
	
	document.getElementById("finalDonation").innerHTML = donationAmountV;

}
