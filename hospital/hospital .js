let bmiForm = document.querySelector(".bmi-form");
bmiForm.addEventListener("submit", function (e) {
  //To prevent the default behavior of the form submission
  e.preventDefault();
  // e.target refers to the form element
  const form = e.target;

  // Access individual form elements using e.target
  const name = form.querySelector("#name").value;
  const weight = Number(form.querySelector("#weight").value);
  const height = Number(form.querySelector("#height").value);

  console.log(name,weight,height);
  //Write your logic here.
  //Logic begins

  //Logic ends
  let heightinmeters=height/100;
  let BMI=Number(weight/heightinmeters**2);
  let result;
if(BMI==18.5)
{
    console.log("normal")  
    result="normal" 
}
else if(BMI<18.5)
{
    console.log("thin")
    result="thin"
}
else (BMI>25)
{
console.log("fat")
result="fat"
}

  //Uncomment below code after writing your logic
  form.querySelector("#result").textContent = `${name}, You are ${result}`;
});

//Below code is reset the form - will explain later
document.querySelector("#reset").addEventListener("click", function (e) {
  bmiForm.querySelector("#name").value = "";
  bmiForm.querySelector("#weight").value = "";
  bmiForm.querySelector("#height").value = "";
  bmiForm.querySelector("#result").textContent = "";
});