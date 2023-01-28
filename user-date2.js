//get date and user
function nDate() {         
  setTimeout(function() {   
    const date = new Date();
    const text = date.toLocaleString();
    document.getElementById("dateNow").innerHTML = text; 
	var user = "Jan Kowalski";
	document.getElementById('name').innerHTML = user;
	document.getElementById('user2').value = user;
    nDate();             
  }, 1000)

}
nDate(); 
showData();

//calculated holidays and working days
function countingTheNumberOfDays(){
const working = document.getElementById('working');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const oblicz = document.getElementById('oblicz');
const holidays = document.getElementById('holidays');

var firstDate = new Date(startDate.value);    
var secondDate = new Date(endDate.value);

var subtraction = (secondDate - firstDate)/1000;
var subtraction = Math.abs(Math.floor(subtraction));

var numberOfDays = Math.floor(subtraction/(24*60*60));
var countTheSeconds = subtraction - numberOfDays * 24*60*60;

var hours = Math.floor(countTheSeconds/(60*60));
var countTheSeconds = countTheSeconds - hours * 60*60;

var minutes = Math.floor(countTheSeconds/(60));
var countTheSeconds = countTheSeconds - minutes * 60;

working.value = numberOfDays+1;

let count = numberOfDays+1;
let dayOff = 0;
var today = firstDate;
var tomorrow = new Date();

for(i=0;i<count;i++){
tomorrow.setDate(today.getDate()+i);
var curr = tomorrow.getDay();
if(curr!==0 && curr!==6){

dayOff++;

holidays.value=dayOff;

}
}
}

// select option
 function b()
 {
var typeOf = document.getElementById("typeOf");
 var type = typeOf.options[typeOf.selectedIndex].text;
 document.getElementById("type").value=type;
 
 }

// delete value
function deleteValue(){
var table = document.getElementById("table1");
var rowCount = table.rows.length;
for (var i=rowCount-1; i >0; i--) {
    table.deleteRow(i);
}
}

//insert value to Local Storage
function soo1(){
	
const date = new Date();
const text = date.toLocaleString();
var user = document.getElementById('user2').value;
var startDate = document.getElementById('startDate').value;
var endDate = document.getElementById('endDate').value;
var working = document.getElementById('working').value;
var holidays = document.getElementById('holidays').value;
var type = document.getElementById('type').value;
var st = document.getElementById('status').value;

if(localStorage.getItem('newValue')==null){
localStorage.setItem('newValue','[]')
					
if(working!==""||holidays!=="")	{
 
var oldValue = JSON.parse(localStorage.getItem('newValue'));

oldValue.push({name: user, result0: text, result1: startDate, result2: endDate, result3: working, result4: holidays,result5: type, result6: st});
	
localStorage.setItem('newValue', JSON.stringify(oldValue));
	 
var storedOb = JSON.parse(localStorage.getItem('newValue'));

showData();
window.location.reload();


}
else{
	alert("We can't send Your message.\nWrong data");
}
}

// show saved values

function showData(){

var storedOb = JSON.parse(localStorage.getItem('newValue'));

var table = document.getElementById('table1');
deleteValue();

for (var i = 0; i < storedOb.length; i++) {
  if(storedOb[i].name!==null){
	  const date = new Date();
 const text = date.toLocaleString();
  var row = table.insertRow(-1);
 var cell0 = row.insertCell(0);
var cell1 = row.insertCell(1);
 var cell2 = row.insertCell(2);
 var cell3 = row.insertCell(3);
 var cell4 = row.insertCell(4);
 var cell5 = row.insertCell(5);
 var cell6 = row.insertCell(6);
 var cell7 = row.insertCell(7);
 cell0.innerHTML = storedOb[i].name;
 cell1.innerHTML = storedOb[i].result0;
 cell2.innerHTML = storedOb[i].result1;
 cell3.innerHTML = storedOb[i].result2;
 cell4.innerHTML = storedOb[i].result3;
 cell5.innerHTML = storedOb[i].result4;
 cell6.innerHTML = storedOb[i].result5;
 cell7.innerHTML = storedOb[i].result6;


	

}

}
}

