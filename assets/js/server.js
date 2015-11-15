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
	

var ref = new Firebase("https://run-or-fund.firebaseio.com");

document.addEventListener('DOMContentLoaded', //this is one big parameter
    function handlers() {
        document.getElementById('googleSign').addEventListener('click', ref.authWithOAuthPopup("google", function(error, authData) {
 		 if (error) {
   			console.log("Login Failed!", error);
  		} else {
    console.log("Authenticated successfully with payload:", authData);
  }
})
); //event handlers

    });