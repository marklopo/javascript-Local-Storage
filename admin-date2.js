//get date and admin
function nDate() {         
  setTimeout(function() {   
    const date = new Date();
    const text = date.toLocaleString();
    document.getElementById("dateNow").innerHTML = text; 
	var user = "Adam Nowak";
	document.getElementById('name').innerHTML = user;	
    nDate();             
  }, 1000)
 
}

nDate(); 
showAllData();
holidayRequest(); 

//calculated holidays and working days
function countingTheNumberOfDays(){
	
const working = document.getElementById('working');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
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
 // select option
 function c()
 {
 var accept = document.getElementById("accept");
 var status = accept.options[accept.selectedIndex].text;
 document.getElementById("status").value=status;
 
 }
// delete value
function deleteValue(){
var table = document.getElementById('table1');
var rowCount = table.rows.length;
for (var i=rowCount-1; i >0; i--) {
    table.deleteRow(i);
}
}

// update value
function rewriteRequest(){
	if (st!='Status'){
	const date = new Date();
 const text = date.toLocaleString();
	var user = document.getElementById('user2').value;
		var startDate = document.getElementById('startDate').value;
var endDate = document.getElementById('endDate').value;
var working = document.getElementById('working').value;
var holidays = document.getElementById('holidays').value;
var type = document.getElementById('type').value;
var st = document.getElementById('status').value;
var print = document.getElementById('print');

		if(localStorage.getItem('newValue')==null){
			localStorage.setItem('newValue','[]')
			
		}

var oldValue = JSON.parse(localStorage.getItem('newValue'));
oldValue.push({name: user, result0: text, result1: startDate, result2: endDate, result3: working, result4: holidays,result5: type, result6: st});

	
localStorage.setItem('newValue', JSON.stringify(oldValue));
	return oldValue;

var table = document.getElementById('table1')
var row = table.insertRow(-1)
  
var retrievedObject = JSON.parse(localStorage.getItem('newValue'));

autoFillTable();
deleteValue();
showAllData();

}
else{
	alert("Error")
}
}

//approval of the leave request
function holidayRequest(){
	
var st = document.getElementById('status').value;
var u = document.getElementById('user2').value;
	
	if(st!=="Status"){
	var storedOb = JSON.parse(localStorage.getItem('newValue'));
	storedOb.forEach(function (item, index)
	{
		if(document.getElementById('request').value==item.result0){
			
storedOb.splice(index,1);
}
		});
	
	localStorage.setItem('newValue', JSON.stringify(storedOb));
	rewriteRequest();
	document.getElementById("filtr").innerHTML = "";
	window.location.reload();
	}
	
	else{
		document.getElementById('status').value = "Status";
		document.getElementById("filtr").innerHTML = "";
	}
}

//table autocomplete
function autoFillTable(){
	
 var table = document.getElementById('table1');
 
 const date = new Date();
 const text = date.toLocaleString();

  for (var i = 0; i <table.rows.length; i++) {
 
  table.rows[i].addEventListener('click', function (e) {  
   document.getElementById('user2').value = this.cells[0].innerHTML;
   document.getElementById('request').value = this.cells[1].innerHTML;
   document.getElementById('startDate2').value = this.cells[2].innerHTML;
  document.getElementById('endDate2').value = this.cells[3].innerHTML;
    document.getElementById('working').value = this.cells[4].innerHTML;
   document.getElementById('holidays').value = this.cells[5].innerHTML;
   document.getElementById('type').value = this.cells[6].innerHTML;
   document.getElementById('status').value =  this.cells[7].innerHTML;
   
 });
 
}

}


// show saved values
function showAllData(){
	
 document.getElementById("sfilter2").style.display = "none";
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
autoFillTable();
}}}


// show saved values and sort by name
function showAllDataFilterName(){

var filter = document.getElementById('filtr').value;
var storedOb = JSON.parse(localStorage.getItem('newValue'));

var table = document.getElementById('table1');
deleteValue();

for (var i = 0; i < storedOb.length; i++) {
  if(storedOb[i].name===filter){
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

 

  autoFillTable();
}}}

// show saved values and sort by status
function showAllDataFilterStatus(){
	
var filter = document.getElementById('sfilter2').value;
var storedOb = JSON.parse(localStorage.getItem('newValue'));

var table = document.getElementById('table1');
deleteValue();

for (var i = 0; i < storedOb.length; i++) {
  if(storedOb[i].result6===filter){
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
 autoFillTable();
}}}

//data filter
function filter(){
const search = document.getElementById('sfilter').value;
  const result = search;
switch (result) {
  case 'Name':
    showAllDataFilterName();
    break;
  case 'Status':
  showAllDataFilterStatus();
    break;
  default:
    console.log(`${result} does not exist.`);
}
}

//edit the search field
function myFunction() {
    var x = document.getElementById("sfilter").value;
    if (x =="Status") {
		document.getElementById("sfilter2").style.display = "block";
		document.getElementById("filtr").disabled = true;
	}
	else {
		document.getElementById("sfilter2").style.display = "none"
		document.getElementById("filtr").disabled = false;};
}




// remove item
function itemRemove(){
	var st = document.getElementById('status').value;
	var u = document.getElementById('user2').value;
	if(st!=="Status"){
	var storedOb = JSON.parse(localStorage.getItem('newValue'));
	storedOb.forEach(function (item, index)
	{
		if(document.getElementById('request').value==item.result0){
			
storedOb.splice(index,1);
 

		}
		
	}
	
	);
	
	localStorage.setItem('newValue', JSON.stringify(storedOb));
	document.getElementById('status').innerHTML = "Status";
	document.getElementById("filtr").innerHTML = "";
	window.location.reload();
 
}}