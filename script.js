
function getFormvalue() {
let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;

    alert(fname + " " + lname);
}
document.getElementById("submit").addEventListener("click", getFormvalue)