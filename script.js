
var row = null;

function Submit() {
    var dataEntered = retrieveData(); 
    // console.log(dataEntered)
    var readData = readingDataFromLocalStorage(dataEntered);
    if (dataEntered == false) {
        msg.innerHTML = "Please Enter All The Data"
    }
    else {
        if (row == null) {
            insert(readData);
            msg.innerHTML = "Data Inserted"
        }
        else {
            update();
            msg.innerHTML = "Data Updated"

        }
    }

    document.getElementById("form").reset();
    
    
   
}

//CREATE
//Retrieving data from Form
function retrieveData() {
    var name1 = document.getElementById("name").value;
    var  job= document.getElementById("job").value;
    var exp = document.getElementById("exp").value;
    
    var arr = [name1, job, exp]
    if (arr.includes("")) {
        return false;
    }
    else {
        return arr; 
    }
  
}
//READ
//Data in LocalStorage
function readingDataFromLocalStorage(dataEntered) {
    var n = localStorage.setItem("Name", dataEntered[0])
    var j = localStorage.setItem("Job", dataEntered[1])
    var e = localStorage.setItem("Experience", dataEntered[2])

    //getting values from local storage to tables
    var n1 = localStorage.getItem("Name", n);
    var j1 = localStorage.getItem("Job", j);
    var e1 = localStorage.getItem("Experience", e);

    var arr = [n1, j1, e1];
    return arr;
}

//INSERT
// function insert(readData) {
//     var row = table.insertRow();
//     var cell1=row.insertCell(0)
//     var cell2=row.insertCell(1)
//     var cell3 = row.insertCell(2)
    
//     cell1.innerHTML = readData[0];
//     cell2.innerHTML = readData[1];
//     cell3.innerHTML = readData[2];
// }


//this keyword is referering to current object (innerHTML is the current object)
function insert(readData) {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = 
        `<button onclick= edit(this)>Edit</button>
        <button onclick= remove(this)>Delete</button>`;
}


//EDIT
//cells are the array which are stored by default like when i am creating a table all the data ofcells are stored in cells array
function edit(td) {
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("job").value = row.cells[1].innerHTML;
    document.getElementById("exp").value = row.cells[2].innerHTML;

}

//UPDATE
function update() {
    row.cells[0].innerHTML = document.getElementById("name").value
    row.cells[1].innerHTML = document.getElementById("job").value
    row.cells[2].innerHTML = document.getElementById("exp").value
    row = null;

}

//DELETE

function remove(td) {
    var ans = confirm("Are You Sure You want to Delete This Record?")
    if(ans==true){
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex)
    }
}