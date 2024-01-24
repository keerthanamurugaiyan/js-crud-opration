// alert("helo")
let array=[]
let index = -1 
function validateForm(event) {

    var firstname =document.getElementById("fname").value;
    var lastname =document.getElementById("last").value;
    var email  =document.getElementById("email").value;

    if(firstname.trim()===''){
        document.getElementById("firstError").innerHTML ="firstname is required";
        document.getElementById("fname").style.border="2px solid red";
        // event.preventDefault();
    }
    else{
        document.getElementById("firstError").innerHTML ='';
        document.getElementById("fname").style.border="";
    }
    
    if(lastname.trim()===''){
        document.getElementById("lastError").innerHTML ="lastname is required";
        document.getElementById("last").style.border="2px solid red";
        // event.preventDefault();
    }

    else{
        document.getElementById("lastError").innerHTML ='';
        document.getElementById("last").style.border="";
    }
    
    if(email.trim()===''){
        document.getElementById("emailError").innerHTML ="email is required";
        document.getElementById("email").style.border="2px solid red";
        // event.preventDefault();
    }

    else{
        document.getElementById("emailError").innerHTML ='';
        document.getElementById("email").style.border="";
    }


// create object//
if(index !== -1 && firstname!==""&&lastname!==""&&email!==""){
    array[index].firstname= firstname 
    array[index].lastname= lastname
    array[index].email= email
}
else if(firstname!==""&&lastname!==""&&email!==""){
    let obj={};
  obj.firstname = document.getElementById("fname").value;
  obj.lastname = document.getElementById("last").value;
  obj.email = document.getElementById("email").value;
    array.push(obj);
    console.log(array);
  
    document.getElementById("fname").value=""
    document.getElementById("last").value=""
    document.getElementById("email").value=""
    table()
}
      
    
}
// //table add//
function table(){
    let coloum="";
    for  (let i=0;i<array.length;i++){
        coloum+="<tr>";
        coloum+="<td>"+array[i].firstname+"</td>"
        coloum+="<td>"+array[i].lastname+"</td>"
        coloum+="<td>"+array[i].email+"</td>"
        coloum+="<td><button class='btn btn-success de' onclick='Edit("+i+")'>Edit</button>  <button class='btn btn-danger de' onclick='Delete("+i+")'>Delete</button></td>";
        coloum += "</tr>";
    } 
  document.getElementById("tbody").innerHTML= coloum;
}

// functio delete

function Delete(it) {
    array.splice(it,1)
    table()
}

// function edit

function Edit(ed) {
    for (let i = 0; i < array.length; i++) {
        
        if (ed==i) {
            index = i
            document.getElementById("fname").value=array[i].firstname
            document.getElementById("last").value=array[i].lastname
            document.getElementById("email").value=array[i].email
            
        }
    }
}
