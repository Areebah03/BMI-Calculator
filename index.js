let height = document.getElementById('height');
let weight = document.getElementById('weight');
let btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    let ans = document.getElementById('ans');
    let ht = (height.value) / 100;
    let wt = weight.value;
    let result = wt / (ht * ht);
    if (result > 0) {
        ans.style.display="block";
        ans.innerHTML=`<p style="margin-bottom:0px">Your BMI is : <b>${result.toFixed(2)}</b></p>`;
    }
    let myBmi = "";
    let mycolor = "";
    let desc = "";
    if (result <= 18.5 && result > 0) {
        myBmi = "Underweight ! ";
        mycolor = "primary";
        desc = "Please eat a proper diet."
    }

    else if (result <= 25 && result > 18.5) {
        myBmi = "Normal ! ";
        mycolor = "success"
        desc = "Keep up the good work."
    }
    else if (result <= 30 && result > 25) {
        myBmi = "Overweight ! ";
        mycolor = "warning"
        desc = "Please maintain a healthy diet."
    }
    else if (result > 30) {
        myBmi = "Obesity ! ";
        mycolor = "danger"
        desc = "You should cut on carbs and sugar immediately."
    }
    else {
        myBmi = "Error ! ";
        mycolor = "danger"
        desc = "Please enter valid height and weight."
    }
    let alert = document.getElementById('alert');
    alert.innerHTML = ` <div class="alert alert-${mycolor} alert-dismissible fade show" role="alert">
    <strong>${myBmi}</strong>${desc}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    setTimeout(() => {
        alert.innerHTML = "";
    }, 4000);
    let myForm = document.getElementById('myForm');
    myForm.reset();
    e.preventDefault();
})
