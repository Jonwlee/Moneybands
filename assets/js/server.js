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

var signer;
var authData;

var ref = new Firebase("https://run-or-fund.firebaseio.com");

document.getElementById('googleSign').addEventListener('click', ref.authWithOAuthRedirect("google", function(error) {
  if (error) 
    console.log("Authentication Failed!", error);
} //closes anon function
)//closes ref method
 );//closes eventlistner