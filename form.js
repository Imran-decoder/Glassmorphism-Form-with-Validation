function formvalidation(){
    var name = document.myform.Name.value
    var email= document.myform.Email_id.value
    var pass=document.myform.Password.value
    var num=document.myform.number.value

    if(name==null || name==""){
        alert("Name can't be blank");
    }
    else if(pass.length<6){
        alert("Password can't be less than 6 digit")
    }
    else if(num.length<9 ){
        alert("Invalid Number")
    }
}
