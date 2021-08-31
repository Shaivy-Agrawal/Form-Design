function ageCalculator() {
  var uInput = document.getElementById("dob").value;
  var DOB = new Date(uInput);
  if (uInput == null || uInput == "") {
    alert("Please enter your Date of Birth");
    return false;
  } else {
    var month_diff = Date.now() - DOB.getTime();
    var age_df = new Date(month_diff);
    var year = age_df.getUTCFullYear();
    var age = Math.abs(year - 1970);

    document.getElementById("result").value = age + " Years";
  }
}

function validateGmail() {
  var x = document.forms["insurance-form"]["email"].value;
  var pattern = /^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/;
  if (x.length === 0) {
    alert("Please enter your gmail id.");
  } else if (!pattern.test(x)) {
    alert("Please enter only the gmail id.");
  }
}

function validatePhNo() {
  var num = document.forms["insurance-form"]["ph-no"].value;
  var pattern = /^[789]\d{9}$/;
  if (num.length === 0){
    alert("Please enter your phone number.");
  }
  else if (!pattern.test(num)) {
    alert("please enter the correct phone number");
  }
}

function validateLastName() {
  var lnam = document.forms["insurance-form"]["lname"].value;
  var pattern = /^\.[A-Z]$/;

  if (lnam.length === 0){
    alert("Please enter your Last Name.");
  }
  else if (!pattern.test(lnam)){
    alert("Please make sure your last name is correct.");
  }
}

function validatePan(){
  var pan = document.forms["insurance-form"]["pan"].value;
  var pattern = /^[A-Z]{3}[PFCHAT]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$/;

  if (pan.length === 0){
    alert("Please enter your PAN Number.");
  }
  else if (!pattern.test(pan)){
    alert("Please enter the correct PAN Number.");
  }
}

function noEmptyField() {
  var fnam = document.forms["insurance-form"]["fname"].value;
  var fa_nam = document.forms["insurance-form"]["father-name"].value;
  var gen = document.forms["insurance-form"]["gender"].value;
  var ad = document.forms["insurance-form"]["address"].value;
  var dob = document.forms["insurance-form"]["dob"].value;

  if (fnam.length === 0){
    alert("Please enter your First Name.");
  }
  if (ad.length === 0){
    alert("Please enter your Address.");
  }
  if (fa_nam.length === 0){
    alert("Please enter your Father's name.");
  }
  if (gen == "gender"){
    alert("Please select the Gender.");
  }    
  if (dob.length === 0) {
    alert("Please select date of birth.");
  }
}

// function validateAgeButton() {
//   if(document.getElementById("age-btn").clicked == false){
//     alert("Click the button to calculate your age");
//   }
// }